import React, { useEffect, useState } from "react";
import Tab from "@mui/material/Tab";

import Avatar from "@/components/Atoms/Avatar";
import Driver from "@/components/Atoms/Driver";
import FlexWrap from "@/components/Atoms/FlexWrap";
import IdeaCommentPanel from "@/components/Molecules/IdeaCommmentPanel";
import { _IdeaStatus, IDEA_STATUS_TYPE } from "@/enums/ideaStatus";
import { IIdea } from "@/interfaces/idea";
import { Comment } from "@/interfaces/idea";
import { useAuth } from "@/utils/auth";

import {
  Category,
  Container,
  Content,
  Date,
  EditIcon,
  HashTag,
  HashTagWrap,
  HeaderWrap,
  IdeaStatusChip,
  LikeIcon,
  LikeWrap,
  MainText,
  ModalWrap,
  Name,
  StyledModal,
  StyledTabs,
  Title,
  UserInfo,
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
  const { axios } = useAuth();

  const [idea, setIdea] = useState<IIdea>();
  const [comments, setComments] = useState<Comment[]>([]);
  const [tab, setTab] = React.useState(1);

  useEffect(() => {
    getDetailIdea();
    getComments();
  }, [selectedIdeaId]);

  const handleTabChange = (event: React.SyntheticEvent, newTab: number) => {
    setTab(newTab);
  };

  const getDetailIdea = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASEURL}/idea/detail/${selectedIdeaId}`)
      .then((res) => {
        setIdea(res.data.data);
      });
  };

  const getComments = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASEURL}/idea/${selectedIdeaId}/comment`)
      .then((res) => {
        setComments(res.data.data?.comments);
      });
  };

  const likeIdea = () => {
    axios
      .post(`${process.env.NEXT_PUBLIC_BASEURL}/idea/${selectedIdeaId}/like`)
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
              <HeaderWrap>
                <Category>{idea.category}</Category>
                <IdeaStatusChip
                  status={idea.status as IDEA_STATUS_TYPE}
                  label={_IdeaStatus[idea.status as IDEA_STATUS_TYPE]}
                />
              </HeaderWrap>
              <HeaderWrap>
                <Title>{idea.title}</Title>
                <EditIcon />
              </HeaderWrap>
            </FlexWrap>
            <Content>
              <UserInfo>
                <Avatar src={idea.user.profileImage} width={24} height={24} />
                <Name>{idea.userName}</Name>
              </UserInfo>
              <Date>{idea.createdAt}</Date>
              <Driver />
              <MainText>{idea.content}</MainText>
              <HashTagWrap>
                {idea.ideaHashtags.map((tag, index) => {
                  return (
                    <HashTag
                      key={index}
                      color={tag.color}
                      backgroundColor={tag.backgroundColor}
                    >
                      {tag.hashtag}
                    </HashTag>
                  );
                })}
              </HashTagWrap>
              <Driver />
              <LikeWrap>
                <LikeIcon isLiked={idea.isLiked} onClick={likeIdea} />
                <span className={idea.isLiked ? "isLiked" : ""}>
                  {idea.likeCount}
                </span>
              </LikeWrap>
              <Driver />
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
