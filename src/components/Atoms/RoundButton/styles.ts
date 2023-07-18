import Image from "next/image";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const StyledButton = styled(Button)<{
  isKakao: boolean;
  isFilled: boolean;
}>`
  background-color: ${(props) =>
    props.isKakao ? "#fee500" : props.isFilled ? "#713edc" : "#ffffff"};
  color: ${(props) =>
    props.isKakao
      ? "rgba(0, 0, 0, 0.85)"
      : props.isFilled
      ? "#ffffff"
      : "#713edc"};
  border: ${(props) =>
    props.isKakao ? "1px solid #fee555" : "1px solid #713edc"};
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  font-size: 10px;
  line-height: 11.93px;
  height: 42px;
  box-shadow: none;
  justify-content: unset;

  span {
    margin: auto;
    padding-right: ${(props) => (props.isKakao ? "15px" : "0")};
  }

  &:hover {
    background-color: ${(props) =>
      props.isKakao ? "#fee500" : props.isFilled ? "#713edc" : "#ffffff"};
    color: ${(props) =>
      props.isKakao
        ? "rgba(0, 0, 0, 0.85)"
        : props.isFilled
        ? "#ffffff"
        : "#713edc"};
  }
`;

export const KakaoImg = styled(Image)`
  width: 15px;
  height: 15px;
`;
