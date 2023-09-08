import React, { useEffect, useState } from "react";
import Konva from "konva";
import { Circle, Group, Image, Layer, Stage, Text } from "react-konva";

import { ICircle } from "@/interfaces/circle";

const RandomCircle = ({
  value,
  setValue,
  circles,
  setCircles,
  sendCircle,
}: {
  value: string;
  setValue: (value: string) => void;
  circles: ICircle[];
  setCircles: (circle: ICircle[]) => void;
  sendCircle: (circle: ICircle) => void;
}) => {
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

    const maxRadius = 100; // 최대 반지름 (원의 크기)
    const minRadius = 50; // 최소 반지름 (원의 크기)
    const radius =
      Math.floor(Math.random() * (maxRadius - minRadius + 1)) + minRadius;
    const color = Konva.Util.getRandomColor();
    const id = `${value}-${x}-${y}-${radius}-${color}`;

    const ellipsis = "...";
    const text =
      value.length > 32 ? value.slice(0, value.length - 3) + ellipsis : value;

    const newCircle = { id, x, y, radius, color, text };
    setValue("");
    sendCircle(newCircle);
  };

  const handleDragStart = (e: Konva.KonvaEventObject<DragEvent>) => {
    const id = e.target.name();
    const updatedCircles = [...circles];
    const circleIndex = updatedCircles.findIndex((circle) => circle.id === id);
    const [draggedCircle] = updatedCircles.splice(circleIndex, 1);
    updatedCircles.push(draggedCircle);
    setCircles(updatedCircles);
  };

  const onDragEnd = (e: Konva.KonvaEventObject<DragEvent>) => {
    const updatedCircles = circles.map((circle) => {
      if (circle.id === e.target.name()) {
        return {
          ...circle,
          x: e.target.x(),
          y: e.target.y(),
        };
      }
      // sendCircle(circle);
      return circle;
    });
    setCircles(updatedCircles);
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
    console.log(e);
    const updatedCircles = circles.map((circle) => {
      if (circle.id === e.target.name()) {
        return {
          ...circle,
          radius: e.target.attrs.radius + 1,
        };
      }
      return circle;
    });
    setCircles(updatedCircles);
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
                onDragStart={handleDragStart}
                onDragEnd={onDragEnd}
              >
                <Circle
                  name={circle.id}
                  x={circle.x}
                  y={circle.y}
                  fill={circle.color}
                  radius={circle.radius}
                  onClick={handleOnClick}
                  onDblClick={handleDubleClick}
                />
                <Text
                  text={circle.text}
                  x={circle.x - circle.radius}
                  y={circle.y - 10}
                  width={circle.radius * 2}
                  fill="white"
                  align="center"
                  verticalAlign="middle"
                  wrap="word"
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
