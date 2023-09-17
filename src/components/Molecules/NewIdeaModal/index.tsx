import React, { useMemo, useState } from "react";
import { useRouter } from "next/router";

import ComboBox from "@/components/Atoms/ComboBox";
import Driver from "@/components/Atoms/Driver";
import HashTag from "@/components/Atoms/HashTag";
import InputBox from "@/components/Atoms/InputBox";
import MultiComboBox from "@/components/Atoms/MultiComboBox";
import RadioGroup from "@/components/Atoms/RadioGroup";
import RoundButton from "@/components/Atoms/RoundButton";
import TextArea from "@/components/Atoms/TextArea";
import { IdeaStatus } from "@/interfaces/idea";
import { Joiner } from "@/interfaces/project";
import { useAuth } from "@/utils/auth";

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
  updateIdeaList,
  joiners,
}: {
  open: boolean;
  handleClose: () => void;
  updateIdeaList?: () => void;
  joiners: Joiner[];
}): React.ReactElement {
  const { axios } = useAuth();
  const router = useRouter();
  const { query } = router;
  const projectId: number =
    typeof query.projectId === "string" ? parseInt(query.projectId) : -1;

  const categorys: string[] = ["인문", "자연", "예술", "사회", "기타"];
  const statusOptions: string[] = IdeaStatus.map((status) => status.title);

  const [title, setTitle] = useState<string>("");
  const [relatedUser, setRelatedUser] = useState<string[]>([]);
  const [category, setCategory] = useState<string>(categorys[0]);
  const [tags, setTags] = useState<string[]>([]);
  const [content, setContent] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [err, setErr] = useState("");

  const isValid = useMemo(() => {
    if (!title || !category || !content || !status) {
      return false;
    }

    return true;
  }, [title, relatedUser, category, content, status]);

  const createIdea = () => {
    if (!title) {
      setErr("아이디어 제목을 입력하세요");
      return;
    }

    const relatedIds: number[] = relatedUser.flatMap((user) => {
      const matchingJoiners = joiners.filter(
        (joiner) => joiner.userDto.name === user
      );
      return matchingJoiners.map((joiner) => joiner.userDto.id);
    });

    const ideaStatus = IdeaStatus.find((idea) => idea.title === status)?.id;

    const data = {
      title: title,
      status: ideaStatus,
      category: category,
      content: content,
      projectId: projectId,
      hashTags: tags,
      relatedUserIds: relatedIds,
    };

    axios.post(`${process.env.NEXT_PUBLIC_BASEURL}/idea`, data).then((res) => {
      if (res.data.error) setErr(res.data.error.userMessage);
      else {
        setErr("");
        handleClose();
        if (updateIdeaList) updateIdeaList();
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
                text={title}
                setText={setTitle}
                errText={err}
                autoComplete={"title"}
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
                value={relatedUser}
                setValue={setRelatedUser}
                placeholder={"연관 담당자 추가"}
                options={joiners?.map((joiner: Joiner) => joiner.userDto.name)}
                width={550}
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
            <TextArea
              placeholder={"* 내용을 입력하세요."}
              text={content}
              setText={setContent}
            />
          </Grid>

          <ButtonWrap>
            <div className={"idea-status"}>
              <ComboBox
                value={status}
                setValue={setStatus}
                placeholder={"아이디어 상태"}
                options={statusOptions}
                width={150}
              />
            </div>
            <div className={"idea-submit"}>
              <RoundButton
                text={"임시저장"}
                isFilled={false}
                onClick={createIdea}
              />
              <RoundButton
                text={"제출하기"}
                isFilled={true}
                disabled={!isValid}
                onClick={createIdea}
              />
            </div>
          </ButtonWrap>
        </Content>
      </Container>
    </StyledModal>
  );
}

export default NewIdeaModal;
