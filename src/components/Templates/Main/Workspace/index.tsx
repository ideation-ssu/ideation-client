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
import { getToken, isLoggedIn } from "@/utils/tokenUtils";

import CreateProjectModal from "../../../Molecules/CreateProjectModal";
import LoginModal from "../../../Molecules/LoginModal";

interface Project {
  id: number;
  dday: number;
  name: string;
  desc: string;
}

function Workspace(): React.ReactElement {
  const router = useRouter();

  const [projects, setProjects] = useState<Project[]>([]);

  // project creation modal
  const [projectOpen, setProjectOpen] = React.useState(false);
  const projectModalOpen = () => setProjectOpen(true);
  const projectModalClose = () => {
    setProjectOpen(false);
    getProjects();
  };

  // login modal
  const [loginOpen, setLoginOpen] = React.useState(false);
  const loginModalOpen = () => setLoginOpen(true);
  const loginModalClose = () => setLoginOpen(false);

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASEURL}/project`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((res) => {
        setProjects(res.data.data?.projects);
      });
  };

  const openModal = async () => {
    if (isLoggedIn()) projectModalOpen();
    else loginModalOpen();
  };

  const goIdeaPage = (projectId: number) => {
    router.push(`/idea/${projectId}`);
  };

  return (
    <>
      <CreateProjectModal open={projectOpen} handleClose={projectModalClose} />
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
