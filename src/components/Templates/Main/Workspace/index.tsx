import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  Category,
  Content,
  DDay,
  PlusIcon,
  StyledGrid,
} from "@/components/Templates/Main/Workspace/styles";
import { getTokenFromLocal } from "@/utils/tokenUtils";

import LoginModal from "../../LoginModal";
import ProjectRegModal from "../../ProjectRegModal";

function Workspace(): React.ReactElement {
  const [token, setToken] = useState("");
  const [projects, setProjects] = useState([]);

  // project creation modal
  const [projectOpen, setProjectOpen] = React.useState(false);
  const projectModalOpen = () => setProjectOpen(true);
  const projectModalClose = () => setProjectOpen(false);

  // login modal
  const [loginOpen, setLoginOpen] = React.useState(false);
  const loginModalOpen = () => setLoginOpen(true);
  const loginModalClose = () => setLoginOpen(false);

  useEffect(() => {
    getToken();
    axios
      .get(`${process.env.NEXT_PUBLIC_BASEURL}/project`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setProjects(res.data.data.projects);
      });
  }, [projects]);

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
          projects.map((project, index) => (
            <StyledGrid key={index}>
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
