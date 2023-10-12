import AvatarGroup from "@mui/material/AvatarGroup";
import { styled } from "@mui/material/styles";

export const UserGroup = styled(AvatarGroup)<{
  src: string;
  maxText: number;
  width: number;
  height: number;
}>`
  .MuiAvatar-root {
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    border: none;
    z-index: 1;
  }

  > .MuiAvatar-root:first-of-type {
    width: 33px;
    height: 33px;
    z-index: 1;
    background-image: ${(props) => (props.src ? `url(${props.src})` : "none")};
    background-size: cover;
    background-color: transparent;
    background-position: 50% 50%;
    font-size: 0;
    font-family: Pretendard, sans-serif;

    &:before {
      content: "+${(props) => props.maxText - 1}";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.3);
      z-index: -1;
      font-size: 15px;
    }
  }

  .MuiAvatar-root:nth-of-type(2) {
    z-index: 2;
  }
`;
