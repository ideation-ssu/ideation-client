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

export const Label = styled("div")`
  width: 239.53px;
  height: 112.97px;
  padding-bottom: 40px;

  white-space: pre-wrap;
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 30px;
  line-height: 36.31px;
  text-shadow: -1px 0px #eaeaea, 0px 1px #eaeaea, 1px 0px #eaeaea,
    0px -1px #eaeaea;
`;

export const FlexWrap = styled("div")<{ gap: number }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap}px;
`;
