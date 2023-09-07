import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

export const Container = styled("div")`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Input = styled(TextField)<{ error: boolean; normal: string }>`
  &.MuiTextField-root {
    height: 100%;
    background-color: #fff;
  }

  .MuiOutlinedInput-notchedOutline {
    top: 0;
    border-color: ${(props) =>
      props.error
        ? "#f36262"
        : props.normal === "true"
        ? "#9f9f9f"
        : "#713edc"};

    legend {
      display: none;
    }
  }

  .Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${(props) =>
      props.error ? "#f36262" : "#713edc"} !important;
  }

  .MuiInputBase-root {
    height: 100%;
    font-weight: 400;
    font-family: Pretendard, sans-serif;
    font-size: 10px;
    line-height: 11.93px;
  }
`;
