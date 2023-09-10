import React from "react";

import { StyledButton } from "./styles";

function RoundButton({
  isFilled,
  isMainClr = true,
  text,
  onClick,
  disabled,
}: {
  isFilled: boolean;
  isMainClr?: boolean;
  text: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}): React.ReactElement {
  return (
    <StyledButton
      filled={isFilled ? "true" : "false"}
      main={isMainClr ? "true" : "false"}
      variant="contained"
      onClick={onClick}
      disabled={disabled}
    >
      <span>{text}</span>
    </StyledButton>
  );
}

export default RoundButton;
