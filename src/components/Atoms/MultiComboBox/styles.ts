import Autocomplete from "@mui/material/Autocomplete";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

export const StyledComboBox = styled(Autocomplete)``;

export const StyledTextField = styled(TextField)`
  width: 350px;
  height: 32px;

  .MuiInputBase-root {
    padding: 0;
    input {
      font-family: Pretendard, sans-serif;
      font-size: 12px;
    }
    span {
      font-size: 12px;
      padding: 8px;
    }
  }

  .MuiOutlinedInput-root > .MuiAutocomplete-input {
    padding: 4px 10px 7.5px 10px;
  }

  .MuiChip-root {
    margin: 0 3px 3px 3px;
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
