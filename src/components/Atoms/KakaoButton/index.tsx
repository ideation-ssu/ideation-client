import React from "react";
import { useRouter } from "next/router";

import { useAuth } from "@/utils/auth";

import KakaoSymbol from "../../../../public/icons/kakao_symbol.svg";

import { KakaoImg, StyledButton } from "./styles";

function KakaoButton({ text }: { text: string }): React.ReactElement {
  const router = useRouter();
  const { axios, setUser, setToken } = useAuth();

  const setUserInfo = async (token: string) => {
    const { data: user } = await axios.get(
      `${process.env.NEXT_PUBLIC_BASEURL}/user/my`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (user.error) throw Error();

    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const handleClick = () => {
    const apiKey = "e83e78b148a31ece411b7ffb1f62900b";
    const redirection = process.env.NEXT_PUBLIC_KAKAO;
    const loginUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${apiKey}&redirect_uri=${redirection}&response_type=code`;
    const popupX = window.screen.width / 2 - 700 / 2;
    const popupY = window.screen.height / 2 - 800 / 2;
    const popup = window.open(
      loginUrl,
      "카카오 로그인",
      `width=700px,height=800px,top=${popupY},left=${popupX},scrollbars=yes`
    );

    const checkPopupClosed = setInterval(() => {
      if (popup && popup.closed) {
        clearInterval(checkPopupClosed);

        const localToken = localStorage.getItem("token");
        setToken(localToken ? localToken : "");
        if (localToken) setUserInfo(localToken);

        router.push("/main");
      }
    }, 1000);
  };

  return (
    <StyledButton variant="contained" onClick={handleClick}>
      <KakaoImg src={KakaoSymbol} alt="KakaoSymbol" />
      <span>{text}</span>
    </StyledButton>
  );
}

export default KakaoButton;
