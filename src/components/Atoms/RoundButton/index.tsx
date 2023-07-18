import React from "react";

import KakaoSymbol from "../../../../public/icons/kakao_symbol.svg";

import { KakaoImg, StyledButton } from "./styles";

function RoundButton({
  isKakao = false,
  isFilled = true,
  text,
}: {
  isKakao?: boolean;
  isFilled?: boolean;
  text: string;
}): React.ReactElement {
  return (
    <StyledButton isKakao={isKakao} isFilled={isFilled} variant="contained">
      {isKakao ? <KakaoImg src={KakaoSymbol} alt="KakaoSymbol" /> : null}
      <span>{text}</span>
    </StyledButton>
  );
}

export default RoundButton;
