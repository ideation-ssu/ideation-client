import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";

export const StyledAvatar = styled(Avatar)<{
  width: number;
  height: number;
  edit: string;
}>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  cursor: ${(props) => (props.edit === "true" ? "pointer" : "default")};
`;
