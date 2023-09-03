import React, { useEffect, useRef, useState } from "react";
import { router } from "next/client";
import SockJs from "sockjs-client";

import Avatar from "@/components/Atoms/Avatar";
import RoundButton from "@/components/Atoms/RoundButton";
import CreateProjectModal from "@/components/Molecules/CreateProjectModal";
import LoginModal from "@/components/Molecules/LoginModal";
import WaitSessionModal from "@/components/Molecules/WaitSessionModal";
import Workspace from "@/components/Templates/Main/Workspace";
import { IMessage, ISession } from "@/interfaces/brainstorming";
import { Project } from "@/interfaces/project";
import {
  AvatarWrap,
  ButtonWrap,
  Container,
  Content,
  Header,
  LogoWrap,
  RightHeaderWrap,
  Search,
  SearchIcon,
  SearchIconWrapper,
  SearchInput,
  TitleBar,
  TitleWrap,
} from "@/styles/main/styles";
import { useAuth } from "@/utils/auth";
import { CompatClient, Stomp } from "@stomp/stompjs";

import { LogoIcon } from "../../../../public/icons/Logo/styles.ts";

function BrainstormingSession(): React.ReactElement {
  const { axios, user } = useAuth();
  const { query } = router;
  const brainstormingId: number =
    typeof query.brainstormingId === "string"
      ? parseInt(query.brainstormingId)
      : -1;

  const client = useRef<CompatClient>();
  const [message, setMessage] = useState<IMessage>();
  const [brainstorming, setBrainstorming] = useState<ISession>();

  // wait session modal
  const [waitSessionOpen, setWaitSessionOpen] = React.useState(false);
  const handleWaitSessionOpen = () => setWaitSessionOpen(true);
  const handleWaitSessionClose = () => setWaitSessionOpen(false);

  useEffect(() => {
    handleWaitSessionOpen();
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
        setMessage(JSON.parse(message.body));
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

  return (
    <Container>
      {message && brainstorming && (
        <WaitSessionModal
          open={waitSessionOpen}
          handleClose={handleWaitSessionClose}
          brainstorming={brainstorming}
          message={message}
        />
      )}
      <Header>
        <LogoWrap>
          <LogoIcon />
        </LogoWrap>
      </Header>
      <Content></Content>
    </Container>
  );
}

export default BrainstormingSession;
