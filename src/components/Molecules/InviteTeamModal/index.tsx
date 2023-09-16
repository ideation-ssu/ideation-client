import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import OutlineInputBox from "@/components/Atoms/OutlineInputBox";
import RoundButton from "@/components/Atoms/RoundButton";
import { Project } from "@/interfaces/project";
import { useAuth } from "@/utils/auth";

import { ButtonWrap, Container, Content, StyledModal, Title } from "./styles";

function InviteTeamModal({
  projectId,
  code,
  open,
  handleClose,
}: {
  projectId: number;
  code?: string;
  open: boolean;
  handleClose: () => void;
}): React.ReactElement {
  const { axios } = useAuth();

  const [email, setEmail] = useState<string>("");
  const [projectInfo, setProjectInfo] = useState<null | Project>(null);

  const handleInvite = () => {
    const data = {
      email: email,
      projectId: projectId,
    };
    axios
      .post(`${process.env.NEXT_PUBLIC_BASEURL}/project/invite`, data)
      .then((res) => {
        handleClose();
      });
  };

  const handleCopyLink = () => {
    toast.success("초대 링크가 복사 되었습니다.");
    axios
      .get(`${process.env.NEXT_PUBLIC_BASEURL}/project/invite/${projectId}`)
      .then((res) => {
        navigator.clipboard.writeText(res.data.data.inviteLink);
        handleClose();
      });
  };

  const handleAccept = () => {
    const data = {
      code: code,
    };

    axios
      .post(`${process.env.NEXT_PUBLIC_BASEURL}/project/invite-accept`, data)
      .then((res) => {
        handleClose();
        if (code) {
          toast.success("프로젝트 참가를 수락했습니다.");
          return;
        }
        toast.success("초대 링크가 전송되었습니다.");
      });
  };

  const getProjectName = async () => {
    const {
      data: { data },
    } = await axios.get(
      `${process.env.NEXT_PUBLIC_BASEURL}/project/${projectId}/${code}`
    );

    setProjectInfo(data);
  };

  useEffect(() => {
    if (code) {
      getProjectName();
    }
  }, [code]);

  return (
    <StyledModal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Container>
        <Title>
          <span className={"main_title"}>
            {!code ? "팀원 초대하기" : "프로젝트 참가하기"}
          </span>
          <span className={"sub_title"}>
            {!code
              ? "우리 프로젝트에 새로운 팀원을 추가해보세요!"
              : "프로젝트에 참가하여 아이데이션을 시작합니다."}
          </span>
        </Title>
        <Content>
          {!code ? (
            <>
              <OutlineInputBox
                text={email}
                setText={setEmail}
                placeHolder={"이메일을 입력하세요"}
                autoComplete={"email"}
              />
              <ButtonWrap>
                <RoundButton
                  text={"초대 링크 복사"}
                  isFilled={false}
                  onClick={handleCopyLink}
                />
                <RoundButton
                  text={"초대하기"}
                  isFilled={true}
                  onClick={handleInvite}
                />
              </ButtonWrap>
            </>
          ) : (
            <>
              <div className="modal-text-content">
                <span>{projectInfo?.name}</span>
                <br />
                프로젝트에 참가할까요?
              </div>
              <ButtonWrap>
                <RoundButton
                  text={"취소"}
                  isFilled={false}
                  onClick={handleClose}
                />
                <RoundButton
                  text={"확인"}
                  isFilled={true}
                  onClick={handleAccept}
                />
              </ButtonWrap>
            </>
          )}
        </Content>
      </Container>
    </StyledModal>
  );
}

export default InviteTeamModal;
