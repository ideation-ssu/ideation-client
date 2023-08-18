import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import ComboBox from "@/components/Atoms/ComboBox";
import Driver from "@/components/Atoms/Driver";
import FlexWrap from "@/components/Atoms/FlexWrap";
import HashTag from "@/components/Atoms/HashTag";
import InputBox from "@/components/Atoms/InputBox";
import MultiComboBox from "@/components/Atoms/MultiComboBox";
import RadioGroup from "@/components/Atoms/RadioGroup";
import RoundButton from "@/components/Atoms/RoundButton";
import TextArea from "@/components/Atoms/TextArea";
import { IdeaStatus, IIdea, Joiner } from "@/interfaces/idea";
import { getToken } from "@/utils/tokenUtils";

import {
  Category,
  Container,
  Content,
  Date,
  ModalWrap,
  Name,
  StyledModal,
  Title,
} from "./styles";

function IdeaDetailModal({
  open,
  handleClose,
  idea,
  joiners,
}: {
  open: boolean;
  handleClose: () => void;
  idea: IIdea;
  joiners: Joiner[];
}): React.ReactElement {
  const router = useRouter();
  const { query } = router;
  const projectId: number =
    typeof query.projectId === "string" ? parseInt(query.projectId) : -1;

  return (
    <StyledModal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalWrap>
        <Container>
          <FlexWrap gap={8}>
            <Category>{idea.category}</Category>
            <Title>{idea.title}</Title>
          </FlexWrap>
          <Content>
            <Name>{"사용자 이름이 들어갈 예정"}</Name>
            <Date>{"2023/08/17"}</Date>
            <div>{idea.title}</div>
          </Content>
        </Container>
      </ModalWrap>
    </StyledModal>
  );
}

export default IdeaDetailModal;
