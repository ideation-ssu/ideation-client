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
import { IdeaStatus, IIdeaByStatus, Joiner } from "@/interfaces/idea";
import { getToken } from "@/utils/tokenUtils";

import NewIdeaModal from "../../../Molecules/NewIdeaModal";

import {
  ButtonWrap,
  CardContainer,
  Container,
  Header,
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
}: {
  joiners: Joiner[];
  ideas: IIdeaByStatus;
  setIdeas: Dispatch<SetStateAction<IIdeaByStatus>>;
}): React.ReactElement | null {
  // new idea modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // animation (drop & down)
  const [animationEnabled, setAnimationEnabled] = useState<boolean>(false);

  useEffect(() => {
    const animation = requestAnimationFrame(() => setAnimationEnabled(true));
    return () => {
      cancelAnimationFrame(animation);
      setAnimationEnabled(false);
    };
  }, []);

  if (!animationEnabled) return null;

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
      <FlexWrap gap={60}>
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
              onClick={handleOpen}
            />
            <NewIdeaModal
              open={open}
              handleClose={handleClose}
              joiners={joiners}
            />
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
                            <div
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                              style={{
                                userSelect: "none",
                                padding: "8px",
                                margin: "8px",
                                backgroundColor: "white",
                                border: "1px solid #ddd",
                                borderRadius: "4px",
                                ...provided.draggableProps.style,
                              }}
                            >
                              {idea.title}
                            </div>
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
