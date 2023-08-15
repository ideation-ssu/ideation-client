import React, { useState } from "react";
import axios from "axios";

import Driver from "@/components/Atoms/Driver";
import FlexWrap from "@/components/Atoms/FlexWrap";
import OutlineInputBox from "@/components/Atoms/OutlineInputBox";
import RoundButton from "@/components/Atoms/RoundButton";
import { getToken } from "@/utils/tokenUtils";

function Email({
  email,
  code,
  setCode,
  nextPage,
}: {
  email: string;
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  nextPage: () => void;
}): React.ReactElement {
  const [err, setError] = useState("");

  const sendAuthNumber = () => {
    if (!code) {
      setError("인증번호를 입력하세요");
      return;
    }

    const data = {
      email: email,
      code: code,
    };

    axios
      .post(`${process.env.NEXT_PUBLIC_BASEURL}/auth/email/verify`, data, {
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
    <FlexWrap gap={35}>
      <OutlineInputBox
        placeHolder={"이메일로 발송된 인증번호를 입력해주세요"}
        text={code}
        setText={setCode}
        autoComplete={"code"}
        errText={err}
      />
      <div></div>
      <Driver />
      <FlexWrap gap={5}>
        <RoundButton isFilled={false} text={"인증번호 다시 보내기"} />
        <RoundButton
          isFilled={true}
          text={"이메일로 계속하기"}
          onClick={sendAuthNumber}
        />
      </FlexWrap>
    </FlexWrap>
  );
}

export default Email;
