import AvatarGroup from "@mui/material/AvatarGroup";
import { styled } from "@mui/material/styles";

export const UserGroup = styled(AvatarGroup)<{ src: string }>`
  div:first-of-type {
    width: 33px;
    height: 33px;
    z-index: 1;
    background-image: ${(props) => (props.src ? `url(${props.src})` : "none")};
    background-size: cover;
    background-color: transparent;
    background-position: 50% 50%;
    font-size: 15px;
    font-family: Pretendard, sans-serif;
  }

  div:first-of-type::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: -1;
  }

  div:nth-of-type(2) {
    z-index: 2;
  }

  .MuiAvatar-root {
    border: none;
  }
`;