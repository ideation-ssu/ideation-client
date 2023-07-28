import React, { useState } from "react";

import LoginForm from "@/components/Templates/LoginForm";
import ProjectRegModal from "@/components/Templates/ProjectRegModal";
import SignUpModal from "@/components/Templates/SignUpModal";
import { getTokenFromLocal } from "@/utils/tokenUtils";

import { Container, StyledModal } from "./styles";

function LoginModal({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}): React.ReactElement {
  const [token, setToken] = useState("");

  // login modal
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

  // signup modal
  const [signUpOpen, setSignUpOpen] = React.useState(false);
  const signUpModalOpen = () => {
    handleClose();
    setSignUpOpen(true);
  };
  const signUpModalClose = () => setSignUpOpen(false);

  return (
    <>
      <StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container>
          <LoginForm
            handleLoginAfter={openCreateProjectModal}
            handleSignUp={signUpModalOpen}
          />
        </Container>
      </StyledModal>

      <SignUpModal open={signUpOpen} handleClose={signUpModalClose} />
      <ProjectRegModal
        token={token}
        open={projectOpen}
        handleClose={handleProjectClose}
      />
    </>
  );
}

export default LoginModal;
