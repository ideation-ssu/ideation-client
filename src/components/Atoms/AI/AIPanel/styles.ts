import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

export const StyledDrawer = styled(Drawer)`
  &.MuiDrawer-modal {
    z-index: 1500;
  }

  .MuiPaper-elevation {
    width: 400px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
`;

export const Header = styled("div")`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 5px 8px 10px;
  height: 48px;

  .title {
    display: flex;
    font-size: 16px;
    font-weight: bold;
    color: #713edc;
    margin: 3px 0 5px 4px;
  }

  .col_driver {
    width: 1px;
    height: 20px;
    margin: 7px 12px 5px;
    background-color: rgb(177, 182, 187);
  }

  .sub_title {
    display: flex;
    font-size: 14px;
    font-weight: normal;
    color: rgb(40, 40, 40);
    margin: 6px 0;
  }
`;

export const ChatWrap = styled("div")`
  height: calc(100% - 109.16px);
  margin-bottom: 48px;
  background-color: #f5f1fd;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
    height: 5px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #713edc;
  }
`;

export const ChatInner = styled("div")`
  height: 100%;
  padding: 15px;
  position: relative;
`;

export const InputWrap = styled("div")`
  width: 100%;
  height: 48px;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: row;
  gap: 6px;
  background-color: white;
  box-shadow: rgba(111, 58, 208, 0.11) 0px -2px 8px 0px;
`;

export const Input = styled(TextField)`
  &.MuiTextField-root {
    width: 100%;
    height: 100%;
  }

  .MuiInputBase-root {
    width: 100%;
    height: 100%;
    font-weight: 400;
    font-size: 13px;
    line-height: 11.93px;
  }

  .MuiInputBase-input {
    padding: 10px 20px;
    font-family: Pretendard, sans-serif;
  }

  .MuiInputBase-root.MuiInput-root:before {
    border-bottom: none;
  }

  .MuiInputBase-root.MuiInput-root:after {
    border-bottom: none;
  }
`;

export const ChatSpeechWrap = styled("div")`
  display: flex;
  flex-direction: row;
  gap: 8px;

  + div {
    width: 100%;
    margin-top: 16px;
  }

  :last-of-type {
    margin-bottom: 15px;
  }
`;

export const Bot = styled("div")`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  border-radius: 10px;
  background: #e0d1ff;
`;

export const SpeechBubble = styled("div")`
  width: fit-content;
  height: fit-content;
  padding: 8px 12px;
  background-color: white;
  border-radius: 10px;

  &.send {
    background: #713edc;
    color: white;
    margin-left: auto;
  }
`;

export const ButtonWrap = styled("div")`
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SendButton = styled(Button)`
  width: 40px;
  min-width: 40px;
  height: 32px;
  padding: 0;
  background: linear-gradient(
    to left,
    rgb(168, 108, 234),
    rgb(111, 58, 208) 100%
  );
  color: white;
  font-family: Pretendard, sans-serif;
`;

export const StopButton = styled(Button)`
  width: 40px;
  min-width: 40px;
  height: 30px;
  padding: 0;
  position: absolute;
  top: -50px;
  left: calc(50% - 20px);
  color: black;
  border: 1px solid purple;
`;

export const CloseIcon = styled("div")`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18' fill='none'%3E%3Cpath d='M16.5 1.5L1.49977 16.5002' stroke='%23D9D9D9' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M16.5 16.501L1.49977 1.50074' stroke='%23D9D9D9' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-size: 12px 12px;
  width: 12px;
  height: 12px;
  position: absolute;
  right: 15px;
  cursor: pointer;
`;
