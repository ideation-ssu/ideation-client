import React, { useState } from "react";
import axios from "axios";
import dayjs, { Dayjs } from "dayjs";

import ConfirmModal from "@/components/Atoms/ConfirmModal";
import Driver from "@/components/Atoms/Driver";
import HashTag from "@/components/Atoms/HashTag";
import InputBox from "@/components/Atoms/InputBox";
import MultiComboBox from "@/components/Atoms/MultiComboBox";
import RadioGroup from "@/components/Atoms/RadioGroup";
import RoundButton from "@/components/Atoms/RoundButton";
import TextArea from "@/components/Atoms/TextArea";

import {
  AsignIcon,
  ButtonWrap,
  CategoryIcon,
  Container,
  Content,
  Grid,
  HashIcon,
  Line,
  StyledModal,
  Title,
  TitleIcon,
} from "./styles";

function NewIdeaModal({
  open,
  handleClose,
  joiner,
}: {
  open: boolean;
  handleClose: () => void;
  joiner: string[];
}): React.ReactElement {
  const categorys: string[] = ["인문", "자연", "예술", "사회", "기타"];

  const [name, setName] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [category, setCategory] = useState<string>(categorys[0]);
  const [tags, setTags] = useState<string[]>([]);
  const [dueDate, setDueDate] = useState<Dayjs>(dayjs().add(1, "day"));
  const [isPublic, setIsPublic] = useState(false);
  const [err, setErr] = useState("");

  // modal
  const [confirmModalOpen, setConfirmModalOpen] = React.useState(false);
  const handleConfirmOpen = () => setConfirmModalOpen(true);
  const handleConfirmClose = () => setConfirmModalOpen(false);

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
          handleConfirmOpen();
        }
      });
  };

  const closeAllModal = () => {
    handleConfirmClose();
    handleClose();
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
          <span>{"NEW IDEA"}</span>
        </Title>
        <Driver />
        <Content>
          <Grid>
            <Line rate={1}>
              <TitleIcon />
            </Line>
            <Line rate={11}>
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
              <AsignIcon />
            </Line>
            <Line rate={11}>
              <MultiComboBox
                placeholder={"연관 담당자 추가"}
                options={joiner}
              />
            </Line>
          </Grid>

          <Grid>
            <Line rate={1}>
              <CategoryIcon />
            </Line>
            <Line rate={11}>
              <RadioGroup
                options={categorys}
                selectedVal={category}
                setSelectedVal={setCategory}
              />
            </Line>
          </Grid>

          <Grid>
            <Line rate={1}>
              <HashIcon />
            </Line>
            <Line rate={11}>
              <HashTag tags={tags} setTags={setTags} />
            </Line>
          </Grid>

          <Grid>
            <TextArea />
          </Grid>

          <ButtonWrap>
            <RoundButton
              text={"프로젝트 생성"}
              isFilled={true}
              onClick={createProject}
            />
            <ConfirmModal open={confirmModalOpen} handleClose={closeAllModal} />
          </ButtonWrap>
        </Content>
      </Container>
    </StyledModal>
  );
}

export default NewIdeaModal;
