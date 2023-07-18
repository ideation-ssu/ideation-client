import React from "react";

import KakaoSymbol from "../../../../public/icons/kakao_symbol.svg";

import { KakaoImg, StyledButton } from "./styles";

function RoundButton({
  isKakao = false,
  isFilled = true,
  text,
  onClick,
}: {
  isKakao?: boolean;
  isFilled?: boolean;
  text: string;
  onClick?: () => void;
}): React.ReactElement {
  return (
    <StyledButton
      isKakao={isKakao}
      isFilled={isFilled}
      variant="contained"
      onClick={onClick}
    >
      {isKakao ? <KakaoImg src={KakaoSymbol} alt="KakaoSymbol" /> : null}
      <span>{text}</span>
    </StyledButton>
  );
}

export default RoundButton;
