import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const StyledButton = styled(Button)<{
  filled: string;
}>`
  background-color: ${(props) =>
    props.filled === "true" ? "#713edc" : "#ffffff"};
  color: ${(props) => (props.filled === "true" ? "#ffffff" : "#713edc")};
  border: 1px solid #713edc;
  height: 42px;
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
      props.filled === "true" ? "#713edc" : "#ffffff"};
    color: ${(props) => (props.filled === "true" ? "#ffffff" : "#713edc")};
  }
`;
