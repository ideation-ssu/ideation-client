import React from "react";
import Avatar from "@mui/material/Avatar";

import RoundButton from "@/components/Atoms/RoundButton";
import { useAuth } from "@/utils/auth";

import {
  Active,
  ActiveWrap,
  AvatarWrap,
  ButtonWrap,
  Container,
  Content,
  JoinerList,
  JoinerTitle,
  JoinerWrap,
  StyledModal,
  Title,
} from "./styles";

function WaitSessionModal({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}): React.ReactElement {
  const { axios } = useAuth();

  const handleCloseVote = () => {};

  return (
    <StyledModal
      open={open}
      onClose={handleClose}
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
          <span className={"guide-message"}>{"세션 제목이 들어갈 자리"}</span>
        </Content>
        <JoinerWrap>
          <JoinerTitle>
            <span>{"참여자"}</span>
            <span>{"3/10"}</span>
          </JoinerTitle>
          <JoinerList>
            <AvatarWrap>
              <Avatar />
            </AvatarWrap>
            <span>{"조세연"}</span>
            <ActiveWrap>
              <Active />
            </ActiveWrap>
          </JoinerList>
          <JoinerList>
            <AvatarWrap>
              <Avatar />
            </AvatarWrap>
            <span>{"조세연"}</span>
            <ActiveWrap>
              <Active />
            </ActiveWrap>
          </JoinerList>
          <JoinerList>
            <AvatarWrap>
              <Avatar />
            </AvatarWrap>
            <span>{"조세연"}</span>
            <ActiveWrap>
              <Active />
            </ActiveWrap>
          </JoinerList>
        </JoinerWrap>
        {/*<ButtonWrap>*/}
        {/*  <RoundButton text={"Cancel"} isFilled={false} onClick={handleClose} />*/}
        {/*  <RoundButton*/}
        {/*    text={"Continue"}*/}
        {/*    isFilled={true}*/}
        {/*    onClick={handleCloseVote}*/}
        {/*  />*/}
        {/*</ButtonWrap>*/}
      </Container>
    </StyledModal>
  );
}

export default WaitSessionModal;
