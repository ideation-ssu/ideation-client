import { styled } from "@mui/material/styles";

export const ContextMenu = styled("div")<{ x: string; y: string }>`
  position: absolute;
  top: ${(props) => props.y};
  left: ${(props) => props.x};
  z-index: 9999;
  border-radius: 8px;
  opacity: 0.8;
  background: var(--White, #fff);
  box-shadow: 0px 2px 15px -3px rgba(0, 0, 0, 0.07);
`;

export const ContextItem = styled("div")`
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;

  :hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;
