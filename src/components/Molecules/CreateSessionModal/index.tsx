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
  const { axios, user } = useAuth();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [processMinutes, setProcessMinutes] = useState<string>("15분");
  const [relatedUser, setRelatedUser] = useState<
    { id: number; name: string }[]
  >([]);
  const [err, setErr] = useState("");

  const relatedIds: number[] = relatedUser.map((user) => {
    return user.id;
  });

  const handleCreateSession = () => {
    const data = {
      title: title,
      description: desc,
      processMinutes: Number(processMinutes.replace("분", "")),
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
                options={["15분", "30분", "45분", "60분"]}
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
                options={joiners
                  .filter(
                    (joiner: Joiner) =>
                      !relatedUser.some(
                        (user) => user.id === joiner.userDto.id
                      ) && joiner.userDto.id !== user.id
                  )
                  .map((joiner: Joiner) => {
                    return {
                      id: joiner.userDto.id,
                      name: joiner.userDto.name,
                    };
                  })}
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
