import React from "react";

import RoundButton from "@/components/Atoms/RoundButton";
import { useAuth } from "@/utils/auth";

import { ButtonWrap, Container, Content, StyledModal, Title } from "./styles";

function CloseVoteModal({
  voteId,
  open,
  handleClose,
  getVote,
}: {
  voteId: number;
  open: boolean;
  handleClose: () => void;
  getVote: () => void;
}): React.ReactElement {
  const { axios } = useAuth();

  const handleCloseVote = () => {
    axios
      .put(`${process.env.NEXT_PUBLIC_BASEURL}/vote/${voteId}/done`)
      .then((res) => {
        handleClose();
        getVote();
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
            {"투표를 종료하여 결과를 확인합니다."}
          </span>
        </Title>
        <Content>
          <span className={"guide-message"}>
            {"투표를 "}
            <span className={"bold"}>{"종료"}</span>
            {"할까요?"}
          </span>
        </Content>
        <ButtonWrap>
          <RoundButton text={"취소"} isFilled={false} onClick={handleClose} />
          <RoundButton
            text={"확인"}
            isFilled={true}
            onClick={handleCloseVote}
          />
        </ButtonWrap>
      </Container>
    </StyledModal>
  );
}

export default CloseVoteModal;
