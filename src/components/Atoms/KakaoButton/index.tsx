import React from "react";
import { useRouter } from "next/router";

import KakaoSymbol from "../../../../public/icons/kakao_symbol.svg";

import { KakaoImg, StyledButton } from "./styles";

function KakaoButton({ text }: { text: string }): React.ReactElement {
  const router = useRouter();
  const handleClick = () => {
    const apiKey = "e83e78b148a31ece411b7ffb1f62900b";
    const redirection = process.env.NEXT_PUBLIC_KAKAO;
    const loginUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${apiKey}&redirect_uri=${redirection}&response_type=code`;
    router.push(loginUrl);
  };

  return (
    <StyledButton variant="contained" onClick={handleClick}>
      <KakaoImg src={KakaoSymbol} alt="KakaoSymbol" />
      <span>{text}</span>
    </StyledButton>
  );
}

export default KakaoButton;
