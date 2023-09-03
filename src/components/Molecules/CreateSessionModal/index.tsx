import React, { useState } from "react";

import ComboBox from "@/components/Atoms/ComboBox";
import Driver from "@/components/Atoms/Driver";
import InputBox from "@/components/Atoms/InputBox";
import MultiComboBox from "@/components/Atoms/MultiComboBox";
import RoundButton from "@/components/Atoms/RoundButton";
import { Joiner } from "@/interfaces/project";
import { useAuth } from "@/utils/auth";

import {
  ButtonWrap,
  Container,
  Content,
  Grid,
  Line,
  StyledModal,
  SubTitleBar,
  Title,
} from "./styles";

function CreateSessionModal({
  open,
  handleClose,
  projectId,
  joiners,
}: {
  open: boolean;
  handleClose: () => void;
  projectId: number;
  joiners: Joiner[];
}): React.ReactElement {
  const { axios } = useAuth();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [processMinutes, setProcessMinutes] = useState<string>("15M");
  const [relatedUser, setRelatedUser] = useState<string[]>([]);
  const [err, setErr] = useState("");

  const relatedIds: number[] = relatedUser.flatMap((user) => {
    const matchingJoiners = joiners.filter(
      (joiner) => joiner.userDto.name === user
    );
    return matchingJoiners.map((joiner) => joiner.userDto.id);
  });

  const handleCreateSession = () => {
    const data = {
      title: title,
      processMinutes: Number(processMinutes.replace("M", "")),
      projectId: projectId,
      userIds: relatedIds,
    };
    axios
      .post(`${process.env.NEXT_PUBLIC_BASEURL}/brainstorming`, data)
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
          <span>{"세션 생성하기"}</span>
        </Title>
        <Driver />
        <Content>
          <Grid>
            <Line rate={1}>
              <SubTitleBar />
              <span>{"세션 제목"}</span>
            </Line>
            <Line rate={2.5}>
              <InputBox
                placeHolder={""}
                text={title}
                setText={setTitle}
                errText={err}
                autoComplete={"name"}
                fontSize={15}
              />
            </Line>
          </Grid>

          <Grid>
            <Line rate={1}>
              <SubTitleBar />
              <span>{"세션 설명"}</span>
            </Line>
            <Line rate={2.5}>
              <InputBox
                placeHolder={""}
                text={desc}
                setText={setDesc}
                errText={err}
                autoComplete={"desc"}
                fontSize={15}
              />
            </Line>
          </Grid>

          <Grid>
            <Line rate={1}>
              <SubTitleBar />
              <span>{"세션 진행 시간"}</span>
            </Line>
            <Line rate={2.5}>
              <ComboBox
                placeholder={""}
                value={processMinutes}
                setValue={setProcessMinutes}
                options={["15M", "30M", "45M", "60M"]}
              />
            </Line>
          </Grid>

          <Grid>
            <Line rate={1}>
              <SubTitleBar />
              <span>{"세션 참여자"}</span>
            </Line>
            <Line rate={2.5}>
              <MultiComboBox
                value={relatedUser}
                setValue={setRelatedUser}
                placeholder={"연관 담당자 추가"}
                options={joiners?.map((joiner: Joiner) => joiner.userDto.name)}
                width={250}
              />
            </Line>
          </Grid>
        </Content>

        <ButtonWrap>
          <RoundButton
            text={"세션 시작하기"}
            isFilled={true}
            onClick={handleCreateSession}
          />
        </ButtonWrap>
      </Container>
    </StyledModal>
  );
}

export default CreateSessionModal;
