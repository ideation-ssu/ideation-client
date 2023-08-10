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
import NewIdeaModal from "@/components/Templates/NewIdeaModal";
import newIdeaModal from "@/components/Templates/NewIdeaModal";
import { getTokenFromLocal } from "@/utils/tokenUtils";

import LoginModal from "../../LoginModal";
import ProjectRegModal from "../../ProjectRegModal";

interface Project {
  id: number;
  dday: number;
  name: string;
  desc: string;
}

function Workspace(): React.ReactElement {
  const router = useRouter();
  const [token, setToken] = useState("");

  const [projects, setProjects] = useState<Project[]>([]);

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

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const token = await getToken();
      if (token) {
        setToken(token.accessToken);
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BASEURL}/project`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        setProjects(res.data.data.projects);
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

  const goIdeaPage = (projectId: number) => {
    router.push(`/idea/${projectId}`);
  };

  return (
    <>
      <ProjectRegModal
        token={token}
        open={projectOpen}
        handleClose={projectModalClose}
      />
      <LoginModal open={loginOpen} handleClose={loginModalClose} />

      <StyledGrid container className={"container"} spacing={1}>
        <StyledGrid className={"add-project"} onClick={openModal}>
          <PlusIcon />
          <span>{"프로젝트 생성하기"}</span>
        </StyledGrid>

        {projects &&
          projects.map((project: Project) => (
            <StyledGrid
              key={project.id}
              onClick={() => {
                goIdeaPage(project.id);
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
          ))}
      </StyledGrid>
    </>
  );
}

export default Workspace;
