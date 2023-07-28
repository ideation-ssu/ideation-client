import React from "react";

import RoundButton from "@/components/Atoms/RoundButton";

import { Container, Content, Message, StyledModal } from "./styles";

function ConfirmModal({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}): React.ReactElement {
  return (
    <StyledModal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Container>
        <Content>
          <Message>{"프로젝트 생성 완료!"}</Message>
          <RoundButton
            text={"프로젝트 바로가기"}
            isFilled={true}
            onClick={handleClose}
          />
        </Content>
      </Container>
    </StyledModal>
  );
}

export default ConfirmModal;
