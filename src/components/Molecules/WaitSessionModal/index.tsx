import React from "react";
import Avatar from "@mui/material/Avatar";

import RoundButton from "@/components/Atoms/RoundButton";
import { IMessage, ISession } from "@/interfaces/brainstorming";
import { useAuth } from "@/utils/auth";

import {
  Active,
  ActiveWrap,
  AvatarWrap,
  ButtonWrap,
  Container,
  Content,
  JoinerList,
  JoinerListWrap,
  JoinerTitle,
  JoinerWrap,
  StyledModal,
  Title,
} from "./styles";

function WaitSessionModal({
  open,
  handleClose,
  brainstorming,
  message,
}: {
  open: boolean;
  handleClose: () => void;
  brainstorming: ISession;
  message: IMessage;
}): React.ReactElement {
  const { user } = useAuth();
  const isOwner = user.id === brainstorming.userId;

  return (
    <StyledModal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Container>
        <Title>
          <span className={"main_title"}>{"세션 시작을 대기 중입니다."}</span>
          <span className={"sub_title"}>
            {"세션 담당자가 세션을 시작하기 전까지 기다려주세요."}
          </span>
        </Title>
        <Content>
          <span className={"guide-message"}>{brainstorming.title}</span>
        </Content>
        <JoinerWrap isOwner={isOwner}>
          <JoinerTitle>
            <span>{"참여자"}</span>
            <span>{`${message.onlineSessions.length} / ${
              message.onlineSessions.length + message.offlineSessions.length
            }`}</span>
          </JoinerTitle>
          <JoinerListWrap>
            {message.onlineSessions.map((session, index) => {
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

            {message.offlineSessions.map((session, index) => {
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
        {isOwner && (
          <ButtonWrap>
            <RoundButton
              text={"세션 시작하기"}
              isFilled={true}
              onClick={handleClose}
            />
          </ButtonWrap>
        )}
      </Container>
    </StyledModal>
  );
}

export default WaitSessionModal;
