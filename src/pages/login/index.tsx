import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import ErrorMsg from "@/components/Atoms/ErrorMsg";
import IdeationLabel from "@/components/Atoms/IdeationLabel";
import InputBox from "@/components/Atoms/InputBox";
import KakaoButton from "@/components/Atoms/KakaoButton";
import PasswordInputBox from "@/components/Atoms/PasswordInputBox";
import RoundButton from "@/components/Atoms/RoundButton";
import TextCheckBox from "@/components/Molecules/TextCheckBox";
import { Container, FlexWrap, InnerContainer } from "@/styles/login/styles";

import TitleCard from "../../components/Templates/Card";

function Login(): React.ReactElement {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [autoLogin, setAutoLogin] = useState(false);
  const [err, setErr] = useState("");

  const handleAutoLogin = () => {
    setAutoLogin(!autoLogin);
  };

  const login = () => {
    const data = {
      email: email,
      password: pw,
    };
    axios
      .post(`${process.env.NEXT_PUBLIC_BASEURL}/auth/login`, data)
      .then((res) => {
        if (res.data.error) setErr("이메일 또는 비밀번호를 잘못 입력했습니다.");
        else router.push("/");
      });
  };

  return (
    <Container>
      <TitleCard titleText={"LOGIN"}>
        <InnerContainer>
          <IdeationLabel />
          <FlexWrap gap={20}>
            <FlexWrap gap={25}>
              <InputBox
                placeHolder={"이메일을 입력하세요"}
                text={email}
                setText={setEmail}
              />
              <PasswordInputBox
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
            {err && <ErrorMsg errText={err} />}
            <FlexWrap gap={6}>
              <RoundButton isFilled={true} text={"로그인"} onClick={login} />
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
