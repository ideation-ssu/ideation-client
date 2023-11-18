import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";

import AIPanel from "@/components/Atoms/AI/AIPanel";
import CodingButton from "@/components/Atoms/AI/CodingButton";
import ComboBox from "@/components/Atoms/ComboBox";
import Driver from "@/components/Atoms/Driver";
import HashTag from "@/components/Atoms/HashTag";
import InputBox from "@/components/Atoms/InputBox";
import MultiComboBox from "@/components/Atoms/MultiComboBox";
import RadioGroup from "@/components/Atoms/RadioGroup";
import RoundButton from "@/components/Atoms/RoundButton";
import TextArea from "@/components/Atoms/TextArea";
import { IChat } from "@/interfaces/chat";
import { IdeaStatus } from "@/interfaces/idea";
import { Joiner } from "@/interfaces/project";
import { useAuth } from "@/utils/auth";

import AIButton from "../../Atoms/AI/AIButton";

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
  projectId,
  open,
  handleClose,
  updateIdeaList,
  joiners,
  defaultTitle,
}: {
  projectId: number;
  open: boolean;
  handleClose: () => void;
  updateIdeaList?: () => void;
  joiners: Joiner[];
  defaultTitle?: string;
}): React.ReactElement {
  const { user, axios } = useAuth();

  const categorys: string[] = ["ICT", "예술", "교육", "건강", "환경", "기타"];
  const statusOptions: string[] = IdeaStatus.map((status) => status.title);

  const [title, setTitle] = useState<string>(defaultTitle ? defaultTitle : "");
  const [relatedUser, setRelatedUser] = useState<
    { id: number; name: string }[]
  >([]);
  const [category, setCategory] = useState<string>(categorys[0]);
  const [tags, setTags] = useState<string[]>([]);
  const [copyText, setCopyText] = useState<string>("");
  const [content, setContent] = useState<string>(copyText);
  const [status, setStatus] = useState<string>("");
  const [err, setErr] = useState("");

  const [msgList, setMsgList] = useState<IChat[]>([]);

  const isValid = useMemo(() => {
    if (!title || !category || !content || !status) {
      return false;
    }

    return true;
  }, [title, relatedUser, category, content, status]);

  const [AIOpen, setAIOpen] = useState<boolean>(false);

  useEffect(() => {
    setContent(content + copyText);
  }, [copyText]);

  const createIdea = () => {
    if (!title) {
      setErr("아이디어 제목을 입력하세요");
      return;
    }

    const relatedIds: number[] = relatedUser.map((user) => {
      return user.id;
    });

    const ideaStatus = IdeaStatus.find((idea) => idea.title === status)?.id;

    const data = {
      title: title,
      status: ideaStatus,
      category: category,
      content: content,
      projectId: projectId,
      hashTags: tags,
      relatedUserIds: [...relatedIds, user.id],
    };

    axios.post(`${process.env.NEXT_PUBLIC_BASEURL}/idea`, data).then((res) => {
      if (res.data.error) setErr(res.data.error.userMessage);
      else {
        setErr("");
        handleClose();
        setTitle("");
        setCategory("");
        setRelatedUser([]);
        setTags([]);
        setContent("");
        setStatus("");

        if (updateIdeaList) updateIdeaList();
      }
    });
  };

  return (
    <StyledModal
      open={open}
      onClose={() => {
        handleClose();

        setTitle("");
        setCategory("");
        setRelatedUser([]);
        setTags([]);
        setContent("");
        setStatus("");
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Container>
        <Title>
          <span>{"새로운 아이디어"}</span>
        </Title>
        <Driver />
        <Content>
          <Grid>
            <Line rate={1}>
              <TitleIcon />
            </Line>
            <Line rate={11}>
              <InputBox
                placeHolder={"아이디어 명을 입력하세요."}
                text={title}
                setText={setTitle}
                errText={err}
                autoComplete={"title"}
                fontSize={15}
              />
              <CodingButton idea={title} />
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
                options={joiners
                  ?.filter(
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
              placeholder={"내용을 입력하세요."}
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

          <AIButton onClick={() => setAIOpen(!AIOpen)} />
          <AIPanel
            open={AIOpen}
            setOpen={setAIOpen}
            msgList={msgList}
            setMsgList={setMsgList}
            setCopyText={setCopyText}
          />
        </Content>
      </Container>
    </StyledModal>
  );
}

export default NewIdeaModal;
