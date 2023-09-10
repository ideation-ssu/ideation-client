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
}: {
  projectId: number;
  code: string;
  joiners: Joiner[];
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

  const menuOptions = [
    { label: "내 정보 수정하기", onClick: handleProfileOpen },
    { label: "팀 나가기", onClick: () => console.log("팀 나가기") },
  ];

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
          const isOwner = joiner.role === "OWNER";
          const isMine = joiner.userDto.id === user?.id;
          return (
            <CardContainer key={index}>
              {isOwner && <CrownIcon />}
              <Card>
                <ColorBar color={joiner.color} />
                <Content>
                  <span className={"name"}>{joiner.userDto.name}</span>
                  <span className={"email"}>{joiner.userDto.email}</span>
                </Content>
                <MenuWrap>
                  <MenuDrop
                    menuIcon={MenuIconReactNode}
                    options={[
                      { label: "정보 확인하기", onClick: handleProfileOpen },
                      ...(isOwner
                        ? []
                        : isMine
                        ? [
                            // userOwner일 때 추가 메뉴 옵션
                            {
                              label: "팀 나가기",
                              onClick: () => console.log("팀 나가기"),
                            },
                          ]
                        : [
                            // userOwner가 아닐 때 추가 메뉴 옵션
                            {
                              label: "내보내기",
                              onClick: () => console.log("내보내기"),
                            },
                          ]),
                    ]}
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
