import React, { useEffect, useState } from "react";

import VoteDone from "@/components/Templates/Idea/Vote/VoteDone";
import VoteInprogress from "@/components/Templates/Idea/Vote/VoteInprogress";
import VoteNotStarted from "@/components/Templates/Idea/Vote/VoteNotStarted";
import { IIdeaByStatus } from "@/interfaces/idea";
import { IVote } from "@/interfaces/vote";
import { useAuth } from "@/utils/auth";

export interface IVoteMenuOption {
  label: string;
  onClick: () => void;
}

function Vote({
  projectId,
  ideas,
  isOwner,
}: {
  projectId: number;
  ideas: IIdeaByStatus;
  isOwner: boolean;
}): React.ReactElement | null {
  const { axios } = useAuth();
  const [vote, setVote] = useState<IVote>();

  useEffect(() => {
    getVote();
  }, []);

  const getVote = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASEURL}/vote/${projectId}`)
      .then((res) => {
        setVote(() => {
          return res.data;
        });
      });
  };

  if (!vote) {
    return <></>;
  }

  if (!vote.vote) {
    return (
      <VoteNotStarted
        getVote={getVote}
        ideas={ideas}
        isOwner={isOwner}
        projectId={projectId}
      />
    );
  }

  if (!vote.done) {
    return (
      <VoteInprogress
        vote={vote}
        getVote={getVote}
        projectId={projectId}
        ideas={ideas}
        isOwner={isOwner}
      />
    );
  }

  return (
    <VoteDone
      vote={vote}
      getVote={getVote}
      projectId={projectId}
      ideas={ideas}
      isOwner={isOwner}
    />
  );
}

export default Vote;
