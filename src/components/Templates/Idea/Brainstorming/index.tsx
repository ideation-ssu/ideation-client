import React, { useEffect, useRef, useState } from "react";
import SockJs from "sockjs-client";

import RoundButton from "@/components/Atoms/RoundButton";
import CreateSessionModal from "@/components/Molecules/CreateSessionModal";
import WaitSessionModal from "@/components/Molecules/WaitSessionModal";
import { ISession } from "@/interfaces/brainstorming";
import { Joiner } from "@/interfaces/project";
import { useAuth } from "@/utils/auth";
import StompJS, { CompatClient, Stomp } from "@stomp/stompjs";

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
  const { axios, user } = useAuth();
  const client = useRef<CompatClient>();

  const [session, setSession] = useState<ISession>();

  // new vote idea modal
  const [newSessionOpen, setNewSessionOpen] = React.useState(false);
  const handleNewSessionOpen = () => setNewSessionOpen(true);
  const handleNewSessionClose = () => setNewSessionOpen(false);

  // wait session modal
  const [waitSessionOpen, setWaitSessionOpen] = React.useState(false);
  const handleWaitSessionOpen = () => setWaitSessionOpen(true);
  const handleWaitSessionClose = () => setWaitSessionOpen(false);

  useEffect(() => {
    getSession();
  }, []);

  const getSession = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASEURL}/brainstorming/${projectId}`)
      .then((res) => {
        setSession(res.data);
        if (!res.data.error) stompConnect(res.data.brainstormingId);
      });
  };

  const stompConnect = (brainstormingId: number) => {
    client.current = Stomp.over(() => {
      const sock = new SockJs(`${process.env.NEXT_PUBLIC_BASEURL}/websocket`);
      return sock;
    });

    console.log(brainstormingId);
    client.current.connect({}, () => {
      client.current?.subscribe(`/topic/current/${brainstormingId}`, () => {});
    });
  };

  return (
    <>
      <Header className={"profile"}>
        <ProfileImg />
      </Header>

      {session ? (
        <>
          <RoundButton
            isFilled={true}
            text={"모달 띄우기 테스트"}
            isMainClr={false}
            onClick={handleWaitSessionOpen}
          />
          <WaitSessionModal
            open={waitSessionOpen}
            handleClose={handleWaitSessionClose}
          />
        </>
      ) : (
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
      )}

      <GridBox>
        {session ? (
          <div>{"구현 중"}</div>
        ) : (
          <EmptyWrap>
            <BrainstorminIcon />
            <EmptyMessage>{"진행 중인 세션이 없어요!"}</EmptyMessage>
          </EmptyWrap>
        )}
      </GridBox>
    </>
  );
}

export default Brainstorming;
