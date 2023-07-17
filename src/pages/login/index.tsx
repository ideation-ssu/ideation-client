import React, { useState } from "react";

import InputBox from "@/components/Atoms/InputBox";
import RoundButton from "@/components/Atoms/RoundButton";
import TextCheckBox from "@/components/Molecules/TextCheckBox";
import TitleCard from "@/components/Templates/TitleCard";

import { Container, FlexWrap, InnerContainer, Label } from "./styles";

function Login(): React.ReactElement {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  return (
    <Container>
      <TitleCard titleText={"LOGIN"}>
        <InnerContainer>
          <Label>{"LET'S\nMAKE\nIDEATION !"}</Label>
          <FlexWrap gap={20}>
            <FlexWrap gap={25}>
              <InputBox
                placeHolder={"아이디를 입력하세요"}
                text={id}
                setText={setId}
              />
              <InputBox
                placeHolder={"비밀번호를 입력하세요"}
                text={pw}
                setText={setPw}
              />
            </FlexWrap>
            <TextCheckBox isChecked={true} text={"자동 로그인"} />
            <FlexWrap gap={5}>
              <RoundButton isFilled={true} text={"로그인"} />
              <RoundButton isFilled={false} text={"회원가입"} />
            </FlexWrap>
          </FlexWrap>
        </InnerContainer>
      </TitleCard>
    </Container>
  );
}

export default Login;
