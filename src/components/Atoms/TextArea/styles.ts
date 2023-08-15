import { TextareaAutosize } from "@mui/base";
import { styled } from "@mui/material/styles";

export const StyledTextArea = styled(TextareaAutosize)`
  width: 100%;
  height: 225px !important;
  padding: 10px;
  resize: none;
  outline: none;
  border: none;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  font-size: 14px;
  font-family: Pretendard, sans-serif;
  &:focus {
    outline: none;
    border: 2px solid #7b40f2;
    box-shadow: none;
  }
`;
