import React, { useEffect, useState } from "react";
import Konva from "konva";
import { Circle, Group, Layer, Stage, Text } from "react-konva";

import { ICircle } from "@/interfaces/circle";
import { useAuth } from "@/utils/auth";

const RandomCircle = ({
  brainstormingId,
  value,
  setValue,
  circles,
  setCircles,
  sendCircle,
}: {
  brainstormingId: number;
  value: string;
  setValue: (value: string) => void;
  circles: ICircle[];
  setCircles: (circle: ICircle[]) => void;
  sendCircle: (circle: ICircle) => void;
}) => {
  const { user } = useAuth();
  const [canvasSize, setCanvasSize] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });

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
    const id = `${value}-${x}-${y}-${color}`;

    // const ellipsis = "...";
    // const text =
    //   value.length > 32 ? value.slice(0, value.length - 3) + ellipsis : value;

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
    // setCircles(updatedCircles);
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

  const handleOnClick = (e: Konva.KonvaEventObject<MouseEvent>) => {
    console.log(e);
    switch (e.evt.detail) {
      case 1: {
        console.log("single click");
        break;
      }
      case 2: {
        console.log("double click");
        break;
      }
      case 3: {
        console.log("triple click");
        break;
      }
      default: {
        break;
      }
    }
  };

  const handleDubleClick = (e: Konva.KonvaEventObject<MouseEvent>) => {
    circles.map((circle) => {
      if (circle.sessionIdeaId === e.target.name()) {
        const updateCircle: ICircle = {
          ...circle,
          radius: e.target.attrs.radius + 2,
        };
        sendCircle(updateCircle);
      }
    });
  };

  return (
    <>
      <Stage width={canvasSize.width} height={canvasSize.height}>
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
              >
                <Circle
                  name={circle.sessionIdeaId}
                  fill={circle.color}
                  radius={circle.radius}
                  onClick={handleOnClick}
                  onDblClick={handleDubleClick}
                />
                <Text
                  text={
                    circle.ideaName.length > (circle.radius * 2) / 10
                      ? circle.ideaName.slice(0, value.length - 3) + "..."
                      : circle.ideaName
                  }
                  x={0 - (circle.ideaName.length / 2) * 8}
                  fill="white"
                  fontSize={10}
                />
              </Group>
            );
          })}
        </Layer>
      </Stage>
    </>
  );
};

export default RandomCircle;
