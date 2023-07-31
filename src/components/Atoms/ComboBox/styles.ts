import Autocomplete from "@mui/material/Autocomplete";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

export const StyledComboBox = styled(Autocomplete)``;

export const StyledTextField = styled(TextField)`
  width: 203px;
  height: 32px;

  .MuiInputBase-root {
    padding: 0;
    input {
      font-family: Pretendard, sans-serif;
      font-size: 12px;
      padding: 7.5px 10px 7.5px 10px !important;
    }
  }

  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #7b40f2;
  }

  .MuiOutlinedInput-notchedOutline {
    border: 1px solid #bdbdbd;
    border-radius: 4px;
    legend {
      display: none;
    }
  }
`;
