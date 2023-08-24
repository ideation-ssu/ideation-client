import React from "react";

import { ModalWrap, StyledModal, StyledText, TextWrap } from "./styles";

function ProfileModal({
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
      <ModalWrap>
        <TextWrap>
          <StyledText className={"name"}>{"User"}</StyledText>
          <StyledText className={"job"}>{"UI/UX Designer"}</StyledText>
        </TextWrap>
        <TextWrap>
          <StyledText>{"Designer"}</StyledText>
          <StyledText>{"010-1234-5678"}</StyledText>
        </TextWrap>
      </ModalWrap>
    </StyledModal>
  );
}

export default ProfileModal;
