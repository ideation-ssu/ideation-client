import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import _default from "chart.js/dist/plugins/plugin.tooltip";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";

import MenuDrop from "@/components/Atoms/MenuDrop";
import RoundButton from "@/components/Atoms/RoundButton";
import CloseProjectModal from "@/components/Molecules/CloseProjectModal";
import CreateVoteIdeaModal from "@/components/Molecules/CreateVoteIdeaModal";
import IdeaDetailModal from "@/components/Molecules/IdeaDetailModal";
import NewIdeaModal from "@/components/Molecules/NewIdeaModal";
import { IdeaStatus, IIdeaByStatus } from "@/interfaces/idea";
import { Joiner } from "@/interfaces/project";
import { useAuth } from "@/utils/auth";

import { CommentIcon } from "../../../../../public/icons/Comment/styles.ts";
import { LikedIcon } from "../../../../../public/icons/Liked/styles.ts";

import {
  ButtonWrap,
  CardContainer,
  HashTag,
  HashTagWrap,
  Header,
  Idea,
  IdeaBottom,
  IdeaCreatorNameText,
  IdeaHandleIcon,
  IdeaInner,
  IdeaTitleText,
  IdeaTop,
  ProcessCard,
  ReactionWrap,
  Search,
  SearchIcon,
  SearchIconWrapper,
  SearchInput,
  StatusTitle,
} from "./styles";
import backgroundColor = _default.defaults.backgroundColor;
import { toast } from "react-toastify";

