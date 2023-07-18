import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

export const Input = styled(TextField)`
  .MuiInputBase-root-MuiOutlinedInput-root {
    height: 42px;
  }

  .MuiOutlinedInput-notchedOutline {
    border-color: #713edc !important;
  }

  .MuiInputBase-root {
    font-family: Pretendard, sans-serif;
    font-weight: 400;
    font-size: 10px;
    line-height: 11.93px;
  }
`;
