import React, { ReactNode } from "react";

import { StyledButton } from "./styles";

function RoundButton({
  isFilled,
  isMainClr = true,
  text,
  onClick,
  startIcon,
  disabled,
}: {
  isFilled: boolean;
  isMainClr?: boolean;
  text: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  startIcon?: ReactNode;
  disabled?: boolean;
}): React.ReactElement {
  return (
    <StyledButton
      filled={isFilled ? "true" : "false"}
      main={isMainClr ? "true" : "false"}
      variant="contained"
      onClick={onClick}
      startIcon={startIcon}
      disabled={disabled}
    >
      <span>{text}</span>
    </StyledButton>
  );
}

export default RoundButton;
