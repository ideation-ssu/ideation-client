import React, { useState } from "react";
import { toast } from "react-toastify";

import { useAuth } from "@/utils/auth";

import { BetaLabel, StyledButton } from "./styles";

const CodingButton = ({ idea }: { idea: string }) => {
  const { axios } = useAuth();
  const [showBeta, setShowBeta] = useState<boolean>(false);

  const handleClick = () => {
    if (!idea) return;

    const toastId = toast.warning(
      `열심히 파일을 생성하고 있어요. \n 조금만 기다려주세요!`,
      {
        autoClose: false, // 자동으로 닫지 않도록 설정
      }
    );

    axios
      .get(
        `${process.env.NEXT_PUBLIC_BASEURL}/labs/code-project?codeProject=${idea}`,
        {
          responseType: "blob",
        }
      )
      .then((res) => {
        // 파일 다운로드를 위해 URL.createObjectURL을 사용하여 blob을 생성합니다.
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `${idea.trim()}.zip`);
        document.body.appendChild(link);
        link.click();

        toast.dismiss(toastId);
        toast.success("다운로드 완료!");
      })
      .catch((error) => {
        toast.error("파일을 다운로드하는 동안 오류가 발생했습니다.");
        toast.dismiss(toastId);
      });
  };

  const onMouseEvent = (isShow: boolean) => {
    setShowBeta(isShow);
  };

  return (
    <>
      <StyledButton
        disabled={!idea}
        onClick={handleClick}
        onMouseOver={() => onMouseEvent(true)}
        onMouseOut={() => onMouseEvent(false)}
      >
        {showBeta && <BetaLabel>Beta</BetaLabel>}
        아이디어로 코딩하기
      </StyledButton>
    </>
  );
};

export default CodingButton;
