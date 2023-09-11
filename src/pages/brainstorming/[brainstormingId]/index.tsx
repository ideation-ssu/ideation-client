import React, { KeyboardEvent, useEffect, useRef, useState } from "react";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import SockJs from "sockjs-client";

import OutlineInputBox from "@/components/Atoms/OutlineInputBox";
import RandomCircle from "@/components/Atoms/RandomCircle";
import CloseSessionModal from "@/components/Molecules/CloseSessionModal";
import WaitSessionModal from "@/components/Molecules/WaitSessionModal";
import { ISend, ISession, IStatus, ITopic } from "@/interfaces/brainstorming";
import { ICircle } from "@/interfaces/circle";
import {
  Container,
  Content,
  ExitBtn,
  Footer,
  Header,
  LogoWrap,
  SendBtn,
  SendIcon,
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
  const router = useRouter();

  const client = useRef<CompatClient>();
  const [curTopic, setCurTopic] = useState<ITopic>();
  const [status, setStatus] = useState<IStatus>();
  const [send, setSend] = useState<ISend>();
  const [brainstorming, setBrainstorming] = useState<ISession>();

  const [idea, setIdea] = useState<string>("");
  const [circleValue, setCircleValue] = useState<string>("");
  const [circles, setCircles] = useState<ICircle[]>([]);

  // wait session modal
  const [waitSessionOpen, setWaitSessionOpen] = React.useState(false);
  const handleWaitSessionOpen = () => setWaitSessionOpen(true);
  const handleWaitSessionClose = () => setWaitSessionOpen(false);

  // close session modal
  const [closeSessionOpen, setCloseSessionOpen] = React.useState(false);
  const handleCloseSessionOpen = () => setCloseSessionOpen(true);
  const handleCloseSessionClose = () => setCloseSessionOpen(false);

  useEffect(() => {
    getBrainstorming();
  }, [user, brainstormingId]);

  const getBrainstorming = () => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_BASEURL}/brainstorming/id/${brainstormingId}`
      )
      .then((res) => {
        setBrainstorming(res.data);
        if (res.data.status === "FINISHED")
          router.push(`/idea/${res.data.projectId}?tab=3`);
        stompConnect(res.data.isStarted, res.data.brainstormingId);
      });
  };

  const stompConnect = (isStarted: boolean, brainstormingId: number) => {
    client.current = Stomp.over(() => {
      const sock = new SockJs(`${process.env.NEXT_PUBLIC_BASEURL}/websocket`);
      return sock;
    });

    client.current.connect({}, () => {
      stompJoin(brainstormingId);
      subScribeSend();
      if (!isStarted) handleWaitSessionOpen();
    });
  };

  const stompJoin = (brainstormingId: number) => {
    const message = {
      userId: user.id,
      brainstormingId: brainstormingId,
    };
    client.current?.send("/app/join", {}, JSON.stringify(message));

    client.current?.subscribe(
      `/topic/current/${brainstormingId}`,
      (message) => {
        setCurTopic(JSON.parse(message.body));
      }
    );
  };

  const stompStart = () => {
    const message = {
      userId: user.id,
      brainstormingId: brainstormingId,
    };
    client.current?.send("/app/session/start", {}, JSON.stringify(message));

    client.current?.subscribe(
      `/topic/session/${brainstormingId}/status`,
      (message) => {
        setStatus(JSON.parse(message.body));
      }
    );
  };

  const stompSend = (circle: ICircle) => {
    const message = {
      userId: user.id,
      brainstormingId: brainstormingId,
      ideaName: idea,
      freeJsonString: JSON.stringify(circle),
    };
    console.log(JSON.stringify(message));
    client.current?.send("/app/chat/idea", {}, JSON.stringify(message));
    subScribeSend();
  };

  const subScribeSend = () => {
    client.current?.subscribe(
      `/topic/session/${brainstormingId}/chat`,
      (message) => {
        console.log(JSON.parse(message.body));
        setSend(JSON.parse(message.body));
        const newCircle: ICircle[] = [];
        JSON.parse(message.body).map((circle: ISend) => {
          newCircle.push(JSON.parse(circle.freeJsonString));
        });
        setCircles(newCircle);
      }
    );
  };

  const stompEnd = () => {
    const message = {
      userId: user.id,
      brainstormingId: brainstormingId,
    };
    client.current?.send("/app/session/end", {}, JSON.stringify(message));

    client.current?.subscribe(
      `/topic/session/${brainstormingId}/status`,
      (message) => {
        setStatus(JSON.parse(message.body));
        router.push("/statistics");
      }
    );
  };

  const goHome = () => {
    router.push("/main");
  };

  return (
    <Container>
      {status?.status === "PENDING" && curTopic && brainstorming && (
        <WaitSessionModal
          open={waitSessionOpen}
          handleClose={() => {
            handleWaitSessionClose();
            stompStart();
          }}
          brainstorming={brainstorming}
          topic={curTopic}
        />
      )}
      <Header>
        <LogoWrap onClick={goHome}>
          <LogoIcon />
        </LogoWrap>
      </Header>
      <Content>
        <RandomCircle
          value={circleValue}
          setValue={setCircleValue}
          circles={circles}
          setCircles={setCircles}
          sendCircle={stompSend}
        />
      </Content>
      <Footer>
        <OutlineInputBox
          placeHolder=""
          autoComplete="brainstorming"
          text={idea}
          setText={setIdea}
          onKeyUp={(e: KeyboardEvent<HTMLInputElement>) => {
            const finish = ["Enter", "NumpadEnter"];
            if (!finish.includes(e.key)) return;

            const target = e.target as HTMLInputElement;
            setCircleValue(target.value);
            setIdea("");
          }}
        />
        <SendBtn>
          <SendIcon />
        </SendBtn>
        {user.id === brainstorming?.userId && (
          <ExitBtn onClick={handleCloseSessionOpen}>
            <span>{"종료"}</span>
          </ExitBtn>
        )}
        <CloseSessionModal
          open={closeSessionOpen}
          handleClose={handleCloseSessionClose}
          closeSession={stompEnd}
        />
      </Footer>
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
