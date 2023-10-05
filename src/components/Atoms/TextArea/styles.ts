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
  border-radius: 20px;
  background: var(--White, #fff);
  box-shadow: 0px 2px 15px -3px rgba(0, 0, 0, 0.07);
`;

export const ContextItem = styled("div")`
  cursor: pointer;
`;

export const AIIcon = styled("div")`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 36 36' fill='none'%3E%3Ccircle cx='18' cy='18' r='18' fill='%237B40F2'/%3E%3Cpath d='M20.375 5V10.5002C20.375 10.8649 20.5199 11.2147 20.7777 11.4726C21.0356 11.7304 21.3854 11.8753 21.7501 11.8753H27.2503' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M14.8753 29.7511H10.7501C10.0207 29.7511 9.32124 29.4613 8.80549 28.9456C8.28974 28.4298 8 27.7303 8 27.001V7.75012C8 7.02074 8.28974 6.32124 8.80549 5.80549C9.32124 5.28974 10.0207 5 10.7501 5H20.3755L27.2508 11.8753V16.688M13.5002 13.2504H14.8753M13.5002 18.7506H16.9379M13.5002 24.2508H14.8753' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M20.375 29.7513V24.2511C20.375 23.5217 20.6647 22.8222 21.1805 22.3065C21.6962 21.7907 22.3957 21.501 23.1251 21.501C23.8545 21.501 24.554 21.7907 25.0697 22.3065C25.5855 22.8222 25.8752 23.5217 25.8752 24.2511V29.7513M20.375 27.0012H25.8752M30.0004 21.501V29.7513' stroke='%23FFCF53' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-size: cover;
  width: 36px;
  height: 36px;
`;

export const Progress = styled(CircularProgress)`
  &.MuiCircularProgress-root {
    position: absolute;
  }
`;
