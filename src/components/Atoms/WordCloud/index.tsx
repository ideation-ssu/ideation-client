import React from "react";
import ReactWordcloud from "react-wordcloud";

import { Container } from "@/components/Atoms/WordCloud/styles";
import { IWordCloud } from "@/interfaces/statistics";

function WordCloud({ words }: { words: IWordCloud[] }) {
  const fontSizes: [number, number] = [20, 60];
  const rotationAngles: [number, number] = [0, 90];

  const options = {
    colors: ["#1D1568", "#005E69", "#012777", "#080522", "#014C7F"],
    enableTooltip: false,
    deterministic: false,
    fontFamily: "Pretendard-ExtraBold",
    fontSizes: fontSizes,
    fontStyle: "normal",
    fontWeight: "bold",
    padding: 1,
    rotations: 3,
    rotationAngles: rotationAngles,
    transitionDuration: 1000,
  };

  return (
    <Container>
      <ReactWordcloud words={words} options={options} />
    </Container>
  );
}

export default WordCloud;
