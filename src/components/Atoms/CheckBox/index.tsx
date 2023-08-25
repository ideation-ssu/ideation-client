import React from "react";

import { Check, Container, Text } from "./styles";

function CheckBox({
  text,
  check,
  setCheck,
  isBig = false,
}: {
  text?: string;
  check: boolean;
  setCheck: () => void;
  isBig?: boolean;
}): React.ReactElement {
  return (
    <Container>
      <Check isChecked={check} onClick={setCheck} isBig={isBig} />
      {text && <Text>{text}</Text>}
    </Container>
  );
}

export default CheckBox;
