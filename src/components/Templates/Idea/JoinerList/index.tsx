import React, { useEffect, useState } from "react";

import MenuDrop from "@/components/Atoms/MenuDrop";
import RoundButton from "@/components/Atoms/RoundButton";
import InviteTeamModal from "@/components/Molecules/InviteTeamModal";
import ProfileModal from "@/components/Molecules/ProfileModal";
import { Joiner } from "@/interfaces/project";
import { useAuth } from "@/utils/auth";

import {
  ButtonWrap,
  Card,
  CardContainer,
  ColorBar,
  Content,
  CrownIcon,
  GridBox,
  Header,
  MenuIcon,
  MenuWrap,
  ProfileImg,
  Search,
  SearchIcon,
  SearchIconWrapper,
  SearchInput,
} from "./styles";

function JoinerList({
  projectId,
  code,
  joiners,
  isOwner,
}: {
  projectId: number;
  code: string;
  joiners: Joiner[];
  isOwner: boolean;
}): React.ReactElement | null {
  const { user } = useAuth();

  // invite team members
  const [open, setOpen] = React.useState<boolean>(!!code);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // profile modal
  const [profileOpen, setProfileOpen] = React.useState<boolean>(!!code);
  const handleProfileOpen = () => setProfileOpen(true);
  const handleProfileClose = () => setProfileOpen(false);

  return (
    <>
      <Header className={"profile"}>
        <ProfileImg />
      </Header>
      <Header className={"search"}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <SearchInput
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <ButtonWrap>
          <RoundButton
            text={"팀원 초대하기 +"}
            isFilled={true}
            isMainClr={false}
            onClick={handleOpen}
          />
          <InviteTeamModal
            projectId={projectId}
            code={code}
            open={open}
            handleClose={handleClose}
          />
        </ButtonWrap>
      </Header>
      <GridBox>
        {joiners?.map((joiner, index) => {
          const isOwnerAccount = joiner.role === "OWNER";
          const isMine = joiner.userDto.id === user.id;

          const menuOptionList: { label: string; onClick: () => void }[] = [
            { label: "정보 확인하기", onClick: handleProfileOpen },
          ];

          if (isOwner) {
            if (!isMine) {
              menuOptionList.push({
                label: "내보내기",
                onClick: () => console.log("내보내기"),
              });
            }
          } else {
            if (isMine) {
              menuOptionList.push({
                label: "팀 나가기",
                onClick: () => console.log("팀 나가기"),
              });
            }
          }

          return (
            <CardContainer key={index}>
              {isOwnerAccount && <CrownIcon />}
              <Card>
                <ColorBar color={joiner.color} />
                <Content>
                  <span className={"name"}>{joiner.userDto.name}</span>
                  <span className={"email"}>{joiner.userDto.email}</span>
                </Content>
                <MenuWrap>
                  <MenuDrop
                    menuIcon={MenuIconReactNode}
                    options={menuOptionList}
                  />
                </MenuWrap>
              </Card>
              <ProfileModal
                user={joiner}
                open={profileOpen}
                handleClose={handleProfileClose}
              />
            </CardContainer>
          );
        })}
      </GridBox>
    </>
  );
}

export default JoinerList;

const MenuIconReactNode: React.ReactNode = <MenuIcon />;
