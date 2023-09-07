import React, { KeyboardEvent, useEffect, useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Konva from "konva";
import { Circle, Group, Layer, Stage, Text } from "react-konva";

import { ICircle } from "@/interfaces/circle";

import { StyledCircle } from "./styles";

const RandomCircle = ({
  value,
  setValue,
}: {
  value: string;
  setValue: (value: string) => void;
}) => {
  const [circles, setCircles] = useState<ICircle[]>([]);
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
    setCircles([...circles, newCircle]);
    setValue("");
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
      return circle;
    });
    setCircles(updatedCircles);
  };

  const handleDubleClick = (e: Konva.KonvaEventObject<MouseEvent>) => {
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
            console.log(circle);
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
                  onClick={() => {
                    console.log("click");
                  }}
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
