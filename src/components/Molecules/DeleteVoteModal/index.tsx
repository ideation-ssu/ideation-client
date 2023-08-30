import React from "react";

import RoundButton from "@/components/Atoms/RoundButton";
import { useAuth } from "@/utils/auth";

import { ButtonWrap, Container, Content, StyledModal, Title } from "./styles";

function CloseVoteModal({
  voteId,
  voteName,
  open,
  handleClose,
}: {
  voteId: number;
  voteName: string;
  open: boolean;
  handleClose: () => void;
}): React.ReactElement {
  const { axios } = useAuth();

  const handleDeleteVote = () => {
    axios
      .delete(`${process.env.NEXT_PUBLIC_BASEURL}/vote/${voteId}`)
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
          <span className={"main_title"}>{"투표 삭제하기"}</span>
          <span className={"sub_title"}>
            {"투표를 삭제하면 되돌릴 수 없습니다."}
          </span>
        </Title>
        <Content>
          <span className={"guide-message"}>
            <span className={"bold"}>{voteName}</span>
            {"을(를)\n삭제 하시겠습니까?"}
          </span>
        </Content>
        <ButtonWrap>
          <RoundButton text={"Cancel"} isFilled={false} onClick={handleClose} />
          <RoundButton
            text={"Continue"}
            isFilled={true}
            onClick={handleDeleteVote}
          />
        </ButtonWrap>
      </Container>
    </StyledModal>
  );
}

export default CloseVoteModal;
