import { styled } from "@mui/material/styles";

export const Flex = styled("div")<{ gap: number }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap}px;
`;
