import { styled } from "@mui/material/styles";

export const Container = styled("div")`
  height: 100dvh;
  display: flex;
  align-items: center;
`;

export const InnerContainer = styled("div")`
  padding: 40px;
  display: flex;
  flex-direction: column;
`;

export const FlexWrap = styled("div")<{ gap: number }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap}px;
`;

export const GuideText = styled("div")`
  font-family: Pretendard, sans-serif;
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: center;
  color: #bdbdbd;

  position: relative;
  bottom: -65px;
`;
