import React from "react";
import axios from "axios";

import RoundButton from "@/components/Atoms/RoundButton";
import { getToken } from "@/utils/tokenUtils";

import { ButtonWrap, Container, Content, StyledModal, Title } from "./styles";

function CloseVoteModal({
  voteId,
  open,
  handleClose,
}: {
  voteId: number;
  open: boolean;
  handleClose: () => void;
}): React.ReactElement {
  const handleCloseVote = () => {
    axios
      .put(`${process.env.NEXT_PUBLIC_BASEURL}/vote/${voteId}/done`, {
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
          <span className={"main_title"}>{"투표 종료하기"}</span>
          <span className={"sub_title"}>
            {"투표를 종료하면 결과를 확인할 수 있어요."}
          </span>
        </Title>
        <Content>
          <span className={"guide-message"}>
            {"투표를 "}
            <span className={"bold"}>{"종료"}</span>
            {"하시겠습니까?"}
          </span>
        </Content>
        <ButtonWrap>
          <RoundButton text={"Cancel"} isFilled={false} onClick={handleClose} />
          <RoundButton
            text={"Continue"}
            isFilled={true}
            onClick={handleCloseVote}
          />
        </ButtonWrap>
      </Container>
    </StyledModal>
  );
}

export default CloseVoteModal;
