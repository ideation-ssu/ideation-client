import AvatarGroup from "@mui/material/AvatarGroup";
import { styled } from "@mui/material/styles";

export const UserGroup = styled(AvatarGroup)<{
  src: string;
  width: number;
  height: number;
}>`
  div {
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
  }

  div:nth-of-type(2) {
    z-index: 2;
  }

  .MuiAvatar-root {
    border: none;
  }
`;

export const AvatarWrapper = styled("div")`
  position: relative;

  &:hover {
    > p {
      display: block;
    }
  }
`;

export const VoteHoverText = styled("p")`
  display: none;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, calc(-100% - 5px));
  padding: 4px 6px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  font-size: 10px;
  color: #fff;
  line-height: 10px;
  white-space: nowrap;
`;
