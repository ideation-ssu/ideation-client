import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Tab from "@mui/material/Tab";
import axios from "axios";

import FlexWrap from "@/components/Atoms/FlexWrap";
import IdeaCommentPanel from "@/components/Molecules/IdeaCommmentPanel";
import { IIdea } from "@/interfaces/idea";
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
  StyledModal,
  StyledTabs,
  Title,
} from "./styles";

export enum CommentType {
  All,
  Comment,
  Feedback,
}

function IdeaDetailModal({
  open,
  handleClose,
  selectedIdeaId,
}: {
  open: boolean;
  handleClose: () => void;
  selectedIdeaId: number;
}): React.ReactElement {
  const [idea, setIdea] = useState<IIdea>();
  const [comments, setComments] = useState<Comment[]>([]);
  const [tab, setTab] = React.useState(0);

  useEffect(() => {
    getDetailIdea();
    getComments();
  }, [selectedIdeaId]);

  const handleTabChange = (event: React.SyntheticEvent, newTab: number) => {
    setTab(newTab);
  };

  const getDetailIdea = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASEURL}/idea/detail/${selectedIdeaId}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((res) => {
        setIdea(res.data.data);
      });
  };

  const getComments = () => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_BASEURL}/idea/${selectedIdeaId}/comment`,
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      )
      .then((res) => {
        setComments(res.data.data?.comments);
      });
  };

  const likeIdea = () => {
    axios
      .post(`${process.env.NEXT_PUBLIC_BASEURL}/idea/${selectedIdeaId}/like`, {
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
        {idea && (
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

            <IdeaCommentPanel
              tab={tab}
              type={CommentType.All}
              id={selectedIdeaId}
              comments={comments}
              updateComment={getComments}
            />
            <IdeaCommentPanel
              tab={tab}
              type={CommentType.Comment}
              id={selectedIdeaId}
              comments={comments.filter(
                (comment: Comment) => comment.commentType === "COMMENT"
              )}
              updateComment={getComments}
            />
            <IdeaCommentPanel
              tab={tab}
              type={CommentType.Feedback}
              id={selectedIdeaId}
              comments={comments.filter(
                (comment: Comment) => comment.commentType === "FEEDBACK"
              )}
              updateComment={getComments}
            />
          </Container>
        )}
      </ModalWrap>
    </StyledModal>
  );
}

export default IdeaDetailModal;
