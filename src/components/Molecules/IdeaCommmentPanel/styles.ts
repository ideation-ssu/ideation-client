import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

export const Panel = styled("div")`
  padding: 13px 5px;
`;

export const CommentContainer = styled("div")`
  width: 100%;
  height: 160px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const CommentWrap = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 10px;
  color: #313131;

  .comment {
    cursor: pointer;
  }
`;

export const Reply = styled("div")`
  margin-left: 20px;
`;

export const CommentInfo = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;

  .user-name {
    font-size: 13px;
  }

  .created-at {
    font-size: 10px;
    color: #6e6e6e;
  }
`;

export const CommentLabel = styled("div")<{ isComment: boolean }>`
  width: ${(props) => (props.isComment ? "22px" : "30px")};
  height: 12px;
  padding: 1px;
  font-size: 8px;
  text-align: center;
  color: #fff;
  background: ${(props) =>
    props.isComment ? "rgba(113, 62, 220, 0.2)" : "rgba(110, 114, 252, 0.2)"};
  border-radius: 2px;
`;

export const InputWrap = styled("div")<{ isshow: boolean }>`
  flex-direction: row;

  &.reply {
    display: ${(props) => (props.isshow ? "flex" : "none")};
    width: 80%;
  }

  &.comment {
    display: flex;
  }
`;

export const StyledInputBox = styled(TextField)`
  &.MuiTextField-root {
    flex: 9;
  }

  .MuiInputBase-input {
    padding: 10px;
    font-family: Pretendard, sans-serif;
    font-size: 10px;
  }

  .MuiOutlinedInput-notchedOutline {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-color: #dde1eb;
  }

  .Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #dde1eb !important;
  }
`;

export const InputButton = styled(Button)`
  &.MuiButtonBase-root {
    flex: 1.5;
    background: rgba(110, 114, 252, 0.2);
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-color: #dde1eb;
    font-family: Pretendard, sans-serif;
    font-size: 10px;
    color: #000;
  }
`;
