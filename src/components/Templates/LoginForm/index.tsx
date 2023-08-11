import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import ErrorMsg from "@/components/Atoms/ErrorMsg";
import IdeationLabel from "@/components/Atoms/IdeationLabel";
import InputBox from "@/components/Atoms/InputBox";
import KakaoButton from "@/components/Atoms/KakaoButton";
import PasswordInputBox from "@/components/Atoms/PasswordInputBox";
import RoundButton from "@/components/Atoms/RoundButton";
import TextCheckBox from "@/components/Molecules/TextCheckBox";
import { isLoggedIn, login } from "@/utils/tokenUtils";

import TitleCard from "../../Molecules/Card";

import { FlexWrap, InnerContainer } from "./styles";

function LoginForm({
  handleLoginAfter,
  handleSignUp,
}: {
  handleLoginAfter: () => void;
  handleSignUp: () => void;
}): React.ReactElement {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [autoLogin, setAutoLogin] = useState(false);
  const [loginErr, setLoginErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [pwErr, setPwErr] = useState("");

  useEffect(() => {
    if (isLoggedIn()) router.push("/main");
  }, []);

  const handleAutoLogin = () => {
    setAutoLogin(!autoLogin);
  };

  const existErr = () => {
    if (!email) {
      setEmailErr("이메일을 입력하세요");
      setLoginErr("");
      setPwErr("");
      return true;
    }

    if (!pw) {
      setPwErr("비밀번호를 입력하세요");
      setEmailErr("");
      setLoginErr("");
      return true;
    }

    setLoginErr("");
    setEmailErr("");
    setPwErr("");
    return false;
  };

  const handleLogin = async () => {
    if (existErr()) return;

    if (!login(email, pw, autoLogin)) {
      setLoginErr("이메일 또는 비밀번호를 잘못 입력했습니다.");
      return;
    }
    handleLoginAfter();
  };

  return (
    <TitleCard titleText={"LOGIN"}>
      <InnerContainer>
        <IdeationLabel />
        <FlexWrap gap={20}>
          <form>
            <FlexWrap gap={25}>
              <InputBox
                placeHolder={"이메일을 입력하세요"}
                text={email}
                setText={setEmail}
                errText={emailErr}
                autoComplete={"username"}
              />
              <PasswordInputBox
                placeHolder={"비밀번호를 입력하세요"}
                text={pw}
                setText={setPw}
                errText={pwErr}
              />
            </FlexWrap>
          </form>
          <TextCheckBox
            check={autoLogin}
            setCheck={handleAutoLogin}
            text={"자동 로그인"}
          />
          {loginErr && <ErrorMsg errText={loginErr} />}
          <FlexWrap gap={6}>
            <RoundButton
              isFilled={true}
              text={"로그인"}
              onClick={handleLogin}
            />
            <RoundButton
              isFilled={false}
              text={"회원가입"}
              onClick={handleSignUp}
            />
            <KakaoButton text={"카카오 로그인"} />
          </FlexWrap>
        </FlexWrap>
      </InnerContainer>
    </TitleCard>
  );
}

export default LoginForm;
