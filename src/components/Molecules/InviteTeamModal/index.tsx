import React, { useState } from "react";
import axios from "axios";

import OutlineInputBox from "@/components/Atoms/OutlineInputBox";
import RoundButton from "@/components/Atoms/RoundButton";

import { ButtonWrap, Container, Content, StyledModal, Title } from "./styles";

function InviteTeamModal({
  projectId,
  open,
  handleClose,
}: {
  projectId: number;
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
    const data = {
      email: email,
      projectId: projectId,
    };

    axios
      .post(
        `${process.env.NEXT_PUBLIC_BASEURL}/project/invite/${projectId}`,
        data
      )
      .then((res) => console.log(res));
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
          <span className={"main_title"}>{"팀원 초대하기"}</span>
          <span className={"sub_title"}>
            {"우리 프로젝트에 새로운 팀원을 추가해보세요!"}
          </span>
        </Title>
        <Content>
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
        </Content>
      </Container>
    </StyledModal>
  );
}

export default InviteTeamModal;
