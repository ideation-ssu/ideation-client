import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios/index";

import { useAuth } from "@/utils/auth";

function Kakao() {
  const { axios, setToken, setUser } = useAuth();
  const router = useRouter();
  const { query } = router;
  const code: string = query.code as string;

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

  useEffect(() => {
    if (code) {
      const data = { code: code, redirectUri: process.env.NEXT_PUBLIC_KAKAO };
      axios
        .post(`${process.env.NEXT_PUBLIC_BASEURL}/auth/kakao/login`, data)
        .then((res) => {
          setToken(res.data.data.token);
          localStorage.setItem("token", res.data.data.token);
          setUserInfo(res.data.data.token);
          router.push("/main");
        });
    }
  }, [code]);
}

export default Kakao;
