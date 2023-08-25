import React, { useState } from "react";
import axios from "axios";

import OutlineInputBox from "@/components/Atoms/OutlineInputBox";
import RoundButton from "@/components/Atoms/RoundButton";
import { getToken } from "@/utils/tokenUtils";

import {
  ButtonWrap,
  Container,
  Content,
  IdeationImg,
  StyledModal,
  Title,
} from "./styles";

function CloseProjectModal({
  projectId,
  open,
  handleClose,
}: {
  projectId: number;
  open: boolean;
  handleClose: () => void;
}): React.ReactElement {
  const handleCloseProject = () => {
    const data = {
      projectId: projectId,
      isDone: true,
    };
    axios
      .put(`${process.env.NEXT_PUBLIC_BASEURL}/project/done`, data, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
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
          <span className={"main_title"}>{"프로젝트 마감하기"}</span>
          <span className={"sub_title"}>
            {"아이디어 선정이 완료됐다면 프로젝트를 마감하세요!"}
          </span>
        </Title>
        <Content>
          <IdeationImg />
          <ButtonWrap>
            <RoundButton
              text={"Continue"}
              isFilled={true}
              onClick={handleCloseProject}
            />
          </ButtonWrap>
        </Content>
      </Container>
    </StyledModal>
  );
}

export default CloseProjectModal;
