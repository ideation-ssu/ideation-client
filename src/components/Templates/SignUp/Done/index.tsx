import React, { useState } from "react";

import FlexWrap from "@/components/Atoms/FlexWrap";
import IdeationLabel from "@/components/Atoms/IdeationLabel";
import RoundButton from "@/components/Atoms/RoundButton";
import Card from "@/components/Templates/Card";
import {
  Circle,
  Container,
  InnerContainer,
  Text,
} from "@/styles/signup/styles";

function Done({ name }: { name: string }): React.ReactElement {
  return (
    <Container>
      <Card>
        <InnerContainer className="more-padding">
          <FlexWrap gap={30}>
            <IdeationLabel isColorful={true} />
            <Circle />
            <Text className={"welcome"}>{`환영합니다, ${name}님!`}</Text>
            <FlexWrap gap={6}>
              <RoundButton isFilled={true} text={"튜토리얼 확인하러 가기"} />
              <RoundButton isFilled={false} text={"바로 프로젝트 생성하기"} />
            </FlexWrap>
          </FlexWrap>
        </InnerContainer>
      </Card>
    </Container>
  );
}

export default Done;
