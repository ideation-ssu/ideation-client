import React, { useState } from "react";

import SignUpModal from "@/components/Molecules/SignUpModal";
import LoginForm from "@/components/Templates/LoginForm";
import { useAuth } from "@/utils/auth";

import CreateProjectModal from "../CreateProjectModal";

import { Container, StyledModal } from "./styles";

function LoginModal({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}): React.ReactElement {
  const { isLoggedIn } = useAuth();

  // login modal
  const [projectOpen, setProjectOpen] = React.useState(false);
  const handleProjectOpen = () => setProjectOpen(true);
  const handleProjectClose = () => setProjectOpen(false);

  const openCreateProjectModal = async () => {
    handleClose();
    handleProjectOpen();
  };

  // signup modal
  const [signUpOpen, setSignUpOpen] = React.useState(false);
  const signUpModalOpen = () => {
    handleClose();
    if (isLoggedIn()) setSignUpOpen(true);
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
      <CreateProjectModal open={projectOpen} handleClose={handleProjectClose} />
    </>
  );
}

export default LoginModal;
