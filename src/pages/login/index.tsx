import React from "react";
import { useRouter } from "next/router";

import LoginForm from "@/components/Templates/LoginForm";
import { Container } from "@/styles/login/styles";

function Login(): React.ReactElement {
  const router = useRouter();

  return (
    <Container>
      <LoginForm
        handleLoginAfter={() => {
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
