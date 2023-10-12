import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
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

export const StyledBadge = styled(Badge)`
  & .MuiBadge-badge {
    padding: 0;
    top: -12px;
    left: 0;
    right: 0;
    transform: none;
    display: none;
  }

  &:hover .MuiBadge-badge {
    display: block;
  }
`;

export const UserName = styled("div")`
  z-index: 1;
  width: 100%;
  margin-left: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 6px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  font-size: 10px;
  color: #fff;
  line-height: 10px;
  white-space: nowrap;
`;
