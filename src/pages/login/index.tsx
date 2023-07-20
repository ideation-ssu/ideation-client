import React, { useState } from "react";
import { useRouter } from "next/router";

import IdeationLabel from "@/components/Atoms/IdeationLabel";
import InputBox from "@/components/Atoms/InputBox";
import KakaoButton from "@/components/Atoms/KakaoButton";
import RoundButton from "@/components/Atoms/RoundButton";
import TextCheckBox from "@/components/Molecules/TextCheckBox";
import { Container, FlexWrap, InnerContainer } from "@/styles/login/styles";

import TitleCard from "../../components/Templates/Card";

function Login(): React.ReactElement {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [autoLogin, setAutoLogin] = useState(false);
  const router = useRouter();

  const handleAutoLogin = () => {
    setAutoLogin(!autoLogin);
  };

  return (
    <Container>
      <TitleCard titleText={"LOGIN"}>
        <InnerContainer>
          <IdeationLabel />
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
            <TextCheckBox
              check={autoLogin}
              setCheck={handleAutoLogin}
              text={"자동 로그인"}
            />
            <FlexWrap gap={6}>
              <RoundButton isFilled={true} text={"로그인"} />
              <RoundButton
                isFilled={false}
                text={"회원가입"}
                onClick={() => {
                  router.push("/signup");
                }}
              />
              <KakaoButton text={"카카오 로그인"} />
            </FlexWrap>
          </FlexWrap>
        </InnerContainer>
      </TitleCard>
    </Container>
  );
}

export default Login;
