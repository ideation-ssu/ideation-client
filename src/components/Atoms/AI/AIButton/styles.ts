import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const StyledButton = styled(Button)`
  height: 30px;
  position: absolute;
  top: -35px;
  right: 0px;
  background-color: #713edc;
  box-shadow: none;
  justify-content: unset;
  padding: 0 10px;

  span {
    font-family: Pretendard, sans-serif;
    font-weight: 400;
    font-size: 11px;
    line-height: 11.93px;
  }

  &:hover {
    background-color: #713edc;
    color: white;
  }
`;
