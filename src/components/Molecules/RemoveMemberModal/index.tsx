import React from "react";

import RoundButton from "@/components/Atoms/RoundButton";
import { User } from "@/interfaces/user";
import { useAuth } from "@/utils/auth";

import { ButtonWrap, Container, Content, StyledModal, Title } from "./styles";

export default function RemoveMemberModal({
  projectId,
  open,
  handleClose,
  userInfo,
  callback,
}: {
  projectId: number;
  open: boolean;
  handleClose: () => void;
  userInfo: User;
  callback: () => void;
}): React.ReactElement {
  const { axios } = useAuth();

  const handleLeaveTeam = async () => {
    await axios.delete(`${process.env.NEXT_PUBLIC_BASEURL}/project/joiner`, {
      data: {
        projectId,
        userId: userInfo.id,
      },
    });

    handleClose();
    callback();
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
          <span className={"main_title"}>{"팀원 내보내기"}</span>
          <span className={"sub_title"}>
            {"해당 프로젝트에서 팀원을 내보냅니다."}
          </span>
        </Title>
        <Content>
          <span className={"guide-message"}>
            <span className={"bold"}>{userInfo.name}</span>을 팀에서 제외할까요?
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
