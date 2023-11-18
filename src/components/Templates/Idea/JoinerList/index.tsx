import React, { useEffect, useState } from "react";

import Avatar from "@/components/Atoms/Avatar";
import MenuDrop from "@/components/Atoms/MenuDrop";
import Notification from "@/components/Atoms/Notification";
import Profile from "@/components/Atoms/Profile";
import RoundButton from "@/components/Atoms/RoundButton";
import InviteTeamModal from "@/components/Molecules/InviteTeamModal";
import LeaveTeamModal from "@/components/Molecules/LeaveTeamModal";
import ProfileModal from "@/components/Molecules/ProfileModal";
import { Joiner } from "@/interfaces/project";
import { User } from "@/interfaces/user";
import { useAuth } from "@/utils/auth";

import RemoveMemberModal from "../../../Molecules/RemoveMemberModal";

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
  StyledGrid,
  TitleBar,
  TitleWrap,
} from "./styles";

function JoinerList({
  projectId,
  code,
  joiners,
  isOwner,
  getJoiners,
}: {
  projectId: number;
  code: string;
  joiners: Joiner[];
  isOwner: boolean;
  getJoiners: () => void;
}): React.ReactElement | null {
  const { axios, user } = useAuth();

  const [selectedUser, setSelectedUser] = useState<User>();

  // invite team members
  const [open, setOpen] = React.useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // profile modal
  const [profileOpen, setProfileOpen] = React.useState<boolean>(false);
  const handleProfileOpen = () => setProfileOpen(true);
  const handleProfileClose = () => setProfileOpen(false);

  // leave team modal
  const [showLeaveTeamModal, setShowLeaveTeamModal] = React.useState(false);

  // block user modal
  const [removeMemberInfo, setRemoveMemberInfo] = React.useState<null | User>(
    null
  );

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASEURL}/project/joiner/${projectId}`)
      .then((res) => {
        if (res.data.error) handleOpen();
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <LeaveTeamModal
        projectId={projectId}
        userId={user.id}
        open={showLeaveTeamModal}
        handleClose={() => setShowLeaveTeamModal(false)}
      />
      {removeMemberInfo && (
        <RemoveMemberModal
          projectId={projectId}
          open={Boolean(removeMemberInfo)}
          handleClose={() => setRemoveMemberInfo(null)}
          userInfo={removeMemberInfo}
          callback={getJoiners}
        />
      )}
      <Header className={"profile"}>
        {projectId && <Notification projectId={projectId} />}
        <Profile />
      </Header>
      <Header className={"header"}>
        <TitleWrap>
          <TitleBar />
          <span>참여자 리스트</span>
        </TitleWrap>
        <ButtonWrap>
          <RoundButton
            text={"팀원 초대하기 +"}
            isFilled={true}
            isMainClr={false}
            onClick={handleOpen}
          />
        </ButtonWrap>
        <InviteTeamModal
          projectId={projectId}
          code={code}
          open={open}
          handleClose={() => {
            handleClose();
            getJoiners();
          }}
        />
      </Header>
      <GridBox>
        <StyledGrid container className={"container"} spacing={1}>
          {joiners?.map((joiner, index) => {
            const isOwnerAccount = joiner.role === "OWNER";
            const isMine = joiner.userDto.id === user.id;

            const menuOptionList: { label: string; onClick: () => void }[] = [
              {
                label: "정보 확인하기",
                onClick: () => {
                  setSelectedUser(joiner.userDto);
                  handleProfileOpen();
                },
              },
            ];

            if (isOwner) {
              if (!isMine) {
                menuOptionList.push({
                  label: "내보내기",
                  onClick: () => setRemoveMemberInfo(joiner.userDto),
                });
              }
            } else {
              if (isMine) {
                menuOptionList.push({
                  label: "팀 나가기",
                  onClick: () => setShowLeaveTeamModal(true),
                });
              }
            }

            return (
              <CardContainer key={index}>
                {isOwnerAccount && <CrownIcon />}
                <Card>
                  <ColorBar color={joiner.color} />
                  <Content
                    onClick={() => {
                      setSelectedUser(joiner.userDto);
                      handleProfileOpen();
                    }}
                  >
                    <Avatar
                      src={joiner.userDto.profileImage}
                      width={63}
                      height={63}
                    />
                    <div>
                      <span className={"name"}>{joiner.userDto.name}</span>
                      <span className={"email"}>{joiner.userDto.email}</span>
                    </div>
                  </Content>
                  <MenuWrap>
                    <MenuDrop
                      menuIcon={MenuIconReactNode}
                      options={menuOptionList}
                    />
                  </MenuWrap>
                </Card>
              </CardContainer>
            );
          })}
          {selectedUser && (
            <ProfileModal
              user={selectedUser}
              isEdit={selectedUser.id === user.id}
              open={profileOpen}
              handleClose={() => {
                handleProfileClose();
                setSelectedUser(undefined);
              }}
            />
          )}
        </StyledGrid>
      </GridBox>
    </>
  );
}

export default JoinerList;

const MenuIconReactNode: React.ReactNode = <MenuIcon />;
