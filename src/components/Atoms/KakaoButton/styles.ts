import Image from "next/image";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const StyledButton = styled(Button)`
  background-color: #fee500;
  color: rgba(0, 0, 0, 0.85);
  border: 1px solid #fee555;
  height: 42px;
  box-shadow: none;
  justify-content: unset;

  span {
    font-weight: 400;
    font-size: 10px;
    line-height: 11.93px;
    margin: auto;
    padding-right: 15px;
  }

  &:hover {
    background-color: #fee500;
    color: rgba(0, 0, 0, 0.85);
  }
`;

export const KakaoImg = styled(Image)`
  width: 15px;
  height: 15px;
`;
