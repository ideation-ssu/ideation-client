import React, { useEffect, useState } from "react";
import Konva from "konva";
import { Circle, Group, Layer, Stage, Text } from "react-konva";

import Driver from "@/components/Atoms/Driver";
import {
  ContextItem,
  ContextMenu,
  HoverTextWrap,
} from "@/components/Atoms/RandomCircle/styles";
import NewIdeaModal from "@/components/Molecules/NewIdeaModal";
import { ICircle } from "@/interfaces/circle";
import { Joiner } from "@/interfaces/project";
import { useAuth } from "@/utils/auth";

const RandomCircle = ({
  projectId,
  brainstormingId,
  joiners,
  value,
  setValue,
  circles,
  sendCircle,
  removeCircle,
  likeCircle,
}: {
  projectId: number;
  brainstormingId: number;
  joiners: Joiner[];
  value: string;
  setValue: (value: string) => void;
  circles: ICircle[];
  sendCircle: (circle: ICircle) => void;
  removeCircle: (sessionIdeaId: string) => void;
  likeCircle: (sessionIdeaId: string) => void;
}) => {
  const { user, axios } = useAuth();
  const [canvasSize, setCanvasSize] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });

  const defaultCircle = {
    userId: 0,
    brainstormingId: 0,
    ideaName: "",
    sessionIdeaId: "",
    x: 0,
    y: 0,
    radius: 0,
    color: "",
  };
  const [contextMenu, setContextMenu] = useState({
    visible: false,
    x: "0px",
    y: "0px",
    circle: defaultCircle,
  });
  const [hoverText, setHoverText] = useState({
    visible: false,
    x: "0px",
    y: "0px",
    circle: defaultCircle,
  });
  const [selectedCircle, setSelectedCircle] = useState<ICircle>();

  // new idea modal
  const [newIdeaOpen, setNewIdeaOpen] = React.useState(false);
  const handleNewIdeaOpen = () => setNewIdeaOpen(true);
  const handleNewIdeaClose = () => setNewIdeaOpen(false);

  useEffect(() => {
    setCanvasSize({
      width: window.innerWidth,
      height: window.innerHeight - 170,
    });
  }, []);

  useEffect(() => {
    if (value) addCircle(value);

    const handleResize = () => {
      setCanvasSize({
        width: window.innerWidth,
        height: window.innerHeight - 170,
      });
    };

    // 컴포넌트가 마운트된 후에 윈도우 크기 변경 이벤트 리스너 등록
    window.addEventListener("resize", handleResize);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [value]);

  const addCircle = (value: string) => {
    const x = Math.random() * canvasSize.width;
    const y = Math.random() * canvasSize.height;
    const radius = 60;
    const color = Konva.Util.getRandomColor();

    const userId = user.id;
    const sessionIdeaId = ""; // 새로운 원 추가 시 seesionIdeaId를 empty로 넘김
    const newCircle: ICircle = {
      userId: userId,
      brainstormingId: brainstormingId,
      sessionIdeaId: sessionIdeaId,
      x: x,
      y: y,
      radius: radius,
      color: color,
      ideaName: value,
    };
    setValue("");
    sendCircle(newCircle);
  };

  const handleDragStart = (e: Konva.KonvaEventObject<DragEvent>) => {
    const id = e.target.name();
    const updatedCircles = [...circles];
    const circleIndex = updatedCircles.findIndex(
      (circle) => circle.sessionIdeaId === id
    );
    const [draggedCircle] = updatedCircles.splice(circleIndex, 1);
    updatedCircles.push(draggedCircle);
  };

  const onDragEnd = (e: Konva.KonvaEventObject<DragEvent>) => {
    circles.map((circle) => {
      if (circle.sessionIdeaId === e.target.name()) {
        const updateCircle: ICircle = {
          ...circle,
          x: e.target.x(),
          y: e.target.y(),
        };
        sendCircle(updateCircle);
      }
    });
  };

  const handleDubleClick = (e: Konva.KonvaEventObject<MouseEvent>) => {
    circles.map((circle) => {
      if (circle.sessionIdeaId === e.target.name()) {
        const updateCircle: ICircle = {
          ...circle,
          radius: e.target.attrs.radius + 6,
        };
        sendCircle(updateCircle);
        likeCircle(circle.sessionIdeaId);
      }
    });
  };

  const handleContextMenu = (
    e: Konva.KonvaEventObject<MouseEvent>,
    circle: ICircle
  ) => {
    e.evt.preventDefault();
    setContextMenu({
      visible: true,
      x: `${e.evt.x}px`,
      y: `${e.evt.y}px`,
      circle: circle,
    });
  };

  const handleCloseContextMenu = () => {
    setContextMenu({
      visible: false,
      x: "0px",
      y: "0px",
      circle: defaultCircle,
    });
  };

  const handleClickOutside = (e: Konva.KonvaEventObject<MouseEvent>) => {
    if (contextMenu.x != `${e.evt.x}px` && contextMenu.y != `${e.evt.y}px`)
      handleCloseContextMenu();
  };

  const handleMouseOver = (x: number, y: number, circle: ICircle) => {
    setHoverText({
      visible: true,
      x: `${x}px`,
      y: `${y}px`,
      circle: circle,
    });
  };

  const handleMouseOut = () => {
    setHoverText({
      visible: false,
      x: "0px",
      y: "0px",
      circle: defaultCircle,
    });
  };

  function truncateText(text: string, maxWidth: number) {
    const ellipsis = "...";
    let truncatedText = text;

    if (text.length > maxWidth / 10) {
      // 원하는 폰트 크기에 따라 maxWidth를 조절.
      const maxTextLength = Math.floor((maxWidth / 10) * 0.75); // 말줄임표를 고려하여 최대 길이를 설정
      truncatedText = text.slice(0, maxTextLength) + ellipsis;
    }

    return truncatedText;
  }

  return (
    <>
      <Stage
        width={canvasSize.width}
        height={canvasSize.height}
        onClick={handleClickOutside}
      >
        <Layer>
          {circles?.map((circle, index) => {
            return (
              <Group
                draggable={true}
                key={index}
                name={circle.sessionIdeaId}
                x={circle.x}
                y={circle.y}
                onDragStart={handleDragStart}
                onDragEnd={onDragEnd}
                onContextMenu={(e: Konva.KonvaEventObject<MouseEvent>) => {
                  handleContextMenu(e, circle);
                }}
                onMouseOver={() => {
                  handleMouseOver(
                    circle.x,
                    circle.y + circle.radius * 1.5,
                    circle
                  );
                }}
                onMouseOut={handleMouseOut}
              >
                <Circle
                  name={circle.sessionIdeaId}
                  fill={circle.color}
                  radius={circle.radius}
                  onDblClick={handleDubleClick}
                />
                <Text
                  text={truncateText(circle.ideaName, circle.radius * 2)}
                  x={0}
                  y={circle.radius - 5}
                  fill="black"
                  fontSize={13}
                  fontWeight="bold"
                  fontFamily="Pretendard"
                  width={circle.radius * 2}
                  height={10}
                  offset={{ x: circle.radius, y: circle.radius }}
                  align="center"
                  textOverflow="ellipsis"
                />
              </Group>
            );
          })}
        </Layer>
      </Stage>
      {contextMenu.visible && (
        <ContextMenu x={contextMenu.x} y={contextMenu.y}>
          <ContextItem
            onClick={() => {
              setSelectedCircle(contextMenu.circle);
              handleNewIdeaOpen();
              handleCloseContextMenu();
            }}
          >
            {"아이디어로 생성하기"}
          </ContextItem>
          <Driver />
          <ContextItem
            onClick={() => {
              removeCircle(contextMenu.circle.sessionIdeaId);
              handleCloseContextMenu();
            }}
          >
            {"삭제하기"}
          </ContextItem>
        </ContextMenu>
      )}
      {hoverText.visible && (
        <HoverTextWrap x={hoverText.x} y={hoverText.y}>
          {`${hoverText.circle.ideaName}`}
        </HoverTextWrap>
      )}
      {selectedCircle && (
        <NewIdeaModal
          projectId={projectId}
          open={newIdeaOpen}
          handleClose={handleNewIdeaClose}
          joiners={joiners}
          defaultTitle={selectedCircle.ideaName}
        />
      )}
    </>
  );
};

export default RandomCircle;
