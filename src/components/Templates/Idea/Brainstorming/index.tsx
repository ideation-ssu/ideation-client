import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import AvatarGroup from "@/components/Atoms/AvatarGroup";
import Profile from "@/components/Atoms/Profile";
import RoundButton from "@/components/Atoms/RoundButton";
import CreateSessionModal from "@/components/Molecules/CreateSessionModal";
import {
  TitleBar,
  TitleWrap,
} from "@/components/Templates/Idea/JoinerList/styles";
import { ISession } from "@/interfaces/brainstorming";
import { Joiner } from "@/interfaces/project";
import { useAuth } from "@/utils/auth";

import {
  BottomColorBar,
  BrainstorminIcon,
  Card,
  Content,
  CreateVoteButtonWrap,
  EmptyMessage,
  EmptyWrap,
  GridBox,
  Header,
  ImageWrap,
  PersonIcon,
  ProfileWrap,
  ProjectInfoWrap,
  RelatedUser,
  Status,
  StyledGrid,
  TimeIcon,
} from "./styles";

function Brainstorming({
  projectId,
  joiners,
}: {
  projectId: number;
  joiners: Joiner[];
}): React.ReactElement | null {
  const { axios } = useAuth();
  const router = useRouter();

  const [brainstormings, setBrainstormings] = useState<ISession[]>([]);

  // new vote idea modal
  const [newSessionOpen, setNewSessionOpen] = React.useState(false);
  const handleNewSessionOpen = () => setNewSessionOpen(true);
  const handleNewSessionClose = () => setNewSessionOpen(false);

  useEffect(() => {
    getSessions();
  }, []);

  const getSessions = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASEURL}/brainstorming/${projectId}`)
      .then((res) => {
        if (!res.data.error) setBrainstormings(res.data.brainstormings);
      });
  };

  console.log(brainstormings);

  return (
    <>
      <Header className={"profile"}>
        <Profile />
      </Header>

      <Header className={"add-button"}>
        <TitleWrap>
          <TitleBar />
          <span>브레인스토밍</span>
        </TitleWrap>
        <CreateVoteButtonWrap>
          <RoundButton
            isFilled={true}
            text={"세션 생성하기 +"}
            isMainClr={false}
            onClick={handleNewSessionOpen}
          />

          <CreateSessionModal
            projectId={projectId}
            joiners={joiners}
            open={newSessionOpen}
            handleClose={() => {
              handleNewSessionClose();
              getSessions();
            }}
          />
        </CreateVoteButtonWrap>
      </Header>

      <GridBox>
        {brainstormings.length <= 0 ? (
          <EmptyWrap>
            <BrainstorminIcon />
            <EmptyMessage>
              현재 <span>{"진행 중인\n세션"}</span>이 없습니다.
            </EmptyMessage>
          </EmptyWrap>
        ) : (
          <StyledGrid container className={"container"} spacing={1}>
            {brainstormings &&
              brainstormings.map((session: ISession) => (
                <Card>
                  <StyledGrid
                    key={session.brainstormingId}
                    onClick={() => {
                      if (session.status === "FINISHED")
                        router.push(`/statistics/${session.brainstormingId}`);
                      else
                        router.push(
                          `/brainstorming/${session.brainstormingId}`
                        );
                    }}
                  >
                    <Status enable={session.status === "STARTED"} />
                    <Content>
                      <span className={"title"}>{session.title}</span>
                      <span className={"desc"}>{session.description}</span>
                      <ProjectInfoWrap>
                        <TimeIcon />
                        <span>{`${session.processMinutes}M`}</span>
                        <PersonIcon />
                        <span>{session.users.length}</span>
                      </ProjectInfoWrap>
                      <ProfileWrap>
                        <AvatarGroup users={session.users} max={6} />
                      </ProfileWrap>
                    </Content>
                  </StyledGrid>
                  <BottomColorBar />
                </Card>
              ))}
          </StyledGrid>
        )}
      </GridBox>
    </>
  );
}

export default Brainstorming;
