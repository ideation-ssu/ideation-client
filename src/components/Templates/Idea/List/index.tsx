import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import {
  Category,
  Content,
  DDay,
  PlusIcon,
  StyledGrid,
} from "@/components/Templates/Main/Workspace/styles";
import newIdeaModal from "@/components/Templates/NewIdeaModal";
import NewIdeaModal from "@/components/Templates/NewIdeaModal";
import { getTokenFromLocal } from "@/utils/tokenUtils";

import LoginModal from "../../LoginModal";
import ProjectRegModal from "../../ProjectRegModal";

function Workspace(): React.ReactElement {
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

        {projects &&
          projects.map((project, index) => (
            <>
              <StyledGrid
                key={index}
                onClick={() => {
                  setSelectProject(project);
                  goIdeaPage();
                  // handlenewIdeaOpen();
                }}
              >
                <Category />
                <Content>
                  <DDay>
                    <span>{`D-${project.dday}`}</span>
                  </DDay>
                  <span className={"title"}>{project.name}</span>
                  <span className={"desc"}>{project.desc}</span>
                </Content>
              </StyledGrid>
            </>
          ))}
      </StyledGrid>
    </>
  );
}

export default Workspace;
