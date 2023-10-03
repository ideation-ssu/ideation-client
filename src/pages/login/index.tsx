import React from "react";
import { useRouter } from "next/router";

import LoginForm from "@/components/Templates/LoginForm";
import { Container } from "@/styles/login/styles";

function Login(): React.ReactElement {
  const router = useRouter();
  const { query } = router;
  const id: string = query.id as string;
  const code: string = query.code as string;

  return (
    <Container>
      <LoginForm
        isInvited={!!code}
        handleLoginAfter={() => {
          if (id && code) router.push(`/idea/${id}?code=${code}`);
          else router.push("/main");
        }}
        handleSignUp={() => {
          router.push("/signup");
        }}
      />
    </Container>
  );
}

export default Login;
