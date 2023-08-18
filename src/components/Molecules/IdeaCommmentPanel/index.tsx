import React, { useState } from "react";
import axios from "axios";

import { CommentType } from "@/components/Molecules/IdeaDetailModal";
import { Comment } from "@/interfaces/idea";
import { getToken } from "@/utils/tokenUtils";

import {
  CommentContainer,
  CommentInfo,
  CommentLabel,
  CommentWrap,
  InputButton,
  InputWrap,
  Panel,
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
  const { children, id, tab, type, comments, updateComment, ...other } = props;
  const [text, setText] = useState<string>("");

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      addComment();
    }
  };

  const addComment = () => {
    const data = {
      comment: text,
      commentType: type === CommentType.Comment ? "COMMENT" : "FEEDBACK ",
    };

    axios
      .post(`${process.env.NEXT_PUBLIC_BASEURL}/idea/${id}/comment`, data, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((res) => {
        setText("");
        updateComment();
        console.log(res.data);
      });
  };

  return (
    <Panel
      role="tabpanel"
      hidden={tab !== type}
      id={`simple-tabpanel-${type}`}
      aria-labelledby={`simple-tab-${type}`}
      {...other}
    >
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
                <span>{comment.comment}</span>
              </CommentWrap>
            ))}
          </CommentContainer>
          {type != CommentType.All && (
            <InputWrap>
              <StyledInputBox
                value={text}
                onChange={handleOnChange}
                onKeyDown={handleKeyDown}
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
