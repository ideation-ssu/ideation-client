import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";

export const StyledButton = styled(Button)`
  min-width: auto;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .MuiButton-startIcon {
    margin: 0;
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  font-size: 14px;
`;
