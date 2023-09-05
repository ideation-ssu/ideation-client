import React, { useEffect, useRef, useState } from "react";
import { GetServerSideProps, NextPage } from "next";
import SockJs from "sockjs-client";

import WaitSessionModal from "@/components/Molecules/WaitSessionModal";
import { ISession, IStatus, ITopic } from "@/interfaces/brainstorming";
import {
  Container,
  Content,
  Header,
  LogoWrap,
} from "@/styles/brainstorming/styles";
import { useAuth } from "@/utils/auth";
import { CompatClient, Stomp } from "@stomp/stompjs";

import { LogoIcon } from "../../../../public/icons/Logo/styles.ts";

interface BrainstormingProps {
  brainstormingId: number;
}

const BrainstormingSession: NextPage<BrainstormingProps> = ({
  brainstormingId,
}: BrainstormingProps) => {
  const { axios, user } = useAuth();

  const client = useRef<CompatClient>();
  const [curTopic, setCurTopic] = useState<ITopic>();
  const [status, setStatus] = useState<IStatus>();
  const [brainstorming, setBrainstorming] = useState<ISession>();

  // wait session modal
  const [waitSessionOpen, setWaitSessionOpen] = React.useState(false);
  const handleWaitSessionOpen = () => setWaitSessionOpen(true);
  const handleWaitSessionClose = () => setWaitSessionOpen(false);

  useEffect(() => {
    handleWaitSessionOpen();
    console.log("open");
    getBrainstorming();
    stompConnect(brainstormingId);
  }, []);

  const getBrainstorming = () => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_BASEURL}/brainstorming/id/${brainstormingId}`
      )
      .then((res) => {
        setBrainstorming(res.data);
      });
  };

  const stompConnect = (brainstormingId: number) => {
    client.current = Stomp.over(() => {
      const sock = new SockJs(`${process.env.NEXT_PUBLIC_BASEURL}/websocket`);
      return sock;
    });

    client.current.connect({}, () => {
      stompSend(brainstormingId);
      stompSubscribe(brainstormingId);
      handleWaitSessionOpen();
    });
  };

  const stompSubscribe = (brainstormingId: number) => {
    client.current?.subscribe(
      `/topic/current/${brainstormingId}`,
      (message) => {
        setCurTopic(JSON.parse(message.body));
      }
    );

    client.current?.subscribe(
      `/topic/session/${brainstormingId}/status`,
      (message) => {
        setStatus(JSON.parse(message.body));
      }
    );
  };

  const stompSend = (brainstormingId: number) => {
    const message = {
      userId: user.id,
      brainstormingId: brainstormingId,
    };
    client.current?.send("/app/join", {}, JSON.stringify(message));
  };

  const stompStart = (brainstormingId: number) => {
    const message = {
      userId: user.id,
      brainstormingId: brainstormingId,
    };
    client.current?.send("/app/session/start", {}, JSON.stringify(message));
  };

  return (
    <Container>
      {status?.status !== "STARTED" && curTopic && brainstorming && (
        <WaitSessionModal
          open={waitSessionOpen}
          handleClose={() => {
            handleWaitSessionClose();
            stompStart(brainstormingId);
          }}
          brainstorming={brainstorming}
          topic={curTopic}
        />
      )}
      <Header>
        <LogoWrap>
          <LogoIcon />
        </LogoWrap>
      </Header>
      <Content>{status?.status === "STARTED" && <div>{"hi"}</div>}</Content>
    </Container>
  );
};

export default BrainstormingSession;

export const getServerSideProps: GetServerSideProps<
  BrainstormingProps
> = async (context) => {
  const { query } = context;
  const brainstormingId: number =
    typeof query.brainstormingId === "string"
      ? parseInt(query.brainstormingId)
      : -1;

  return {
    props: {
      brainstormingId,
    },
  };
};
