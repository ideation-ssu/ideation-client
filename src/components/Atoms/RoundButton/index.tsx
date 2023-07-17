import React from "react";

import { StyledButton } from "./styles";

function InputBox({
  isFilled = true,
  text,
}: {
  isFilled?: boolean;
  text: string;
}): React.ReactElement {
  return (
    <StyledButton isFilled={isFilled} variant="contained">
      {text}
    </StyledButton>
  );
}

export default InputBox;
