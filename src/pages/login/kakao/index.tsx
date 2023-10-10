import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

function Kakao() {
  const router = useRouter();
  const { query } = router;
  const code: string = query.code as string;

  const login = () => {
    if (code) {
      const data = { code: code, redirectUri: process.env.NEXT_PUBLIC_KAKAO };
      axios
        .post(`${process.env.NEXT_PUBLIC_BASEURL}/auth/kakao/login`, data)
        .then((res) => {
          localStorage.setItem("token", res.data.data.token);
        })
        .then(() => window.close());
    }
  };

  useEffect(() => {
    login();
  }, [code]);
}

export default Kakao;
