import React, { useState } from "react";

import SignupForm from "../../Templates/SignUpForm";
import CreateProjectModal from "../CreateProjectModal";

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

  const openCreateProjectModal = () => {
    handleClose();
    handleProjectOpen();
  };

  return (
    <>
      <CreateProjectModal open={projectOpen} handleClose={handleProjectClose} />
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
