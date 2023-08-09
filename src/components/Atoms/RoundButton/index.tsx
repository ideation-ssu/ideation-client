import React from "react";

import { StyledButton } from "./styles";

function RoundButton({
  isFilled,
  isMainClr = true,
  text,
  onClick,
}: {
  isFilled: boolean;
  isMainClr?: boolean;
  text: string;
  onClick?: () => void;
}): React.ReactElement {
  return (
    <StyledButton
      filled={isFilled ? "true" : "false"}
      main={isMainClr ? "true" : "false"}
      variant="contained"
      onClick={onClick}
    >
      <span>{text}</span>
    </StyledButton>
  );
}

export default RoundButton;
