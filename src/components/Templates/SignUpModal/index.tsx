import React, { useState } from "react";

import ProjectRegModal from "@/components/Templates/ProjectRegModal";
import { getTokenFromLocal } from "@/utils/tokenUtils";

import SignupForm from "../SignUpForm";

import { Container, StyledModal } from "./styles";

function SignUpModal({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}): React.ReactElement {
  const [token, setToken] = useState("");
  const [projectOpen, setProjectOpen] = React.useState(false);
  const handleProjectOpen = () => setProjectOpen(true);
  const handleProjectClose = () => setProjectOpen(false);

  const openCreateProjectModal = async () => {
    handleClose();
    getTokenFromLocal().then((token) => {
      if (token) {
        setToken(token.accessToken);
        handleProjectOpen();
      }
    });
  };

  return (
    <>
      <ProjectRegModal
        token={token}
        open={projectOpen}
        handleClose={handleProjectClose}
      />
      <StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container>
          <SignupForm handleRegisterDone={openCreateProjectModal} />
        </Container>
      </StyledModal>
    </>
  );
}

export default SignUpModal;
