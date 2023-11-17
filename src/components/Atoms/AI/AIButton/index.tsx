import React, { ReactNode } from "react";

import { StyledButton } from "./styles";

function AIButton({
  text,
  onClick,
}: {
  text: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}): React.ReactElement {
  return (
    <StyledButton
      variant="contained"
      onClick={onClick}
      // startIcon={}
    >
      <span>{text}</span>
    </StyledButton>
  );
}

export default AIButton;
