import React, { useEffect } from "react";
import { useRouter } from "next/router";

import RoundButton from "@/components/Atoms/RoundButton";
import CreateSessionModal from "@/components/Molecules/CreateSessionModal";
import { Joiner } from "@/interfaces/project";
import { useAuth } from "@/utils/auth";

import {
  BrainstorminIcon,
  CreateVoteButtonWrap,
  EmptyMessage,
  EmptyWrap,
  GridBox,
  Header,
  ProfileImg,
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

  // new vote idea modal
  const [newSessionOpen, setNewSessionOpen] = React.useState(false);
  const handleNewSessionOpen = () => setNewSessionOpen(true);
  const handleNewSessionClose = () => setNewSessionOpen(false);

  useEffect(() => {
    getSession();
  }, []);

  const getSession = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASEURL}/brainstorming/${projectId}`)
      .then((res) => {
        if (!res.data.error)
          router.push(`/brainstorming/${res.data.brainstormingId}`);
      });
  };

  return (
    <>
      <Header className={"profile"}>
        <ProfileImg />
      </Header>

      <Header className={"add-button"}>
        <CreateVoteButtonWrap>
          <RoundButton
            isFilled={true}
            text={"세션 생성하기"}
            isMainClr={false}
            onClick={handleNewSessionOpen}
          />

          <CreateSessionModal
            projectId={projectId}
            joiners={joiners}
            open={newSessionOpen}
            handleClose={() => {
              handleNewSessionClose();
              getSession();
            }}
          />
        </CreateVoteButtonWrap>
      </Header>

      <GridBox>
        <EmptyWrap>
          <BrainstorminIcon />
          <EmptyMessage>{"진행 중인 세션이 없어요!"}</EmptyMessage>
        </EmptyWrap>
      </GridBox>
    </>
  );
}

export default Brainstorming;
