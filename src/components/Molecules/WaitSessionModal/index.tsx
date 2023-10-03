import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";

import RoundButton from "@/components/Atoms/RoundButton";
import { ISession, ITopic } from "@/interfaces/brainstorming";
import { useAuth } from "@/utils/auth";
import { useTimer } from "@/utils/Timer";

import {
  Active,
  ActiveWrap,
  AvatarWrap,
  BrainstormingIcon,
  ButtonWrap,
  ClusteringIcon,
  Container,
  FuncTag,
  Grid,
  Item,
  JoinerList,
  JoinerListWrap,
  JoinerTitle,
  JoinerWrap,
  SessionFuncWrap,
  SessionName,
  StyledModal,
  TimerIcon,
  Title,
} from "./styles";

function WaitSessionModal({
  open,
  handleClose,
  brainstorming,
  topic,
}: {
  open: boolean;
  handleClose: () => void;
  brainstorming: ISession;
  topic: ITopic;
}): React.ReactElement {
  const { user } = useAuth();
  const isOwner = user.id === brainstorming.userId;

  const [isStarted, setIsStarted] = useState<boolean>(false);
  const timer = useTimer(isStarted, 0, 10);

  useEffect(() => {
    if (isStarted && timer.minutes === 0 && timer.seconds === 0) {
      handleClose();
    }
  }, [isStarted, timer]);

  return (
    <StyledModal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Container>
        <Title>
          <span className={"main_title"}>
            {isStarted
              ? "브레인 스토밍 세션 주요 4가지 기능"
              : "세션 시작을 대기 중입니다."}
          </span>
          <span className={"sub_title"}>
            {isStarted
              ? "아이데이션의 브레인스토밍 기능을 효율적으로 사용해보세요!"
              : isOwner
              ? "아래 버튼 눌러 브레인스토밍을 시작합니다."
              : "팀원들의 브레인스토밍 참가를 기다리고 있습니다."}
          </span>
        </Title>
        {isStarted ? (
          <>
            <SessionFuncWrap>
              <Grid className={"first-child"}>
                <Item className={"first-child"}>
                  <TimerIcon />
                  <FuncTag>{"시간 10분 연장"}</FuncTag>
                </Item>
              </Grid>
              <Grid>
                <Item className={"first-child"}>
                  <BrainstormingIcon />
                  <FuncTag>{"브레인스토밍 통계"}</FuncTag>
                </Item>
                <Item>
                  <ClusteringIcon />
                  <FuncTag>{"아이디어 그룹화"}</FuncTag>
                </Item>
              </Grid>
            </SessionFuncWrap>
          </>
        ) : (
          <>
            <SessionName>
              <span>{brainstorming.title}</span>
            </SessionName>
            <JoinerWrap isOwner={isOwner}>
              <JoinerTitle>
                <span>{"참여자"}</span>
                <span>{`${topic.onlineSessions.length} / ${
                  topic.onlineSessions.length + topic.offlineSessions.length
                }`}</span>
              </JoinerTitle>
              <JoinerListWrap>
                {topic.onlineSessions.map((session, index) => {
                  return (
                    <JoinerList key={index}>
                      <AvatarWrap>
                        <Avatar />
                      </AvatarWrap>
                      <span>{session.user.name}</span>
                      <ActiveWrap>
                        <Active isActive={true} />
                      </ActiveWrap>
                    </JoinerList>
                  );
                })}

                {topic.offlineSessions.map((session, index) => {
                  return (
                    <JoinerList key={index}>
                      <AvatarWrap>
                        <Avatar />
                      </AvatarWrap>
                      <span>{session.user.name}</span>
                      <ActiveWrap>
                        <Active isActive={false} />
                      </ActiveWrap>
                    </JoinerList>
                  );
                })}
              </JoinerListWrap>
            </JoinerWrap>
          </>
        )}
        {isOwner && (
          <ButtonWrap>
            {isStarted ? (
              <>
                <RoundButton
                  text={`${timer.seconds}초 후에 세션이 시작됩니다.`}
                  isFilled={true}
                  onClick={handleClose}
                />
              </>
            ) : (
              <RoundButton
                text={"세션 시작하기"}
                isFilled={true}
                onClick={() => setIsStarted(true)}
              />
            )}
          </ButtonWrap>
        )}
      </Container>
    </StyledModal>
  );
}

export default WaitSessionModal;
