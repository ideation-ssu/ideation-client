import React, { useState } from "react";
import axios from "axios";
import dayjs, { Dayjs } from "dayjs";

import Calendar from "@/components/Atoms/Calendar";
import Driver from "@/components/Atoms/Driver";
import InputBox from "@/components/Atoms/InputBox";
import RoundButton from "@/components/Atoms/RoundButton";
import SwitchButton from "@/components/Atoms/SwitchButton";

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

function ProjectRegModal({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}): React.ReactElement {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [dueDate, setDueDate] = useState<Dayjs>(dayjs().add(1, "day"));
  const [isPublic, setIsPublic] = useState(false);
  const [err, setErr] = useState("");

  const createProject = () => {
    if (!name) {
      setErr("프로젝트 이름을 입력하세요");
      return;
    }

    const data = {
      name: name,
      desc: desc,
      dueDate: dayjs(dueDate).format("YYYY-MM-DD"),
      isPublic: isPublic,
    };

    axios
      .post(`${process.env.NEXT_PUBLIC_BASEURL}/project`, data)
      .then((res) => {
        if (res.data.error) setErr(res.data.error.userMessage);
        else {
          setErr("");
          console.log("success");
        }
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
          <span>{"NEW PROJECT"}</span>
        </Title>
        <Driver />
        <Content>
          <Grid>
            <Line rate={1}>
              <SubTitleBar />
              <span>{"프로젝트 명"}</span>
            </Line>
            <Line rate={2.5}>
              <InputBox
                placeHolder={""}
                text={name}
                setText={setName}
                errText={err}
                fontSize={15}
              />
            </Line>
          </Grid>

          <Grid>
            <Line rate={1}>
              <SubTitleBar />
              <span>{"프로젝트 설명"}</span>
            </Line>
            <Line rate={2.5}>
              <InputBox
                placeHolder={""}
                text={desc}
                setText={setDesc}
                fontSize={15}
              />
            </Line>
          </Grid>

          <Grid>
            <Line rate={1}>
              <SubTitleBar />
              <span>{"프로젝트 기한"}</span>
            </Line>
            <Line rate={2.5}>
              <Calendar date={dueDate} setDate={setDueDate} />
            </Line>
          </Grid>

          <Grid>
            <Line rate={1.3}>
              <SubTitleBar />
              <span>{"프로젝트 공개 여부"}</span>
            </Line>
            <Line rate={2.5}>
              <SwitchButton checked={isPublic} setChecked={setIsPublic} />
            </Line>
          </Grid>
          <ButtonWrap>
            <RoundButton
              text={"프로젝트 생성"}
              isFilled={true}
              onClick={createProject}
            />
          </ButtonWrap>
        </Content>
      </Container>
    </StyledModal>
  );
}

export default ProjectRegModal;