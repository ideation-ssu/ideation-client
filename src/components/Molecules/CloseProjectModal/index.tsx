import React from "react";
import { useRouter } from "next/router";

import RoundButton from "@/components/Atoms/RoundButton";
import { useAuth } from "@/utils/auth";

import { ButtonWrap, Container, Content, StyledModal, Title } from "./styles";

function CloseProjectModal({
  projectId,
  open,
  handleClose,
}: {
  projectId: number;
  open: boolean;
  handleClose: () => void;
}): React.ReactElement {
  const { axios } = useAuth();
  const router = useRouter();

  const handleCloseProject = () => {
    const data = {
      projectId: projectId,
      isDone: true,
    };
    axios
      .put(`${process.env.NEXT_PUBLIC_BASEURL}/project/done`, data)
      .then((res) => {
        handleClose();
        router.push("/main");
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
            {"프로젝트를 마감하여 통계를 확인합니다."}
          </span>
        </Title>
        <Content>
          <span className={"guide-message"}>
            {"프로젝트를 "}
            <span className={"bold"}>{"마감"}</span>
            {"할까요?"}
          </span>
        </Content>
        <ButtonWrap>
          <RoundButton text={"취소"} isFilled={false} onClick={handleClose} />
          <RoundButton
            text={"확인"}
            isFilled={true}
            onClick={handleCloseProject}
          />
        </ButtonWrap>
      </Container>
    </StyledModal>
  );
}

export default CloseProjectModal;
