import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const StyledButton = styled(Button)`
  width: 180px;
  height: fit-content;
  margin-left: 10px;
  background: #7b40f2;
  color: white;
  font-family: Pretendard, sans-serif;
  position: relative;

  &:hover {
    background-color: #713edc;
    color: white;
  }

  :disabled {
    background-color: #ccc;
  }
`;

export const BetaLabel = styled("div")`
  width: fit-content;
  height: fit-content;
  background: gold;
  color: black;
  padding: 3px 5px;
  position: absolute;
  border-radius: 5px;
  font-size: 8px;
  top: -25px;
  left: 0;
`;
