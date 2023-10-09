import { useEffect } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

import { useAuth } from "@/utils/auth";

function Kakao() {
  const { axios } = useAuth();
  const router = useRouter();
  const { query } = router;
  const code: string = query.code as string;

  useEffect(() => {
    const data = { code: code };
    axios
      .post(`${process.env.NEXT_PUBLIC_BASEURL}/auth/kakao/login`, data)
      .then((res) => {
        if (res.data.error) {
          toast.error("가입이 되어있지 않은 계정입니다.");
          router.push("/signup");
        }
      });
  }, []);
}

export default Kakao;
