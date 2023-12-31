import React, { KeyboardEvent, useEffect, useRef, useState } from "react";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import SockJs from "sockjs-client";

import OutlineInputBox from "@/components/Atoms/OutlineInputBox";
import RandomCircle from "@/components/Atoms/RandomCircle";
import CloseSessionModal from "@/components/Molecules/CloseSessionModal";
import WaitSessionModal from "@/components/Molecules/WaitSessionModal";
import { ISession, ITimer, ITopic } from "@/interfaces/brainstorming";
import { ICircle } from "@/interfaces/circle";
import { Joiner } from "@/interfaces/project";
import {
  Container,
  Content,
  ExitBtn,
  Footer,
  Header,
  IdeaCountIcon,
  LogoWrap,
  SendBtn,
  SendIcon,
  TimerIcon,
  TimerWrap,
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
  const [circles, setCircles] = useState<ICircle[]>([]);

  const [brainstorming, setBrainstorming] = useState<ISession>();
  const [timer, setTimer] = useState<ITimer>();
  const [joiners, setJoiners] = useState<Joiner[]>([]);

  const [idea, setIdea] = useState<string>("");
  const [circleValue, setCircleValue] = useState<string>("");

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
    getCircles();
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
        getJoiners(res.data.projectId);
      });
  };

  const getJoiners = (projectId: number) => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASEURL}/project/joiner/${projectId}`)
      .then((res) => {
        setJoiners(res.data.data?.joiners);
      });
  };

  const getCircles = () => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_BASEURL}/brainstorming/id/${brainstormingId}/session/idea`
      )
      .then((res) => {
        setCircles(res.data.ideas);
      });
  };

  const stompConnect = (isStarted: boolean, brainstormingId: number) => {
    client.current = Stomp.over(() => {
      const sock = new SockJs(`${process.env.NEXT_PUBLIC_BASEURL}/websocket`);
      return sock;
    });

    client.current.connect({}, () => {
      stompJoin(brainstormingId);
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

    subScribeSend();
    subScribeTimer();
    subScribeStatus();
  };

  const stompStart = () => {
    const message = {
      userId: user.id,
      brainstormingId: brainstormingId,
    };
    if (brainstorming && !brainstorming.isStarted)
      client.current?.send("/app/session/start", {}, JSON.stringify(message));
  };

  const stompSend = (circle: ICircle) => {
    client.current?.send("/app/chat/idea", {}, JSON.stringify(circle));
  };

  const stompRemove = (sessionIdeaId: string) => {
    const message = {
      sessionIdeaId: sessionIdeaId,
      brainstormingId: brainstormingId,
    };
    client.current?.send("/app/remove/idea", {}, JSON.stringify(message));
  };

  const stompLike = (sessionIdeaId: string) => {
    const message = {
      sessionIdeaId: sessionIdeaId,
      brainstormingId: brainstormingId,
      userId: user.id,
    };
    client.current?.send("/app/like/idea", {}, JSON.stringify(message));
  };

  const subScribeSend = () => {
    client.current?.subscribe(
      `/topic/session/${brainstormingId}/chat`,
      (message) => {
        setCircles(JSON.parse(message.body));
      }
    );
  };

  const subScribeTimer = () => {
    client.current?.subscribe(
      `/topic/session/${brainstormingId}/timer`,
      (message) => {
        setTimer(JSON.parse(message.body));
      }
    );
  };

  const stompEnd = () => {
    const message = {
      userId: user.id,
      brainstormingId: brainstormingId,
    };
    client.current?.send("/app/session/end", {}, JSON.stringify(message));
  };

  const subScribeStatus = () => {
    client.current?.subscribe(
      `/topic/session/${brainstormingId}/status`,
      (message) => {
        const status = JSON.parse(message.body);
        if (status.status == "STARTED") {
          handleWaitSessionClose();
        }
        if (status.status == "FINISHED") {
          router.push(`/statistics/${brainstormingId}`);
        }
      }
    );
  };

  const goBrainstorming = () => {
    router.push(`/idea/${brainstorming?.projectId}?tab=2`);
  };

  return (
    <Container>
      {brainstorming?.status === "PENDING" && curTopic && brainstorming && (
        <WaitSessionModal
          open={waitSessionOpen}
          handleClose={stompStart}
          brainstorming={brainstorming}
          topic={curTopic}
        />
      )}
      <Header>
        <LogoWrap onClick={goBrainstorming}>
          <LogoIcon />
        </LogoWrap>
        <TimerWrap>
          <TimerIcon />
          <span>{timer?.text}</span>
        </TimerWrap>
      </Header>
      <Content>
        {brainstorming && (
          <RandomCircle
            projectId={brainstorming.projectId}
            brainstormingId={brainstormingId}
            joiners={joiners}
            value={circleValue}
            setValue={setCircleValue}
            circles={circles}
            sendCircle={stompSend}
            removeCircle={stompRemove}
            likeCircle={stompLike}
          />
        )}
      </Content>
      <Footer>
        <IdeaCountIcon>
          <span>{circles?.length}</span>
        </IdeaCountIcon>
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
