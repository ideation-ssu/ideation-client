import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

export const Container = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Input = styled(TextField)<{ error: boolean; fontSize: number }>`
  .MuiInputBase-root {
    font-family: Pretendard, sans-serif;
    font-weight: 400;
    font-size: ${(props) => props.fontSize}px;
    line-height: 11.93px;
  }

  .MuiInputBase-root.MuiInput-root:before {
    border-bottom: 1px solid ${(props) => (props.error ? "#f36262" : "#eaeaea")};
  }

  .MuiInputBase-root.MuiInput-root:after {
    border-bottom: 1px solid ${(props) => (props.error ? "#f36262" : "#713edc")};
  }
`;
