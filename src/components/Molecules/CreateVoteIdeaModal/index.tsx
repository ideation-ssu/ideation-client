import React, { useState } from "react";
import dayjs, { Dayjs } from "dayjs";

import Calendar from "@/components/Atoms/Calendar";
import CheckBox from "@/components/Atoms/CheckBox";
import ConfirmModal from "@/components/Atoms/ConfirmModal";
import Driver from "@/components/Atoms/Driver";
import FlexWrap from "@/components/Atoms/FlexWrap";
import InputBox from "@/components/Atoms/InputBox";
import RoundButton from "@/components/Atoms/RoundButton";
import SwitchButton from "@/components/Atoms/SwitchButton";
import { IIdeaByStatus } from "@/interfaces/idea";
import { useAuth } from "@/utils/auth";

import {
  ButtonWrap,
  ColumnIdea,
  ColumnWrap,
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
  projectId,
  ideas,
}: {
  open: boolean;
  handleClose: () => void;
  projectId: number;
  ideas: IIdeaByStatus;
}): React.ReactElement {
  const { axios } = useAuth();

  enum pageState {
    inputVoteInfo,
    selectIdea,
  }

  const [page, setPage] = useState<pageState>(pageState.inputVoteInfo);
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState<Dayjs>(dayjs().add(1, "day"));
  const [isAutoCloseProject, setIsAutoCloseProject] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isMultiple, setIsMultiple] = useState(false);
  const [err, setErr] = useState("");

  const [selectedIdeaIds, setSelectedIdeaIds] = useState<number[]>([]);
  const handleIdeaSelection = (ideaId: number) => {
    if (selectedIdeaIds.includes(ideaId)) {
      setSelectedIdeaIds(selectedIdeaIds.filter((id) => id !== ideaId));
    } else {
      setSelectedIdeaIds([...selectedIdeaIds, ideaId]);
    }
  };

  const handleVoteIdea = () => {
    const data = {
      title: title,
      dueDate: dueDate.format("YYYY-MM-DDTHH:mm:ss"),
      isAnonymous: isAnonymous,
      isMultiple: isMultiple,
      projectId: projectId,
      ideaIds: selectedIdeaIds,
    };
    axios.post(`${process.env.NEXT_PUBLIC_BASEURL}/vote`, data).then((res) => {
      handleClose();
    });
  };

  const renderContent = () => {
    switch (page) {
      case pageState.inputVoteInfo:
        return (
          <InputSection
            title={title}
            setTitle={setTitle}
            dueDate={dueDate}
            setDueDate={setDueDate}
            isAutoCloseProject={isAutoCloseProject}
            setIsAutoCloseProject={setIsAutoCloseProject}
            isAnonymous={isAnonymous}
            setIsAnonymous={setIsAnonymous}
            isMultiple={isMultiple}
            setIsMultiple={setIsMultiple}
            err={err}
            handleNextPage={() => setPage(pageState.selectIdea)}
          />
        );
      case pageState.selectIdea:
        return (
          <SelectIdeaSection
            ideas={ideas}
            onIdeaSelect={handleIdeaSelection}
            handleVoteIdea={handleVoteIdea}
          />
        );
      default:
        return null;
    }
  };

  return (
    <StyledModal
      open={open}
      onClose={() => {
        handleClose();
        setPage(pageState.inputVoteInfo);
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Container>
        <Title>
          <span>{"아이디어 선정하기"}</span>
        </Title>
        <Driver />
        {renderContent()}
      </Container>
    </StyledModal>
  );
}

export default CreateVoteIdeaModal;

interface InputSectionProps {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  dueDate: Dayjs;
  setDueDate: React.Dispatch<React.SetStateAction<Dayjs>>;
  isAutoCloseProject: boolean;
  setIsAutoCloseProject: React.Dispatch<React.SetStateAction<boolean>>;
  isAnonymous: boolean;
  setIsAnonymous: React.Dispatch<React.SetStateAction<boolean>>;
  isMultiple: boolean;
  setIsMultiple: React.Dispatch<React.SetStateAction<boolean>>;
  err: string;
  handleNextPage: () => void;
}

const InputSection: React.FC<InputSectionProps> = ({
  title,
  setTitle,
  dueDate,
  setDueDate,
  isAutoCloseProject,
  setIsAutoCloseProject,
  isAnonymous,
  setIsAnonymous,
  isMultiple,
  setIsMultiple,
  err,
  handleNextPage,
}) => {
  return (
    <>
      <Content>
        <Grid>
          <Line rate={1}>
            <SubTitleBar />
            <span>{"투표 제목"}</span>
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
            <span>{"투표 기한"}</span>
          </Line>
          <Line rate={2.5}>
            <FlexWrap gap={3}>
              <Calendar date={dueDate} setDate={setDueDate} />
              {/*<CheckBox*/}
              {/*  text={"투표 기한 마감시, 프로젝트를 자동으로 마감합니다."}*/}
              {/*  check={isAutoCloseProject}*/}
              {/*  setCheck={() => setIsAutoCloseProject(!isAutoCloseProject)}*/}
              {/*/>*/}
            </FlexWrap>
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
      </Content>

      <ButtonWrap>
        <RoundButton
          text={"아이디어 선택하러 가기"}
          isFilled={true}
          onClick={handleNextPage}
        />
      </ButtonWrap>
    </>
  );
};

interface SelectIdeaSectionProps {
  ideas: IIdeaByStatus;
  onIdeaSelect: (id: number) => void;
  handleVoteIdea: () => void;
}
const SelectIdeaSection: React.FC<SelectIdeaSectionProps> = ({
  ideas,
  onIdeaSelect,
  handleVoteIdea,
}) => {
  const voteIdeas = ideas.DONE.concat(ideas.IN_PROGRESS);
  const [isCheck, setIsCheck] = useState<boolean[]>(
    Array(voteIdeas.length).fill(false)
  );

  const handleCheckboxChange = (index: number, ideaId: number) => {
    const newIsCheck = [...isCheck];
    newIsCheck[index] = !newIsCheck[index];
    setIsCheck(newIsCheck);
    onIdeaSelect(ideaId);
  };

  return (
    <>
      <ColumnWrap>
        {voteIdeas.map((idea, index) => {
          return (
            <ColumnIdea key={index} filled={index % 2 != 0}>
              <Line rate={1} isAlignCenter={true}>
                <CheckBox
                  check={isCheck[index]}
                  setCheck={() => handleCheckboxChange(index, idea.id)}
                  isBig={true}
                />
              </Line>
              <Line rate={8}>
                <FlexWrap gap={2}>
                  <span className={"title"}>{idea.title}</span>
                  <Grid>
                    {idea.hashTags.map((tag, index) => {
                      return (
                        <span
                          key={index}
                          className={"hash-tag"}
                        >{`#${tag}`}</span>
                      );
                    })}
                  </Grid>
                </FlexWrap>
              </Line>
            </ColumnIdea>
          );
        })}
      </ColumnWrap>

      <ButtonWrap>
        <RoundButton
          text={`${isCheck.filter((v) => v).length}개 아이디어로 투표 시작하기`}
          isFilled={true}
          onClick={handleVoteIdea}
        />
      </ButtonWrap>
    </>
  );
};
