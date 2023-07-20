import React from "react";

import { Container, Error, ErrorIcon } from "./styles";

function ErrorMsg({ errText }: { errText?: string }): React.ReactElement {
  return (
    <Container>
      <ErrorIcon />
      <Error>{errText}</Error>
    </Container>
  );
}

export default ErrorMsg;
