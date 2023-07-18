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
