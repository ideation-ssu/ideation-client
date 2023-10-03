import React from "react";

import RoundButton from "@/components/Atoms/RoundButton";

import { ButtonWrap, Container, Content, StyledModal, Title } from "./styles";

function CloseSessionModal({
  open,
  handleClose,
  closeSession,
}: {
  open: boolean;
  handleClose: () => void;
  closeSession: () => void;
}): React.ReactElement {
  return (
    <StyledModal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Container>
        <Title>
          <span className={"main_title"}>{"브레인스토밍 종료하기"}</span>
          <span className={"sub_title"}>
            {"세션을 종료하면 통계를 확인합니다."}
          </span>
        </Title>
        <Content>
          <span className={"guide-message"}>
            <span className={"bold"}>{"브레인스토밍"}</span>
            {"을 종료하시겠습니까?"}
          </span>
        </Content>
        <ButtonWrap>
          <RoundButton text={"취소"} isFilled={false} onClick={handleClose} />
          <RoundButton
            text={"확인"}
            isFilled={true}
            onClick={() => {
              handleClose();
              closeSession();
            }}
          />
        </ButtonWrap>
      </Container>
    </StyledModal>
  );
}

export default CloseSessionModal;
