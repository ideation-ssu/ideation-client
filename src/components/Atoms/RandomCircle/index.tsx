import React, { KeyboardEvent, useEffect, useState } from "react";

import { ICircle } from "@/interfaces/circle";

import { Circle } from "./styles";

const RandomCircle = ({
  value,
  setValue,
}: {
  value: string;
  setValue: (value: string) => void;
}) => {
  const [circles, setCircles] = useState<ICircle[]>([]);
  useEffect(() => {
    if (value) addCircle(value);
  }, [value]);

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const addCircle = (value: string) => {
    console.log("add circle");
    const screenWidth = window.innerWidth; // 화면 너비
    const screenHeight = window.innerHeight; // 화면 높이
    const maxRadius = 200; // 최대 반지름 (원의 크기)
    const minRadius = 100; // 최소 반지름 (원의 크기)
    const maxAttempts = 100; // 최대 시도 횟수

    const color = getRandomColor();
    const radius =
      Math.floor(Math.random() * (maxRadius - minRadius + 1)) + minRadius;

    let x: number, y: number;
    let isOverlapping;
    let attempts = 0; // 시도 횟수 초기화
    do {
      x = Math.random() * (screenWidth - 2 * radius); // 가로 좌표

      // y 좌표 계산
      do {
        y = Math.random() * (screenHeight - 2 * radius); // 세로 좌표
      } while (y >= 600); // y가 600 이상이면 다시 계산

      // 생성된 원과 다른 원들과 겹치는지 확인
      isOverlapping = circles.some((circle) => {
        const dx = x - circle.x; // x 좌표 차이
        const dy = y - circle.y; // y 좌표 차이
        const distance = Math.sqrt(dx * dx + dy * dy); // 두 원의 중심 사이의 거리
        return distance < radius + circle.radius; // 겹치는 경우
      });

      attempts++; // 시도 횟수 증가
    } while (isOverlapping && attempts < maxAttempts); // 겹치는 동안 또는 최대 시도 횟수까지 반복

    if (!isOverlapping) {
      // 겹치지 않는 경우에만 원 추가
      const newCircle = { x, y, radius, color, value };
      setCircles([...circles, newCircle]);
      setValue("");
    } else {
      console.log("원을 추가할 수 없습니다. 최대 시도 횟수를 초과했습니다.");
    }
  };

  return (
    <>
      {circles?.map((circle, index) => {
        return (
          <Circle
            key={index}
            width={circle.radius}
            height={circle.radius}
            color={circle.color}
            top={circle.x}
            left={circle.y}
          >
            <span>{circle.value}</span>
          </Circle>
        );
      })}
    </>
  );
};

export default RandomCircle;
