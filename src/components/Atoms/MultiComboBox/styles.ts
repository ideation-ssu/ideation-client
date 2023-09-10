import Autocomplete from "@mui/material/Autocomplete";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

export const StyledComboBox = styled(Autocomplete)<{ width: number }>`
  width: ${(props) => (props.width ? `${props.width}px` : "100%")};

  .MuiOutlinedInput-root {
    padding: 0;
  }

  .MuiOutlinedInput-root > .MuiAutocomplete-input {
    padding: 7px 0 7px 10px;
  }

  .MuiOutlinedInput-notchedOutline {
    top: 0;
  }

  .MuiAutocomplete-endAdornment {
    top: 2px;
  }
`;

export const StyledTextField = styled(TextField)`
  width: 100%;
  min-height: 32px;

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
