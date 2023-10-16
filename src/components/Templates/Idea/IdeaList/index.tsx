import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import { toast } from "react-toastify";

import AvatarGroup from "@/components/Atoms/AvatarGroup";
import MenuDrop from "@/components/Atoms/MenuDrop";
import Notification from "@/components/Atoms/Notification";
import Profile from "@/components/Atoms/Profile";
import RoundButton from "@/components/Atoms/RoundButton";
import CloseProjectModal from "@/components/Molecules/CloseProjectModal";
import CreateVoteIdeaModal from "@/components/Molecules/CreateVoteIdeaModal";
import DeleteProjectModal from "@/components/Molecules/DeleteProjectModal";
import IdeaDetailModal from "@/components/Molecules/IdeaDetailModal";
import NewIdeaModal from "@/components/Molecules/NewIdeaModal";
import { IdeaStatus, IIdeaByStatus } from "@/interfaces/idea";
import { Joiner, Project } from "@/interfaces/project";
import { useAuth } from "@/utils/auth";
import { getDueDate } from "@/utils/date";

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
  IdeaContent,
  IdeaHandleIcon,
  IdeaInner,
  IdeaTitleText,
  IdeaTop,
  ProcessCard,
  ReactionWrap,
  StatusTitle,
  TitleBar,
  TitleDueDateText,
  TitleWrap,
} from "./styles";

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
  const { axios } = useAuth();
  const router = useRouter();
  const query = router.query;

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

  // new vote idea modal
  const [deleteProjectOpen, setDeleteProjectOpen] = React.useState(false);
  const handleDeleteProjectOpen = () => setDeleteProjectOpen(true);
  const handleDeleteProjectClose = () => setDeleteProjectOpen(false);

  // animation (drop & down)
  const [animationEnabled, setAnimationEnabled] = useState<boolean>(false);

  const [selectedIdeaId, setSelectedIdeaId] = useState<number>();
  const [existVote, setExistVote] = useState<boolean>(false);
  const [project, setProject] = useState<Project>();

  const getVote = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASEURL}/vote/${projectId}`)
      .then((res) => {
        setExistVote(!res.data.error);
      });
  };

  const getProject = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASEURL}/project/${projectId}`)
      .then((res) => {
        setProject(res.data.data);
      });
  };

  useEffect(() => {
    if (query.detail) {
      handleIdeaDetailOpen();
      setSelectedIdeaId(Number(query.detail));
    }

    getVote();
    getProject();

    const animation = requestAnimationFrame(() => setAnimationEnabled(true));
    return () => {
      cancelAnimationFrame(animation);
      setAnimationEnabled(false);
    };
  }, [router.query]);

  if (!animationEnabled) return null;

  const menuOptions = [
    {
      label: "아이디어 선정하기",
      onClick: () => {
        console.log(existVote);
        if (existVote)
          toast.error("이미 진행 중인 투표가 있습니다.", {
            autoClose: 2000,
          });
        else handleNewVoteIdeaOpen();
      },
    },
    {
      label: "프로젝트 마감하기",
      onClick: () => projectCloseModalOpen(),
    },
    {
      label: "프로젝트 삭제하기",
      onClick: () => handleDeleteProjectOpen(),
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
          toast.error(res.data.error.message, {
            autoClose: 2000,
          });
          return;
        }
        updatedIdeas[destStatus].splice(destination.index, 0, draggedIdea);
        setIdeas(updatedIdeas);
      });
  };

  return (
    <>
      <Header className={"profile"}>
        {project && <Notification />}
        <Profile />
      </Header>
      <Header className={"info"}>
        {project && (
          <TitleWrap>
            <TitleBar />
            <span>{project.name}</span>
            <TitleDueDateText>
              D - {getDueDate(project.dueDate)}
            </TitleDueDateText>
          </TitleWrap>
        )}
        <ButtonWrap>
          {isOwner && (
            <MenuDrop options={menuOptions} menuText={"프로젝트 관리"} />
          )}
          {/*<RoundButton*/}
          {/*  text={"아이디어 정렬"}*/}
          {/*  isFilled={false}*/}
          {/*  isMainClr={false}*/}
          {/*/>*/}
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
          <DeleteProjectModal
            projectId={projectId}
            open={deleteProjectOpen}
            handleClose={handleDeleteProjectClose}
          />
          <NewIdeaModal
            projectId={projectId}
            open={newIdeaOpen}
            handleClose={handleNewIdeaClose}
            updateIdeaList={updateIdeaList}
            joiners={joiners}
          />
          {selectedIdeaId && (
            <IdeaDetailModal
              open={ideaDetailOpen}
              handleClose={() => {
                handleIdeaDetailClose();
                updateIdeaList();
              }}
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
                              <IdeaContent>
                                <IdeaHandleIcon />
                                <IdeaInner>
                                  <IdeaTop>
                                    <IdeaTitleText>{idea.title}</IdeaTitleText>
                                    <AvatarGroup
                                      users={idea.relatedUsers}
                                      max={2}
                                      width={33}
                                      height={33}
                                    />
                                  </IdeaTop>
                                  <IdeaBottom>
                                    <HashTagWrap>
                                      {idea.ideaHashtags.map((tag, index) => {
                                        return (
                                          <HashTag
                                            key={index}
                                            color={tag.color}
                                            backgroundColor={
                                              tag.backgroundColor
                                            }
                                          >
                                            {tag.hashtag}
                                          </HashTag>
                                        );
                                      })}
                                    </HashTagWrap>
                                    <ReactionWrap>
                                      <CommentIcon />
                                      <span>{idea.commentCount}</span>
                                      <LikedIcon isLiked={idea.isLiked} />
                                      <span
                                        className={
                                          idea.isLiked ? "isLiked" : ""
                                        }
                                      >
                                        {idea.likeCount}
                                      </span>
                                    </ReactionWrap>
                                  </IdeaBottom>
                                </IdeaInner>
                              </IdeaContent>
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
