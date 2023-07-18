import React from "react";

import KakaoSymbol from "../../../../public/icons/kakao_symbol.svg";

import { KakaoImg, StyledButton } from "./styles";

function KakaoButton({ text }: { text: string }): React.ReactElement {
  const handleClick = () => {
    console.log("kakaotalk");
  };

  return (
    <StyledButton variant="contained" onClick={handleClick}>
      <KakaoImg src={KakaoSymbol} alt="KakaoSymbol" />
      <span>{text}</span>
    </StyledButton>
  );
}

export default KakaoButton;
