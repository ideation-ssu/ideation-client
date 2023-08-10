import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";

import newIdeaModal from "@/components/Templates/NewIdeaModal";
import NewIdeaModal from "@/components/Templates/NewIdeaModal";
import { getTokenFromLocal } from "@/utils/tokenUtils";

import LoginModal from "../../LoginModal";
import ProjectRegModal from "../../ProjectRegModal";

import { CardContainer, Container, ProcessCard, StatusTitle } from "./styles";

function List(): React.ReactElement | null {
  const router = useRouter();
  const [token, setToken] = useState("");

  // animation (drop & down)
  const [animationEnabled, setAnimationEnabled] = useState<boolean>(false);

  interface Card {
    id: string;
    title: string;
  }

  interface CardList {
    [key: string]: Card[];
  }

  interface Status {
    id: string;
    title: string;
  }

  const statuses: Status[] = [
    { id: "not_started", title: "Not Started" },
    { id: "progress", title: "In Progress" },
    { id: "done", title: "Done" },
  ];

  const initialCardList: CardList = {
    not_started: [
      { id: "1", title: "Card 1" },
      { id: "2", title: "Card 2" },
      { id: "3", title: "Card 3" },
    ],
    progress: [],
    done: [],
  };
  const [cardList, setCardList] = useState<CardList>(initialCardList);

  // login modal
  const [loginOpen, setLoginOpen] = React.useState(false);
  const loginModalOpen = () => setLoginOpen(true);
  const loginModalClose = () => setLoginOpen(false);

  useEffect(() => {
    getToken();

    const animation = requestAnimationFrame(() => setAnimationEnabled(true));
    return () => {
      cancelAnimationFrame(animation);
      setAnimationEnabled(false);
    };
  }, []);

  const getToken = async () => {
    const token = await getTokenFromLocal();
    if (token) {
      setToken(token.accessToken);
      return token.accessToken;
    }
    return null;
  };

  if (!animationEnabled) return null;

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    const sourceStatus = source.droppableId;
    const destStatus = destination.droppableId;

    const updatedCardList = { ...cardList };
    const [draggedCard] = updatedCardList[sourceStatus].splice(source.index, 1);
    updatedCardList[destStatus].splice(destination.index, 0, draggedCard);

    setCardList(updatedCardList);
  };

  return (
    <>
      <LoginModal open={loginOpen} handleClose={loginModalClose} />

      <Container container className={"container"} spacing={1}>
        <DragDropContext onDragEnd={onDragEnd}>
          <CardContainer>
            {statuses.map((status) => (
              <Droppable key={status.id} droppableId={status.id}>
                {(provided) => (
                  <ProcessCard
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    <StatusTitle className={status.id}>
                      {status.title}
                    </StatusTitle>
                    {cardList[status.id].map((card, index) => (
                      <Draggable
                        key={card.id}
                        draggableId={card.id}
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
                            {card.title}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </ProcessCard>
                )}
              </Droppable>
            ))}
          </CardContainer>
        </DragDropContext>
      </Container>
    </>
  );
}

export default List;
