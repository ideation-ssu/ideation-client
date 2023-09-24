import React from "react";
import { useRouter } from "next/router";

import RoundButton from "@/components/Atoms/RoundButton";
import { useAuth } from "@/utils/auth";

import { ButtonWrap, Container, Content, StyledModal, Title } from "./styles";

function DeleteProjectModal({
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
    axios
      .delete(`${process.env.NEXT_PUBLIC_BASEURL}/project/${projectId}`)
      .then((res) => {
        handleClose();
        router.replace("/main");
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
          <span className={"main_title"}>{"프로젝트 삭제하기"}</span>
          <span className={"sub_title"}>{"프로젝트를 삭제합니다."}</span>
        </Title>
        <Content>
          <span className={"guide-message"}>
            {"프로젝트를 "}
            <span className={"bold"}>{"삭제"}</span>
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

export default DeleteProjectModal;
