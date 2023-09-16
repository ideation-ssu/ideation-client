import React from "react";
import { toast } from "react-toastify";

import KakaoSymbol from "../../../../public/icons/kakao_symbol.svg";

import { KakaoImg, StyledButton } from "./styles";

function KakaoButton({ text }: { text: string }): React.ReactElement {
  const handleClick = () => {
    toast.warning("준비중입니다.");
  };

  return (
    <StyledButton variant="contained" onClick={handleClick}>
      <KakaoImg src={KakaoSymbol} alt="KakaoSymbol" />
      <span>{text}</span>
    </StyledButton>
  );
}

export default KakaoButton;
