import React from "react";

import { StyledButton } from "./styles";

function RoundButton({
  isFilled,
  text,
  onClick,
}: {
  isFilled: boolean;
  text: string;
  onClick?: () => void;
}): React.ReactElement {
  return (
    <StyledButton
      filled={isFilled ? "true" : "false"}
      variant="contained"
      onClick={onClick}
    >
      <span>{text}</span>
    </StyledButton>
  );
}

export default RoundButton;
