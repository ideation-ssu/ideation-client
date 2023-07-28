import React from "react";
import { useRouter } from "next/router";

import { Container } from "@/components/Templates/SignUp/styles";
import SignUpForm from "@/components/Templates/SignUpForm";

function SignUp(): React.ReactElement {
  const router = useRouter();

  const goMain = () => {
    router.push("/main");
  };

  return (
    <Container>
      <SignUpForm handleRegisterDone={goMain} />
    </Container>
  );
}

export default SignUp;
