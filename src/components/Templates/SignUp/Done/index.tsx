import React from "react";

import FlexWrap from "@/components/Atoms/FlexWrap";
import IdeationLabel from "@/components/Atoms/IdeationLabel";
import RoundButton from "@/components/Atoms/RoundButton";
import { Circle, Text } from "@/components/Templates/SignUp/styles";

function Done({
  name,
  handleClick,
}: {
  name: string;
  handleClick: () => void;
}): React.ReactElement {
  return (
    <FlexWrap gap={30}>
      <IdeationLabel isColorful={true} />
      <Circle />
      <Text className={"welcome"}>{`환영합니다, ${name}님!`}</Text>
      <FlexWrap gap={6}>
        <RoundButton isFilled={true} text={"튜토리얼 확인하러 가기"} />
        <RoundButton
          isFilled={false}
          text={"바로 프로젝트 생성하기"}
          onClick={handleClick}
        />
      </FlexWrap>
    </FlexWrap>
  );
}

export default Done;
