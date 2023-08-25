import React, { useState } from "react";
import axios from "axios";
import dayjs, { Dayjs } from "dayjs";

import Calendar from "@/components/Atoms/Calendar";
import CheckBox from "@/components/Atoms/CheckBox";
import ConfirmModal from "@/components/Atoms/ConfirmModal";
import Driver from "@/components/Atoms/Driver";
import InputBox from "@/components/Atoms/InputBox";
import RoundButton from "@/components/Atoms/RoundButton";
import SwitchButton from "@/components/Atoms/SwitchButton";
import { getToken } from "@/utils/tokenUtils";

import {
  ButtonWrap,
  CalendarWrap,
  Container,
  Content,
  Grid,
  Line,
  StyledModal,
  SubTitleBar,
  Title,
} from "./styles";

function CreateVoteIdeaModal({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}): React.ReactElement {
  const [name, setName] = useState("");
  const [dueDate, setDueDate] = useState<Dayjs>(dayjs().add(1, "day"));
  const [isAutoCloseProject, setIsAutoCloseProject] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isMultiple, setIsMultiple] = useState(false);
  const [err, setErr] = useState("");

  const createProject = () => {
    // if (!name) {
    //   setErr("프로젝트 이름을 입력하세요");
    //   return;
    // }
    //
    // const data = {
    //   name: name,
    //   desc: desc,
    //   dueDate: dayjs(dueDate).format("YYYY-MM-DD"),
    //   isPublic: isPublic,
    // };
    //
    // axios
    //   .post(`${process.env.NEXT_PUBLIC_BASEURL}/project`, data, {
    //     headers: {
    //       Authorization: `Bearer ${getToken()}`,
    //     },
    //   })
    //   .then((res) => {
    //     if (res.data.error) setErr(res.data.error.userMessage);
    //     else {
    //       setErr("");
    //       handleConfirmOpen();
    //     }
    //   });
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
          <span>{"아이디어 선정하기"}</span>
        </Title>
        <Driver />
        <Content>
          <Grid>
            <Line rate={1}>
              <SubTitleBar />
              <span>{"투표 제목"}</span>
            </Line>
            <Line rate={2.5}>
              <InputBox
                placeHolder={""}
                text={name}
                setText={setName}
                errText={err}
                autoComplete={"name"}
                fontSize={15}
              />
            </Line>
          </Grid>

          <Grid>
            <Line rate={1}>
              <SubTitleBar />
              <span>{"투표 기한"}</span>
            </Line>
            <Line rate={2.5}>
              <CalendarWrap>
                <Calendar date={dueDate} setDate={setDueDate} />
                <CheckBox
                  text={"투표 기한 마감시, 프로젝트를 자동으로 마감합니다."}
                  check={isAutoCloseProject}
                  setCheck={() => setIsAutoCloseProject(!isAutoCloseProject)}
                />
              </CalendarWrap>
            </Line>
          </Grid>

          <Grid>
            <Line rate={1}>
              <SubTitleBar />
              <span>{"익명 투표 여부"}</span>
            </Line>
            <Line rate={2.5}>
              <SwitchButton checked={isAnonymous} setChecked={setIsAnonymous} />
            </Line>
          </Grid>

          <Grid>
            <Line rate={1}>
              <SubTitleBar />
              <span>{"복수 투표 여부"}</span>
            </Line>
            <Line rate={2.5}>
              <SwitchButton checked={isMultiple} setChecked={setIsMultiple} />
            </Line>
          </Grid>

          <ButtonWrap>
            <RoundButton
              text={"아이디어 선택하러 가기"}
              isFilled={true}
              onClick={createProject}
            />
          </ButtonWrap>
        </Content>
      </Container>
    </StyledModal>
  );
}

export default CreateVoteIdeaModal;
