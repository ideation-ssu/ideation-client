import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Tab from "@mui/material/Tab";
import axios from "axios";

import ComboBox from "@/components/Atoms/ComboBox";
import Driver from "@/components/Atoms/Driver";
import FlexWrap from "@/components/Atoms/FlexWrap";
import InputBox from "@/components/Atoms/InputBox";
import MultiComboBox from "@/components/Atoms/MultiComboBox";
import RadioGroup from "@/components/Atoms/RadioGroup";
import RoundButton from "@/components/Atoms/RoundButton";
import TextArea from "@/components/Atoms/TextArea";
import { IdeaStatus, IIdea, Joiner } from "@/interfaces/idea";
import { Comment } from "@/interfaces/idea";
import { getToken } from "@/utils/tokenUtils";

import {
  Category,
  Container,
  Content,
  Date,
  HashTag,
  HashTagWrap,
  LikeIcon,
  LikeWrap,
  MainText,
  ModalWrap,
  Name,
  Panel,
  StyledModal,
  StyledTabs,
  Title,
} from "./styles";

function IdeaDetailModal({
  open,
  handleClose,
  idea,
  setIdea,
  comments,
  joiners,
}: {
  open: boolean;
  handleClose: () => void;
  idea: IIdea;
  setIdea: Dispatch<SetStateAction<IIdea | undefined>>;
  comments: Comment[] | undefined;
  joiners: Joiner[];
}): React.ReactElement {
  const router = useRouter();
  const { query } = router;
  const projectId: number =
    typeof query.projectId === "string" ? parseInt(query.projectId) : -1;

  const [tab, setTab] = React.useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newTab: number) => {
    setTab(newTab);
  };

  const likeIdea = () => {
    console.log("like");
    axios
      .post(`${process.env.NEXT_PUBLIC_BASEURL}/idea/${idea.id}/like`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((res) => {
        setIdea(res.data.data);
      });
  };

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
            <Name>{idea.userName}</Name>
            <Date>{idea.createdAt}</Date>
            <MainText>{idea.content}</MainText>
            <HashTagWrap>
              {idea.hashTags.map((tag: string, index: number) => {
                return <HashTag key={index}>{tag}</HashTag>;
              })}
            </HashTagWrap>
            <LikeWrap>
              <LikeIcon isLiked={idea.isLiked} onClick={likeIdea} />
              {idea.likeCount}
            </LikeWrap>
          </Content>

          <StyledTabs value={tab} onChange={handleTabChange}>
            <Tab label="All" />
            <Tab label="댓글" />
            <Tab label="피드백" />
          </StyledTabs>

          <CustomTabPanel value={tab} index={0} comments={comments} />
          <CustomTabPanel
            value={tab}
            index={1}
            comments={comments?.filter(
              (comment: Comment) => comment.commentType === "COMMENT"
            )}
          />
          <CustomTabPanel
            value={tab}
            index={2}
            comments={comments?.filter(
              (comment: Comment) => comment.commentType === "FEEDBACK"
            )}
          />
        </Container>
      </ModalWrap>
    </StyledModal>
  );
}

export default IdeaDetailModal;

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  comments: Comment[] | undefined;
}
function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, comments, ...other } = props;

  return (
    <Panel
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <>
          {comments}
          {children}
        </>
      )}
    </Panel>
  );
}