function IdeaList({
  projectId,
  isOwner,
  joiners,
  ideas,
  setIdeas,
  updateIdeaList,
}: {
  projectId: number;
  isOwner: boolean;
  joiners: Joiner[];
  ideas: IIdeaByStatus;
  setIdeas: Dispatch<SetStateAction<IIdeaByStatus>>;
  updateIdeaList: () => void;
}): React.ReactElement | null {
  const { user, axios } = useAuth();

  // project close modal
  const [closeModalOpen, setCloseModalOpen] = React.useState(false);
  const projectCloseModalOpen = () => setCloseModalOpen(true);
  const projectCloseModalClose = () => setCloseModalOpen(false);

  // new vote idea modal
  const [newVoteIdeaOpen, setNewVoteIdeaOpen] = React.useState(false);
  const handleNewVoteIdeaOpen = () => setNewVoteIdeaOpen(true);
  const handleNewVoteIdeaClose = () => setNewVoteIdeaOpen(false);

  // new idea modal
  const [newIdeaOpen, setNewIdeaOpen] = React.useState(false);
  const handleNewIdeaOpen = () => setNewIdeaOpen(true);
  const handleNewIdeaClose = () => setNewIdeaOpen(false);

  // idea detail modal
  const [ideaDetailOpen, setIdeaDetailOpen] = React.useState(false);
  const handleIdeaDetailOpen = () => setIdeaDetailOpen(true);
  const handleIdeaDetailClose = () => {
    setSelectedIdeaId(undefined);
    setIdeaDetailOpen(false);
  };

  // animation (drop & down)
  const [animationEnabled, setAnimationEnabled] = useState<boolean>(false);

  const [selectedIdeaId, setSelectedIdeaId] = useState<number>();

  useEffect(() => {
    const animation = requestAnimationFrame(() => setAnimationEnabled(true));
    return () => {
      cancelAnimationFrame(animation);
      setAnimationEnabled(false);
    };
  }, []);

  if (!animationEnabled) return null;

  const menuOptions = [
    { label: "아이디어 선정하기", onClick: () => handleNewVoteIdeaOpen() },
    {
      label: "프로젝트 마감하기",
      onClick: () => projectCloseModalOpen(),
    },
  ];

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    const sourceStatus = source.droppableId as keyof IIdeaByStatus;
    const destStatus = destination.droppableId as keyof IIdeaByStatus;
    const updatedIdeas = { ...ideas };
    const [draggedIdea] = updatedIdeas[sourceStatus].splice(source.index, 1);

    const data = {
      status: destStatus,
    };
    axios
      .put(
        `${process.env.NEXT_PUBLIC_BASEURL}/idea/${draggedIdea.id}/status`,
        data
      )
      .then((res) => {
        if (res.data.error) {
          updatedIdeas[sourceStatus].splice(source.index, 0, draggedIdea);
          setIdeas(updatedIdeas);
          toast.error(res.data.error.message);
          return;
        }
        updatedIdeas[destStatus].splice(destination.index, 0, draggedIdea);
        setIdeas(updatedIdeas);
      });
  };

  return (
    <>
      <Header className={"profile"}>
        <Avatar src={user?.profileImage} />
      </Header>
      <Header className={"search"}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <SearchInput
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <ButtonWrap>
          {isOwner && (
            <MenuDrop options={menuOptions} menuText={"프로젝트 관리"} />
          )}
          <RoundButton
            text={"아이디어 정렬"}
            isFilled={false}
            isMainClr={false}
          />
          <RoundButton
            text={"아이디어 생성하기 +"}
            isFilled={true}
            isMainClr={false}
            onClick={handleNewIdeaOpen}
          />

          <CreateVoteIdeaModal
            projectId={projectId}
            ideas={ideas}
            open={newVoteIdeaOpen}
            handleClose={handleNewVoteIdeaClose}
          />
          <CloseProjectModal
            projectId={projectId}
            open={closeModalOpen}
            handleClose={projectCloseModalClose}
          />
          <NewIdeaModal
            open={newIdeaOpen}
            handleClose={handleNewIdeaClose}
            updateIdeaList={updateIdeaList}
            joiners={joiners}
          />
          {selectedIdeaId && (
            <IdeaDetailModal
              open={ideaDetailOpen}
              handleClose={handleIdeaDetailClose}
              selectedIdeaId={selectedIdeaId}
            />
          )}
        </ButtonWrap>
      </Header>
      <DragDropContext onDragEnd={onDragEnd}>
        <CardContainer>
          {ideas &&
            IdeaStatus.map((status) => (
              <Droppable key={status.title} droppableId={status.id}>
                {(provided) => (
                  <ProcessCard
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    <StatusTitle className={status.id}>
                      {status.title}
                    </StatusTitle>
                    {ideas[status.id as keyof IIdeaByStatus].map(
                      (idea, index) => (
                        <Draggable
                          key={idea.id.toString()}
                          draggableId={idea.id.toString()}
                          index={index}
                        >
                          {(provided) => (
                            <Idea
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                              onClick={() => {
                                handleIdeaDetailOpen();
                                setSelectedIdeaId(idea.id);
                              }}
                            >
                              <IdeaInner>
                                <IdeaHandleIcon src="/icons/idea/ic_idea_handle.svg" />
                                <IdeaTop>
                                  <IdeaTitleText>{idea.title}</IdeaTitleText>
                                  <IdeaCreatorNameText label={idea.userName} />
                                </IdeaTop>
                                <IdeaBottom>
                                  <HashTagWrap>
                                    {idea.ideaHashtags.map((tag, index) => {
                                      return (
                                        <HashTag
                                          key={index}
                                          color={tag.color}
                                          backgroundColor={tag.backgroundColor}
                                        >
                                          {tag.hashtag}
                                        </HashTag>
                                      );
                                    })}
                                  </HashTagWrap>
                                  <ReactionWrap>
                                    <CommentIcon />
                                    <span>{idea.commentCount}</span>
                                    <LikedIcon />
                                    <span>{idea.likeCount}</span>
                                  </ReactionWrap>
                                </IdeaBottom>
                              </IdeaInner>
                            </Idea>
                          )}
                        </Draggable>
                      )
                    )}
                    {provided.placeholder}
                  </ProcessCard>
                )}
              </Droppable>
            ))}
        </CardContainer>
      </DragDropContext>
    </>
  );
}

export default IdeaList;
