import React from "react";

import RoundButton from "@/components/Atoms/RoundButton";
import CreateVoteIdeaModal from "@/components/Molecules/CreateVoteIdeaModal";
import {
  CreateVoteButtonWrap,
  EmptyMessage,
  EmptyWrap,
  GridBox,
  Header,
  ProfileImg,
  VoteIcon,
} from "@/components/Templates/Idea/Vote/styles";
import { IIdeaByStatus } from "@/interfaces/idea";

interface PropsType {
  getVote: () => void;
  projectId: number;
  ideas: IIdeaByStatus;
  isOwner: boolean;
}

export default function VoteNotStarted({
  getVote,
  ideas,
  isOwner,
  projectId,
}: PropsType) {
  const [newVoteIdeaOpen, setNewVoteIdeaOpen] = React.useState(false);
  const handleNewVoteIdeaOpen = () => setNewVoteIdeaOpen(true);
  const handleNewVoteIdeaClose = () => setNewVoteIdeaOpen(false);

  return (
    <>
      <Header className={"profile"}>
        <ProfileImg />
      </Header>

      <Header className={"add-button"}>
        <CreateVoteButtonWrap>
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
        </CreateVoteButtonWrap>
      </Header>

      <GridBox>
        <EmptyWrap>
          <VoteIcon />
          <EmptyMessage>{"진행 중인 투표가 없어요!"}</EmptyMessage>
        </EmptyWrap>
      </GridBox>
    </>
  );
}
