import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

export const Input = styled(TextField)`
  .MuiInputBase-root {
    font-family: Pretendard, sans-serif;
    font-weight: 400;
    font-size: 10px;
    line-height: 11.93px;
  }

  .MuiInputBase-root.MuiInput-root:before {
    border-bottom: 1px solid #eaeaea;
  }

  .MuiInputBase-root.MuiInput-root:after {
    border-bottom: 1px solid #713edc;
  }
`;
