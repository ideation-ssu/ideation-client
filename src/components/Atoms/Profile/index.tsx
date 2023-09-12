import React from "react";
import { useRouter } from "next/router";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";

import { useAuth } from "@/utils/auth";

import {
  Button,
  ConfigIcon,
  IconWrap,
  LogoutIcon,
  ProfileIcon,
  StyledMenuItem,
  UpgradeButton,
  UserInfo,
} from "./styles";

function Profile(): React.ReactElement {
  const { user, authLogout } = useAuth();
  const router = useRouter();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button onClick={handleClick}>
        <Avatar src={user.image} />
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <StyledMenuItem disabled={true}>
          <UserInfo>
            <span className={"name"}>{user.name}</span>
            <span className={"count"}>{"비즈니스 요금제"}</span>
          </UserInfo>
        </StyledMenuItem>
        <StyledMenuItem>
          <IconWrap>
            <ProfileIcon />
          </IconWrap>
          <span>{"내 프로필"}</span>
        </StyledMenuItem>
        <StyledMenuItem>
          <IconWrap>
            <ConfigIcon />
          </IconWrap>
          <span>{"환경 설정"}</span>
        </StyledMenuItem>
        <StyledMenuItem
          onClick={() => {
            authLogout();
            router.push("/login");
          }}
        >
          <IconWrap>
            <LogoutIcon />
          </IconWrap>
          <span>{"로그아웃"}</span>
        </StyledMenuItem>
        <StyledMenuItem>
          <UpgradeButton>
            <span>{"서비스 업그레이드"}</span>
          </UpgradeButton>
        </StyledMenuItem>
      </Menu>
    </>
  );
}

export default Profile;