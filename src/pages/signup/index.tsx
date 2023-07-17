import React from "react";

import TitleCard from "@/components/Templates/TitleCard";

import { Container } from "./styles";

function SignUp(): React.ReactElement {
  return (
    <Container>
      <TitleCard titleText={"SIGN UP"}>{"Sign Up"}</TitleCard>
    </Container>
  );
}

export default SignUp;
