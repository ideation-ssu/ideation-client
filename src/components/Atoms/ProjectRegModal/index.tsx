import React, { useState } from "react";

import Driver from "@/components/Atoms/Driver";
import InputBox from "@/components/Atoms/InputBox";

import {
  Container,
  Content,
  Grid,
  Line,
  StyledModal,
  SubTitleBar,
  Title,
} from "./styles";

function ProjectRegModal({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}): React.ReactElement {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <StyledModal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Container>
        <Title>
          <span>{"NEW PROJECT"}</span>
        </Title>
        <Driver />
        <Content>
          <Grid>
            <Line rate={1}>
              <SubTitleBar />
              <span>{"프로젝트 명"}</span>
            </Line>
            <Line rate={3}>
              <InputBox
                placeHolder={""}
                text={name}
                setText={setName}
                fontSize={15}
              />
            </Line>
          </Grid>

          <Grid>
            <Line rate={1}>
              <SubTitleBar />
              <span>{"프로젝트 설명"}</span>
            </Line>
            <Line rate={3}>
              <InputBox
                placeHolder={""}
                text={desc}
                setText={setDesc}
                fontSize={15}
              />
            </Line>
          </Grid>
        </Content>
      </Container>
    </StyledModal>
  );
}

export default ProjectRegModal;
