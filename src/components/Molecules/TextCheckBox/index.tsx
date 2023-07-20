import React from "react";

import CheckBox from "@/components/Atoms/CheckBox";

import { Container, Text } from "./styles";

function TextCheckBox({
  check,
  setCheck,
  text,
}: {
  check: boolean;
  setCheck: () => void;
  text: string;
}): React.ReactElement {
  return (
    <Container>
      <CheckBox check={check} setCheck={setCheck} />
      <Text>{text}</Text>
    </Container>
  );
}

export default TextCheckBox;
