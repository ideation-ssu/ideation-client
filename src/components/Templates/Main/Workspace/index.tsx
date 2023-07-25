import React from "react";

import {
  PlusIcon,
  StyledGrid,
} from "@/components/Templates/Main/Workspace/styles";

import ProjectRegModal from "../../../Molecules/ProjectRegModal";

function Workspace(): React.ReactElement {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <ProjectRegModal open={open} handleClose={handleClose} />
      <StyledGrid container className={"container"}>
        <StyledGrid className={"add-project"} onClick={handleOpen}>
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
