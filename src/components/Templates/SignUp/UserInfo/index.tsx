import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import FlexWrap from "@/components/Atoms/FlexWrap";
import OutlineInputBox from "@/components/Atoms/OutlineInputBox";
import OutlinePasswordInputBox from "@/components/Atoms/OutlinePasswordInputBox";
import RoundButton from "@/components/Atoms/RoundButton";
import { Text } from "@/components/Templates/SignUp/styles";
import { login } from "@/utils/tokenUtils";

function UserInfo({
  email,
  name,
  setName,
  pw,
  setPw,
  pwConfirm,
  setPwConfirm,
  nextPage,
}: {
  email: string;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  pw: string;
  setPw: React.Dispatch<React.SetStateAction<string>>;
  pwConfirm: string;
  setPwConfirm: React.Dispatch<React.SetStateAction<string>>;
  nextPage: () => void;
}): React.ReactElement {
  const router = useRouter();
  const pwRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const [err, setError] = useState("");
  const [pwErr, setPwError] = useState("");
  const [pwConfirmErr, setPwConfirmError] = useState("");

  const handleLoginPage = () => {
    router.push("/login");
  };

  const existError = () => {
    if (!name) {
      setError("이름을 입력하세요");
      return true;
    }
    setError("");

    if (!pw) {
      setPwError("비밀번호를 입력하세요");
      return true;
    }
    setPwError("");

    if (!pwRegEx.test(pw)) {
      setPwError("비밀번호는 영문/숫자 조합하여 최소 8자리 이상이어야 합니다");
      return true;
    }
    setPwError("");

    if (!pwConfirm) {
      setPwConfirmError("비밀번호를 입력하세요");
      return true;
    }
    setPwConfirmError("");

    if (pw != pwConfirm) {
      setPwConfirmError("비밀번호가 일치하지 않습니다");
      return true;
    }
    setPwConfirmError("");
    return false;
  };

  const registerUser = () => {
    if (existError()) return;

    const data = {
      name: name,
      email: email,
      password: pw,
      passwordCheck: pwConfirm,
    };
    axios
      .post(`${process.env.NEXT_PUBLIC_BASEURL}/auth/register`, data)
      .then(async (res) => {
        if (res.data.error) setError(res.data.error.userMessage);
        else {
          if (await login(email, pw, true)) nextPage();
        }
      });
  };

  return (
    <form>
      <FlexWrap gap={20}>
        <OutlineInputBox
          placeHolder={"이름을 입력해주세요"}
          text={name}
          setText={setName}
          autoComplete={"name"}
          errText={err}
        />
        <OutlinePasswordInputBox
          placeHolder={"비밀번호를 입력해주세요"}
          text={pw}
          setText={setPw}
          errText={pwErr}
        />
        <OutlinePasswordInputBox
          placeHolder={"비밀번호를 확인해주세요"}
          text={pwConfirm}
          setText={setPwConfirm}
          errText={pwConfirmErr}
        />
        <FlexWrap gap={5}>
          <RoundButton
            isFilled={true}
            text={"회원가입 완료하기"}
            onClick={registerUser}
          />
          <Text className="login" onClick={handleLoginPage}>
            {"이미 계정이 있으신가요?"}
          </Text>
        </FlexWrap>
      </FlexWrap>
    </form>
  );
}

export default UserInfo;
