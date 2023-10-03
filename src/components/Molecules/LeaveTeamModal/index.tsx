import React from "react";
import { useRouter } from "next/router";

import RoundButton from "@/components/Atoms/RoundButton";
import { useAuth } from "@/utils/auth";

import { ButtonWrap, Container, Content, StyledModal, Title } from "./styles";

function LeaveTeamModal({
  projectId,
  userId,
  open,
  handleClose,
}: {
  projectId: number;
  userId: number;
  open: boolean;
  handleClose: () => void;
}): React.ReactElement {
  const router = useRouter();
  const { axios } = useAuth();

  const handleLeaveTeam = async () => {
    await axios.delete(`${process.env.NEXT_PUBLIC_BASEURL}/project/joiner`, {
      data: {
        projectId,
        userId,
      },
    });

    handleClose();
    router.replace("/main");
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
          <span className={"main_title"}>{"팀 나가기"}</span>
          <span className={"sub_title"}>
            {"팀에서 나가면 되돌릴 수 없습니다."}
          </span>
        </Title>
        <Content>
          <span className={"guide-message"}>
            팀에서 나가시겠습니까?
            {/*<span className={"bold"}>{"종료"}</span>*/}
            {/*{"하시겠습니까?"}*/}
          </span>
        </Content>
        <ButtonWrap>
          <RoundButton text={"취소"} isFilled={false} onClick={handleClose} />
          <RoundButton
            text={"확인"}
            isFilled={true}
            onClick={handleLeaveTeam}
          />
        </ButtonWrap>
      </Container>
    </StyledModal>
  );
}

export default LeaveTeamModal;
