import React from "react";

import Notification from "@/components/Atoms/Notification";
import Profile from "@/components/Atoms/Profile";
import RoundButton from "@/components/Atoms/RoundButton";
import CreateVoteIdeaModal from "@/components/Molecules/CreateVoteIdeaModal";
import {
  ButtonWrap,
  EmptyMessage,
  EmptyWrap,
  GridBox,
  Header,
  TitleBar,
  TitleWrap,
  VoteIcon,
} from "@/components/Templates/Idea/Vote/styles";
import { IIdeaByStatus } from "@/interfaces/idea";

interface PropsType {
  getVote: () => void;
  projectId: number;
  ideas: IIdeaByStatus;
}

export default function VoteNotStarted({
  getVote,
  ideas,
  projectId,
}: PropsType) {
  const [newVoteIdeaOpen, setNewVoteIdeaOpen] = React.useState(false);
  const handleNewVoteIdeaOpen = () => setNewVoteIdeaOpen(true);
  const handleNewVoteIdeaClose = () => setNewVoteIdeaOpen(false);

  return (
    <>
      <Header className={"profile"}>
        {projectId && <Notification projectId={projectId} />}
        <Profile />
      </Header>

      <Header className={"add-button"}>
        <TitleWrap>
          <TitleBar />
          <span>{"투표하기"}</span>
        </TitleWrap>
        <ButtonWrap>
          <RoundButton
            isFilled={true}
            text={"아이디어 선정하기"}
            isMainClr={false}
            onClick={handleNewVoteIdeaOpen}
          />

          <CreateVoteIdeaModal
            projectId={projectId}
            ideas={ideas}
            open={newVoteIdeaOpen}
            handleClose={() => {
              handleNewVoteIdeaClose();
              getVote();
            }}
          />
        </ButtonWrap>
      </Header>

      <GridBox>
        <EmptyWrap>
          <VoteIcon />
          <EmptyMessage>
            현재 <span>{"진행 중인\n투표"}</span>가 없습니다.
          </EmptyMessage>
        </EmptyWrap>
      </GridBox>
    </>
  );
}
