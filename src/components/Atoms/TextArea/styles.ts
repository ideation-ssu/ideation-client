import { TextareaAutosize } from "@mui/base";
import CircularProgress from "@mui/material/CircularProgress";
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
  overflow-x: hidden !important;
  overflow-y: auto !important;
  &:focus {
    outline: none;
    border: 2px solid #7b40f2;
    box-shadow: none;
  }
  &:disabled {
    background-color: gainsboro;
  }
`;

export const ContextMenu = styled("div")<{ top: number; left: number }>`
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  z-index: 9999;
  border-radius: 8px;
  background: var(--White, #fff);
  box-shadow: 0px 2px 15px -3px rgba(0, 0, 0, 0.07);
`;

export const ContextItem = styled("div")`
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;

  :hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

export const Progress = styled(CircularProgress)`
  &.MuiCircularProgress-root {
    position: absolute;
  }
`;
