import React from "react";

import Driver from "@/components/Atoms/Driver";

import { Container, Text } from "./styles";

function Card({
  children,
  titleText,
}: {
  children: React.ReactNode;
  titleText?: string;
}): React.ReactElement {
  return (
    <Container>
      {titleText && (
        <>
          <Text>{titleText}</Text>
          <Driver />
        </>
      )}
      {children}
    </Container>
  );
}

export default Card;
