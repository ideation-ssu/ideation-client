import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const StyledButton = styled(Button)<{ isFilled: boolean }>`
  background-color: ${(props) => (props.isFilled ? "#713edc" : "#ffffff")};
  color: ${(props) => (props.isFilled ? "#ffffff" : "#713edc")};
  border: ${(props) =>
    props.isFilled ? "#1px solid #ffffff" : "1px solid #713edc"};
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  font-size: 10px;
  line-height: 11.93px;
  height: 39.92px;
  box-shadow: none;

  &:hover {
    background-color: ${(props) => (props.isFilled ? "#713edc" : "#ffffff")};
    color: ${(props) => (props.isFilled ? "#ffffff" : "#713edc")};
  }
`;
