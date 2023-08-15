import React, { useState } from "react";
import axios from "axios";

import Driver from "@/components/Atoms/Driver";
import FlexWrap from "@/components/Atoms/FlexWrap";
import KakaoButton from "@/components/Atoms/KakaoButton";
import OutlineInputBox from "@/components/Atoms/OutlineInputBox";
import RoundButton from "@/components/Atoms/RoundButton";
import { Text } from "@/components/Templates/SignUp/styles";
import { getToken } from "@/utils/tokenUtils";

function Email({
  email,
  setEmail,
  nextPage,
}: {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  nextPage: () => void;
}): React.ReactElement {
  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;

  const [err, setError] = useState("");

  const confirmEmail = () => {
    if (!email) {
      setError("이메일 주소를 입력하세요");
      return;
    }

    if (!emailRegEx.test(email)) {
      setError("이메일 형식이 올바르지 않습니다");
      return;
    }

    const data = {
      email: email,
    };

    axios
      .post(`${process.env.NEXT_PUBLIC_BASEURL}/auth/email/send-code`, data, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((res) => {
        if (res.data.error) setError(res.data.error.userMessage);
        else nextPage();
      });
  };

  return (
    <FlexWrap gap={25}>
      <FlexWrap gap={15}>
        <OutlineInputBox
          placeHolder={"이메일 주소를 입력하세요"}
          text={email}
          setText={setEmail}
          autoComplete={"email"}
          errText={err}
        />
        <RoundButton
          isFilled={true}
          text={"이메일로 계속하기"}
          onClick={confirmEmail}
        />
      </FlexWrap>
      <Driver />
      <FlexWrap gap={5}>
        <KakaoButton text={"카카오로 시작하기"} />
      </FlexWrap>
      <Text className={"guide"}>
        {
          '위의 “카카오로 시작하기/이메일로 계속하기"를 클릭하면 Ideation의 이용약관 및 개인정보 보호정책을 읽고 이해하였으며 그에 동의하는 것으로 간주됩니다.'
        }
      </Text>
    </FlexWrap>
  );
}

export default Email;
