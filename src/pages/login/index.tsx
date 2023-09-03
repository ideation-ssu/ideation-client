import React from "react";
import { useRouter } from "next/router";

import LoginForm from "@/components/Templates/LoginForm";
import { Container } from "@/styles/login/styles";
import { useAuth } from "@/utils/auth";

function Login(): React.ReactElement {
  const router = useRouter();
  const { query } = router;
  const code: string = query.code as string;
  const id: string = query.id as string;

  return (
    <Container>
      <LoginForm
        isInvited={!!code}
        handleLoginAfter={() => {
          if (code) router.push(`/idea/id=${id}?code=${code}`);
          router.push("/main");
        }}
        handleSignUp={() => {
          router.push("/signup");
        }}
      />
    </Container>
  );
}

export default Login;
