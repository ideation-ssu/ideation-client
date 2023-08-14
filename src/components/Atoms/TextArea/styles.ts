import { TextareaAutosize } from "@mui/base";
import { styled } from "@mui/material/styles";

export const StyledTextArea = styled(TextareaAutosize)`
  width: 95%;
  height: 225px !important;
  resize: none;
  outline: none;
  border: none;

  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
    border: 1px solid #7b40f2;
    box-shadow: none;
  }
`;
