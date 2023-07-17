import React from "react";

import CheckBox from "@/components/Atoms/CheckBox";

import { Container, Text } from "./styles";

function TextCheckBox({
  isChecked,
  text,
}: {
  isChecked: boolean;
  text: string;
}): React.ReactElement {
  return (
    <Container>
      <CheckBox isChecked={isChecked} />
      <Text>{text}</Text>
    </Container>
  );
}

export default TextCheckBox;
