import React from "react";
import Avatar from "@mui/material/Avatar";
import axios from "axios";

import MenuDrop from "@/components/Atoms/MenuDrop";
import CloseVoteModal from "@/components/Molecules/CloseVoteModal";
import DeleteVoteModal from "@/components/Molecules/DeleteVoteModal";
import { IVoteMenuOption } from "@/components/Templates/Idea/Vote";
import {
  Category,
  ConfigIcon,
  ConfigWrap,
  GridBox,
  Header,
  IconWrap,
  MessageBox,
  Percent,
  PercentWrap,
  ProfileImg,
  Slider,
  SliderBackground,
  SliderWrap,
  Table,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
  TitleBar,
  TitleDueDateText,
  TitleWrap,
  VoteDate,
  VotedIcon,
  VoteTitle,
} from "@/components/Templates/Idea/Vote/styles";
import { IIdeaByStatus } from "@/interfaces/idea";
import { IVote } from "@/interfaces/vote";
import { getDueDate, parseIsoDate } from "@/utils/date";

import { CommentIcon } from "../../../../../../public/icons/Comment/styles.ts";
import { LikedIcon } from "../../../../../../public/icons/Liked/styles.ts";

interface PropsType {
  vote: IVote;
  getVote: () => void;
  projectId: number;
  ideas: IIdeaByStatus;
  isOwner: boolean;
}

export default function VoteDone({
  getVote,
  isOwner,
  projectId,
  ideas,
  vote,
}: PropsType) {
  // close vote modal
  const [closeVoteOpen, setCloseVoteOpen] = React.useState(false);
  const handleCloseVoteOpen = () => setCloseVoteOpen(true);
  const handleCloseVoteClose = () => setCloseVoteOpen(false);

  // delete vote modal
  const [deleteVoteOpen, setDeleteVoteOpen] = React.useState(false);
  const handleDeleteVoteOpen = () => setDeleteVoteOpen(true);
  const handleDeleteVoteClose = () => setDeleteVoteOpen(false);

  const voteDo = (ideaId: number) => {
    const data = {
      voteId: vote?.vote.voteId,
      ideaId: ideaId,
    };

    axios
      .post(`${process.env.NEXT_PUBLIC_BASEURL}/vote/do`, data)
      .then((res) => {
        getVote();
      });
  };

  const voteCalcel = (ideaId: number) => {
    const data = {
      voteId: vote?.vote.voteId,
      ideaId: ideaId,
    };

    axios
      .post(`${process.env.NEXT_PUBLIC_BASEURL}/vote/cancel`, data)
      .then((res) => {
        getVote();
      });
  };

  const menuOptions: IVoteMenuOption[] = [
    {
      label: "투표 종료하기",
      onClick: () => {
        handleCloseVoteOpen();
        getVote();
      },
    },
    {
      label: "투표 삭제하기",
      onClick: () => {
        handleDeleteVoteOpen();
      },
    },
  ];

  return (
    <>
      <CloseVoteModal
        voteId={vote.vote.voteId}
        open={closeVoteOpen}
        handleClose={handleCloseVoteClose}
      />

      <DeleteVoteModal
        voteId={vote.vote.voteId}
        voteName={vote.vote.title}
        open={deleteVoteOpen}
        handleClose={handleDeleteVoteClose}
        callback={getVote}
      />

      <Header className={"profile"}>
        <ProfileImg />
      </Header>

      <Header className={"rate"}>
        <TitleWrap>
          <TitleBar />
          <span>{vote.project.name}</span>
          <TitleDueDateText>
            D - {getDueDate(vote.project.dueDate)}
          </TitleDueDateText>
        </TitleWrap>

        <ConfigWrap>
          {isOwner && (
            <MenuDrop options={menuOptions} menuIcon={<ConfigIcon />} />
          )}

          {vote && (
            <CloseVoteModal
              voteId={vote.vote.voteId}
              open={closeVoteOpen}
              handleClose={handleCloseVoteClose}
            />
          )}
          {vote && (
            <DeleteVoteModal
              voteId={vote.vote.voteId}
              voteName={vote.vote.title}
              open={deleteVoteOpen}
              handleClose={handleDeleteVoteClose}
              callback={getVote}
            />
          )}

          <SliderWrap
            isHide={vote.vote.isAnonymous || vote.votedUsers.length <= 0}
          >
            <MessageBox className={"joiner-box"}>
              {vote.votedUsers.map((user, index) => {
                return index != vote.votedUsers.length - 1
                  ? `${user.name}, `
                  : user.name;
              })}
            </MessageBox>
            <SliderBackground>
              {vote && (
                <Slider
                  total={vote.totalJoinerCount}
                  count={vote.votedUserCount}
                />
              )}
            </SliderBackground>
            <span>{`${vote.totalJoinerCount}명 중 ${vote.votedUserCount}명이 참여했어요`}</span>
          </SliderWrap>
        </ConfigWrap>
      </Header>

      <GridBox>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader className={"assign"}>{"담당자"}</TableHeader>
              <TableHeader>{"아이디어 명"}</TableHeader>
              <TableHeader>{"카테고리"}</TableHeader>
              <TableHeader>{"반응"}</TableHeader>
              <TableHeader>{"연관자"}</TableHeader>
              <TableHeader className={"vote"}>{"투표"}</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            {vote.voteResults.map((result, index) => {
              return (
                <TableRow
                  key={index}
                  className={"body"}
                  isFill={index % 2 != 0}
                >
                  <TableData>
                    <Avatar src={result.idea.user.image} />
                  </TableData>
                  <TableData className={"title"} isTitle>
                    <VoteTitle>{result.idea.title}</VoteTitle>
                    <VoteDate>{parseIsoDate(result.idea.createdAt)}</VoteDate>
                  </TableData>
                  <TableData>
                    <Category>{result.idea.category}</Category>
                  </TableData>
                  <TableData className={"liked"}>
                    <CommentIcon />
                    {result.idea.commentCount}
                    <LikedIcon />
                    {result.idea.likeCount}
                  </TableData>
                  <TableData>
                    {result.idea.relatedUsers.map((relatedUser, index) => {
                      return <Avatar key={index} src={relatedUser.image} />;
                    })}
                  </TableData>
                  <TableData className={"vote"}>
                    <PercentWrap>
                      <MessageBox className={"count"}>
                        {`${result.count}명이 투표했어요!`}
                      </MessageBox>
                      <Percent
                        level={result.level}
                      >{`${result.percent}%`}</Percent>
                    </PercentWrap>
                    <IconWrap
                      isVoted={result.voted}
                      onClick={() =>
                        result.voted
                          ? voteCalcel(result.idea.id)
                          : voteDo(result.idea.id)
                      }
                    >
                      <VotedIcon isVoted={result.voted} />
                    </IconWrap>
                  </TableData>
                </TableRow>
              );
            })}
          </tbody>
        </Table>
      </GridBox>
    </>
  );
}
