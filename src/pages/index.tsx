import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useAuth } from "@/utils/auth";
import { isLoggedIn, logout } from "@/utils/tokenUtils";

function Root(): React.ReactElement {
  const router = useRouter();
  const { authLogout } = useAuth();

  const [isLogin, setIsLogin] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const checkLoginStatus = async () => {
      if (await isLoggedIn()) {
        setIsLogin(true);
        setText("로그아웃");
      } else {
        setIsLogin(false);
        setText("로그인");
      }
    };

    checkLoginStatus();
  }, [isLogin]);

  const handleClick = () => {
    if (isLogin) {
      logout(authLogout);
    } else {
      setText("로그아웃");
      router.push("/login");
    }
    setIsLogin(!isLogin);
  };

  return (
    <>
      <div>
        {"Ideation 화이팅!!! (아래 못생긴건 테스트를 위한 임시 버튼임..)"}
      </div>
      <button onClick={handleClick}>{text}</button>
    </>
  );
}

export default Root;
