import React from "react";
import { useRouter } from "next/router";
import Menu from "@mui/material/Menu";
import { toast } from "react-toastify";

import Avatar from "@/components/Atoms/Avatar";
import { useAuth } from "@/utils/auth";

import ProfileModal from "../../Molecules/ProfileModal";

import {
  Button,
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

  // edit profile modal
  const [editProfileModal, setEditProfileModal] = React.useState(false);
  const handleEditProfileOpen = () => setEditProfileModal(true);
  const handleEditProfileClose = () => setEditProfileModal(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button onClick={handleClick}>
        <Avatar src={user.profileImage} width={45} height={45} />
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <StyledMenuItem disabled={true}>
          <UserInfo>
            <span className={"name"}>{user.name}</span>
            <span className={"count"}>{"비즈니스 요금제"}</span>
          </UserInfo>
        </StyledMenuItem>
        <StyledMenuItem
          onClick={() => {
            handleClose();
            handleEditProfileOpen();
          }}
        >
          <IconWrap>
            <ProfileIcon />
          </IconWrap>
          <span>{"내 프로필"}</span>
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
          <UpgradeButton
            onClick={() => {
              toast.warning("해당 서비스는 준비 중입니다.", {
                autoClose: 2000,
              });
            }}
          >
            <span>{"서비스 업그레이드"}</span>
          </UpgradeButton>
        </StyledMenuItem>
      </Menu>
      <ProfileModal
        user={user}
        open={editProfileModal}
        handleClose={handleEditProfileClose}
      />
    </>
  );
}

export default Profile;
