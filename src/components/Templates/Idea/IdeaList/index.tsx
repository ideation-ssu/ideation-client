import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import axios from "axios";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";

import FlexWrap from "@/components/Atoms/FlexWrap";
import RoundButton from "@/components/Atoms/RoundButton";
import IdeaDetailModal from "@/components/Molecules/IdeaDetailModal";
import NewIdeaModal from "@/components/Molecules/NewIdeaModal";
import {
  Comment,
  IdeaStatus,
  IIdea,
  IIdeaByStatus,
  Joiner,
} from "@/interfaces/idea";
import { getToken } from "@/utils/tokenUtils";

import {
  ButtonWrap,
  CardContainer,
  Container,
  DragIcon,
  Header,
  Idea,
  ProcessCard,
  ProfileImg,
  Search,
  SearchIcon,
  SearchIconWrapper,
  SearchInput,
  StatusTitle,
} from "./styles";

function IdeaList({
  joiners,
  ideas,
  setIdeas,
  updateIdeaList,
}: {
  joiners: Joiner[];
  ideas: IIdeaByStatus;
  setIdeas: Dispatch<SetStateAction<IIdeaByStatus>>;
  updateIdeaList: () => void;
}): React.ReactElement | null {
  // new idea modal
  const [newIdeaOpen, setNewIdeaOpen] = React.useState(false);
  const handleNewIdeaOpen = () => setNewIdeaOpen(true);
  const handleNewIdeaClose = () => setNewIdeaOpen(false);

  // idea detail modal
  const [ideaDetailOpen, setIdeaDetailOpen] = React.useState(false);
  const handleIdeaDetailOpen = () => setIdeaDetailOpen(true);
  const handleIdeaDetailClose = () => setIdeaDetailOpen(false);

  // animation (drop & down)
  const [animationEnabled, setAnimationEnabled] = useState<boolean>(false);

  const [selectedIdea, setSelectedIdea] = useState<IIdea>();
  const [comments, setComments] = useState<Comment[]>();

  useEffect(() => {
    const animation = requestAnimationFrame(() => setAnimationEnabled(true));
    return () => {
      cancelAnimationFrame(animation);
      setAnimationEnabled(false);
    };
  }, []);

  if (!animationEnabled) return null;

  const getDetailIdea = (ideaId: number) => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASEURL}/idea/detail/${ideaId}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((res) => {
        setSelectedIdea(res.data.data);
      });
  };

  const getComments = (ideaId: number) => {
    axios
      .post(`${process.env.NEXT_PUBLIC_BASEURL}/idea/${ideaId}/comment`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((res) => {
        setComments(res.data.data);
        console.log(ideaId);
        console.log(res.data.data);
      });
  };

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
        data,
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      )
      .then((res) => {
        if (res.data.error) {
          updatedIdeas[sourceStatus].splice(source.index, 0, draggedIdea);
          setIdeas(updatedIdeas);
          return;
        }
        updatedIdeas[destStatus].splice(destination.index, 0, draggedIdea);
        setIdeas(updatedIdeas);
      });
  };

  return (
    <Container container className={"container"} spacing={1}>
      <FlexWrap gap={35}>
        <Header className={"profile"}>
          <ProfileImg />
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
            <NewIdeaModal
              open={newIdeaOpen}
              handleClose={handleNewIdeaClose}
              updateIdeaList={updateIdeaList}
              joiners={joiners}
            />
            {selectedIdea && (
              <IdeaDetailModal
                open={ideaDetailOpen}
                handleClose={handleIdeaDetailClose}
                idea={selectedIdea}
                setIdea={setSelectedIdea}
                comments={comments}
                joiners={joiners}
              />
            )}
          </ButtonWrap>
        </Header>
      </FlexWrap>
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
                                getDetailIdea(idea.id);
                                getComments(idea.id);
                              }}
                            >
                              <DragIcon />
                              {idea.title}
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
    </Container>
  );
}

export default IdeaList;
