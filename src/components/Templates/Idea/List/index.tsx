import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";

import {
  Category,
  Content,
  DDay,
  PlusIcon,
  StyledGrid,
} from "@/components/Templates/Main/Workspace/styles";
import newIdeaModal from "@/components/Templates/NewIdeaModal";
import NewIdeaModal from "@/components/Templates/NewIdeaModal";
import { ProcessCard } from "@/styles/idea/styles";
import { getTokenFromLocal } from "@/utils/tokenUtils";

import LoginModal from "../../LoginModal";
import ProjectRegModal from "../../ProjectRegModal";

function Workspace(): React.ReactElement | null {
  const router = useRouter();
  const [token, setToken] = useState("");

  interface Joiner {
    id: number;
    projectId: number;
    userId: number;
    userName: string;
    role: string;
    status: string;
    createdAt: string;
  }

  interface Project {
    dday: number;
    name: string;
    desc: string;
    joiners: Joiner[];
  }

  const [projects, setProjects] = useState<Project[]>([]);
  const [selectProject, setSelectProject] = useState<Project>();

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

  // project creation modal
  const [projectOpen, setProjectOpen] = React.useState(false);
  const projectModalOpen = () => setProjectOpen(true);
  const projectModalClose = () => {
    setProjectOpen(false);
    fetchProjects();
  };

  // login modal
  const [loginOpen, setLoginOpen] = React.useState(false);
  const loginModalOpen = () => setLoginOpen(true);
  const loginModalClose = () => setLoginOpen(false);

  // new idea modal
  const [newIdeaOpen, setNewIdeaOpen] = React.useState(false);
  const handlenewIdeaOpen = () => setNewIdeaOpen(true);
  const handlenewIdeaClose = () => setNewIdeaOpen(false);

  useEffect(() => {
    getToken();
    fetchProjects();

    const animation = requestAnimationFrame(() => setAnimationEnabled(true));
    return () => {
      cancelAnimationFrame(animation);
      setAnimationEnabled(false);
    };
  }, []);

  const fetchProjects = async () => {
    try {
      const token = await getTokenFromLocal();
      if (token) {
        setToken(token.accessToken);
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASEURL}/project`,
          {
            headers: {
              Authorization: "Bearer " + token.accessToken,
            },
          }
        );
        setProjects(response.data.data.projects);
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const getToken = async () => {
    const token = await getTokenFromLocal();
    if (token) {
      setToken(token.accessToken);
      return token.accessToken;
    }
    return null;
  };

  const openModal = async () => {
    const fetchedToken = await getToken();

    if (fetchedToken) projectModalOpen();
    else loginModalOpen();
  };

  const goIdeaPage = () => {
    router.push("/idea");
  };

  if (!animationEnabled) return null;

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    const sourceStatus = source.droppableId;
    const destStatus = destination.droppableId;
    const draggedCardId = source.index.toString();

    const updatedCardList = { ...cardList };
    const [draggedCard] = updatedCardList[sourceStatus].splice(source.index, 1);
    updatedCardList[destStatus].splice(destination.index, 0, draggedCard);

    setCardList(updatedCardList);
  };

  return (
    <>
      <LoginModal open={loginOpen} handleClose={loginModalClose} />

      <StyledGrid container className={"container"} spacing={1}>
        <NewIdeaModal
          token={token}
          open={newIdeaOpen}
          handleClose={handlenewIdeaClose}
          joiner={
            selectProject
              ? selectProject.joiners.map((info) => {
                  return info.userName;
                })
              : []
          }
        />
        <ProcessCard></ProcessCard>
        <DragDropContext onDragEnd={onDragEnd}>
          <div style={{ display: "flex" }}>
            {statuses.map((status) => (
              <Droppable key={status.id} droppableId={status.id}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    style={{
                      width: "300px",
                      padding: "16px",
                      border: "1px solid #ddd",
                      margin: "16px",
                    }}
                  >
                    <h2>{status.title}</h2>
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
                  </div>
                )}
              </Droppable>
            ))}
          </div>
        </DragDropContext>
      </StyledGrid>
    </>
  );
}

export default Workspace;
