import React, { KeyboardEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

import CheckBox from "@/components/Atoms/CheckBox";
import OutlineInputBox from "@/components/Atoms/OutlineInputBox";
import RoundButton from "@/components/Atoms/RoundButton";
import { LinkIcon } from "@/components/Templates/Idea/JoinerList/styles";
import { Project } from "@/interfaces/project";
import { useAuth } from "@/utils/auth";

import {
  ButtonWrap,
  Container,
  Content,
  EmailList,
  InputBoxWrap,
  Item,
  ListInner,
  StyledModal,
  Title,
} from "./styles";

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
  const { axios, user } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [projectInfo, setProjectInfo] = useState<null | Project>(null);
  const [inviteList, setInviteList] = useState<string[]>([]);
  const [isCheck, setIsCheck] = useState<boolean[]>([]);

  const handleInvite = () => {
    const checkedInviteList = inviteList.filter((_, index) => isCheck[index]);

    if (checkedInviteList.length < 1) {
      toast.error("초대할 계정을 선택해주세요.", {
        autoClose: 2000,
      });
      return;
    }

    checkedInviteList.map((email) => {
      const data = {
        email: email,
        projectId: projectId,
      };
      axios.post(`${process.env.NEXT_PUBLIC_BASEURL}/project/invite`, data);
    });

    handleClose();
    setEmail("");
    setInviteList([]);
    setIsCheck([]);
    toast.success("초대가 완료되었습니다.", {
      autoClose: 2000,
    });
    return;
  };

  const handleCopyLink = () => {
    toast.success("초대 링크가 복사 되었습니다.", {
      autoClose: 2000,
    });
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
          toast.success("프로젝트 참가를 수락했습니다.", {
            autoClose: 2000,
          });
          router.push(`/idea/${projectId}?tab=3`);
          return;
        }
        toast.success("초대 링크가 전송되었습니다.", {
          autoClose: 2000,
        });
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
      axios
        .get(`${process.env.NEXT_PUBLIC_BASEURL}/project/joiner/${projectId}`)
        .then((res) => {
          if (res.data.error) getProjectName();
          else router.push(`/idea/${projectId}?tab=3`);
        })
        .catch((err) => console.log(err));
    }
  }, [code]);

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    const finish = ["Enter", "NumpadEnter"];
    if (!finish.includes(e.key)) return;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const target = e.target as HTMLInputElement;
    if (emailPattern.test(target.value)) {
      setInviteList([...inviteList, target.value]);
      setEmail("");
    } else {
      toast.error("이메일 형식이 아닙니다.");
    }
  };

  const handleCheckboxChange = (index: number) => {
    const newIsCheck = [...isCheck];
    newIsCheck[index] = !newIsCheck[index];
    setIsCheck(newIsCheck);
  };

  return (
    <StyledModal
      open={open}
      onClose={() => {
        handleClose();
        setEmail("");
        setInviteList([]);
        setIsCheck([]);
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Container existInviteUser={inviteList.length > 0}>
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
              <InputBoxWrap>
                <OutlineInputBox
                  text={email}
                  setText={setEmail}
                  placeHolder={"이메일을 입력하세요"}
                  autoComplete={"email"}
                  onKeyUp={handleKeyUp}
                />
              </InputBoxWrap>
              <EmailList existInviteUser={inviteList.length > 0}>
                <ListInner>
                  <span>추가된 계정</span>
                  {inviteList.map((email, index) => {
                    return (
                      <Item key={index}>
                        <span>{email}</span>
                        <CheckBox
                          check={isCheck[index]}
                          setCheck={() => handleCheckboxChange(index)}
                          isBig={true}
                        />
                      </Item>
                    );
                  })}
                </ListInner>
              </EmailList>
              <ButtonWrap>
                <RoundButton
                  text={"초대 링크 복사"}
                  isFilled={false}
                  startIcon={<LinkIcon />}
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
