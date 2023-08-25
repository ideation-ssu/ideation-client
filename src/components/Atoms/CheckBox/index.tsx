import React from "react";

import { Check, Container, Text } from "./styles";

function CheckBox({
  text,
  check,
  setCheck,
}: {
  text?: string;
  check: boolean;
  setCheck: () => void;
}): React.ReactElement {
  return (
    <Container>
      <Check isChecked={check} onClick={setCheck} />
      {text && <Text>{text}</Text>}
    </Container>
  );
}

export default CheckBox;
