import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const StyledButton = styled(Button)<{
  filled: string;
  main: string;
}>`
  width: 100%;
  height: 100%;
  background-color: ${(props) =>
    props.filled === "true"
      ? props.main === "true"
        ? "#713edc"
        : "#00b18c"
      : "#ffffff"};
  color: ${(props) =>
    props.filled === "true"
      ? "#ffffff"
      : props.main === "true"
      ? "#713edc"
      : "#00b18c"};
  border: 1px solid
    ${(props) => (props.main === "true" ? "#713edc" : "#00b18c")};
  box-shadow: none;
  justify-content: unset;

  span {
    font-family: Pretendard, sans-serif;
    font-weight: 400;
    font-size: 10px;
    line-height: 11.93px;
    margin: auto;
  }

  &:hover {
    background-color: ${(props) =>
      props.filled === "true"
        ? props.main === "true"
          ? "#713edc"
          : "#00b18c"
        : "#ffffff"};
    color: ${(props) =>
      props.filled === "true"
        ? "#ffffff"
        : props.main === "true"
        ? "#713edc"
        : "#00b18c"};
  }
`;
