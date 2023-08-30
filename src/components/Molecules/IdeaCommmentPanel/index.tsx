import React, { useState } from "react";

import { CommentType } from "@/components/Molecules/IdeaDetailModal";
import { Comment } from "@/interfaces/idea";
import { useAuth } from "@/utils/auth";

import {
  CommentContainer,
  CommentInfo,
  CommentLabel,
  CommentWrap,
  InputButton,
  InputWrap,
  Panel,
  Reply,
  StyledInputBox,
} from "./styles";

interface TabPanelProps {
  children?: React.ReactNode;
  type: number;
  tab: number;
  id: number;
  comments: Comment[];
  updateComment: () => void;
}
function IdeaCommentPanel(props: TabPanelProps) {
  const { axios } = useAuth();

  const { children, id, tab, type, comments, updateComment, ...other } = props;
  const [comment, setComment] = useState<string>("");
  const [reply, setReply] = useState<string>("");
  const [selectCommentId, setSelectCommentId] = useState<number>(-1);

  const handleOnClick = (id: number) => {
    if (id === selectCommentId) setSelectCommentId(-1);
    else setSelectCommentId(id);
  };

  const handleOnChangeComment = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setComment(event.target.value);
  };

  const handleKeyDownComment = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      addComment();
    }
  };

  const handleOnChangeReply = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReply(event.target.value);
  };

  const handleKeyDownReply = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      addReply();
    }
  };

  interface CommentData {
    comment: string;
    commentType: string;
    parentCommentId?: number;
  }
  const addComment = () => {
    const data: CommentData = {
      comment: comment,
      commentType: type === CommentType.Comment ? "COMMENT" : "FEEDBACK ",
    };

    axios
      .post(`${process.env.NEXT_PUBLIC_BASEURL}/idea/${id}/comment`, data)
      .then((res) => {
        setComment("");
        updateComment();
      });
  };

  const addReply = () => {
    const data: CommentData = {
      comment: reply,
      commentType: type === CommentType.Comment ? "COMMENT" : "FEEDBACK ",
    };

    if (selectCommentId >= 0) {
      data.parentCommentId = selectCommentId;
    }

    axios
      .post(`${process.env.NEXT_PUBLIC_BASEURL}/idea/${id}/comment`, data)
      .then((res) => {
        setReply("");
        updateComment();
      });
  };

  return (
    <Panel role="tabpanel" hidden={tab !== type} {...other}>
      {tab === type && (
        <>
          <CommentContainer>
            {comments.map((comment: Comment, commentIndex: number) => (
              <CommentWrap key={commentIndex}>
                <CommentInfo>
                  <span className={"user-name"}>{comment.userName}</span>
                  <CommentLabel isComment={comment.commentType === "COMMENT"}>
                    {comment.commentType === "COMMENT" ? "댓글" : "피드백"}
                  </CommentLabel>
                  <span className={"created-at"}>{comment.createdAt}</span>
                </CommentInfo>
                <span
                  className={"comment"}
                  onClick={() => handleOnClick(comment.id)}
                >
                  {comment.comment}
                </span>

                {comment.replies?.map((reply, index) => (
                  <Reply key={index}>
                    <CommentInfo className={"reply"}>
                      <span className={"user-name"}>{reply.userName}</span>
                      <CommentLabel isComment={reply.commentType === "COMMENT"}>
                        {reply.commentType === "COMMENT" ? "댓글" : "피드백"}
                      </CommentLabel>
                      <span className={"created-at"}>{reply.createdAt}</span>
                    </CommentInfo>
                    <span className={"reply"}>{reply.comment}</span>
                  </Reply>
                ))}

                <InputWrap
                  className={"reply"}
                  isshow={selectCommentId === comment.id}
                >
                  <StyledInputBox
                    value={reply}
                    onChange={handleOnChangeReply}
                    onKeyDown={handleKeyDownReply}
                  />
                  <InputButton onClick={addReply}>{"답글 쓰기"}</InputButton>
                </InputWrap>
              </CommentWrap>
            ))}
          </CommentContainer>
          {type != CommentType.All && (
            <InputWrap className={"comment"} isshow={true}>
              <StyledInputBox
                value={comment}
                onChange={handleOnChangeComment}
                onKeyDown={handleKeyDownComment}
              />
              <InputButton onClick={addComment}>
                {type === CommentType.Comment ? "댓글 쓰기" : "피드백 쓰기"}
              </InputButton>
            </InputWrap>
          )}
        </>
      )}
    </Panel>
  );
}

export default IdeaCommentPanel;
