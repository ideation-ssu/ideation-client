import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useAuth } from "@/utils/auth";

function Root(): React.ReactElement {
  const router = useRouter();
  const { authLogout, isLoggedIn } = useAuth();

  const [text, setText] = useState("");

  useEffect(() => {
    const checkLoginStatus = async () => {
      if (isLoggedIn()) {
        setText("로그아웃");
      } else {
        setText("로그인");
      }
    };

    checkLoginStatus();
  }, [isLoggedIn]);

  const handleClick = () => {
    if (isLoggedIn()) {
      authLogout();
    } else {
      setText("로그아웃");
      router.push("/login");
    }
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
