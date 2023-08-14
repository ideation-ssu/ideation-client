import React, { useState } from "react";
import axios from "axios";

import OutlineInputBox from "@/components/Atoms/OutlineInputBox";
import RoundButton from "@/components/Atoms/RoundButton";

import { ButtonWrap, Container, Content, StyledModal, Title } from "./styles";

function InviteTeamModal({
  projectId,
  code,
  open,
  handleClose,
}: {
  projectId: number;
  code?: string;
  open: boolean;
  handleClose: () => void;
}): React.ReactElement {
  const [email, setEmail] = useState<string>("");

  const handleInvite = () => {
    const data = {
      email: email,
      projectId: projectId,
    };

    axios
      .post(`${process.env.NEXT_PUBLIC_BASEURL}/project/invite`, data)
      .then((res) => console.log(res));
  };

  const handleCopyLink = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASEURL}/project/invite/${projectId}`)
      .then((res) => {
        navigator.clipboard.writeText(res.data.data.inviteLink);
      });
  };

  const handleAccept = () => {
    const data = {
      code: code,
    };

    axios
      .post(`${process.env.NEXT_PUBLIC_BASEURL}/project/invite-accept`, data)
      .then((res) => {
        handleClose();
      });
  };

  return (
    <StyledModal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Container>
        <Title>
          <span className={"main_title"}>
            {!code ? "팀원 초대하기" : "프로젝트 초대 수락하기"}
          </span>
          <span className={"sub_title"}>
            {!code
              ? "우리 프로젝트에 새로운 팀원을 추가해보세요!"
              : "프로젝트를 수락하여 아이데이션을 경험해보세요!"}
          </span>
        </Title>
        <Content>
          {!code ? (
            <>
              <OutlineInputBox
                text={email}
                setText={setEmail}
                placeHolder={"이메일을 입력하세요"}
                autoComplete={"email"}
              />
              <ButtonWrap>
                <RoundButton
                  text={"Copy link"}
                  isFilled={false}
                  onClick={handleCopyLink}
                />
                <RoundButton
                  text={"Continue"}
                  isFilled={true}
                  onClick={handleInvite}
                />
              </ButtonWrap>
            </>
          ) : (
            <ButtonWrap>
              <RoundButton
                text={"Continue"}
                isFilled={true}
                onClick={handleAccept}
              />
            </ButtonWrap>
          )}
        </Content>
      </Container>
    </StyledModal>
  );
}

export default InviteTeamModal;
