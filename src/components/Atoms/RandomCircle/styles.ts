import { styled } from "@mui/material/styles";

export const Circle = styled("div")<{
  width: number;
  height: number;
  color: string;
  top: number;
  left: number;
}>`
  position: absolute;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: ${(props) => props.color};
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
