import React, { useState } from "react";

import {
  PlusIcon,
  StyledGrid,
} from "@/components/Templates/Main/Workspace/styles";
import { getTokenFromLocal } from "@/utils/tokenUtils";

import LoginModal from "../../LoginModal";
import ProjectRegModal from "../../ProjectRegModal";

function Workspace(): React.ReactElement {
  const [token, setToken] = useState("");

  // project creation modal
  const [projectOpen, setProjectOpen] = React.useState(false);
  const projectModalOpen = () => setProjectOpen(true);
  const projectModalClose = () => setProjectOpen(false);

  // login modal
  const [loginOpen, setLoginOpen] = React.useState(false);
  const loginModalOpen = () => setLoginOpen(true);
  const loginModalClose = () => setLoginOpen(false);

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
      <StyledGrid container className={"container"}>
        <StyledGrid className={"add-project"} onClick={openModal}>
          <PlusIcon />
          <span>{"프로젝트 생성하기"}</span>
        </StyledGrid>
        {Array.from(Array(16)).map((_, index) => (
          <StyledGrid key={index}>
            <div>test</div>
          </StyledGrid>
        ))}
      </StyledGrid>
    </>
  );
}

export default Workspace;
