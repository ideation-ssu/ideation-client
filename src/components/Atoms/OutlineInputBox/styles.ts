import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

export const Container = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Input = styled(TextField)<{ error: boolean }>`
  .MuiOutlinedInput-notchedOutline {
    border-color: ${(props) =>
      props.error ? "#f36262" : "#713edc"} !important;
  }

  .MuiInputBase-root {
    height: 47px;
    font-weight: 400;
    font-size: 10px;
    line-height: 11.93px;
  }
`;
