import React, { useState } from "react";
import axios from "axios";

import Avatar from "@/components/Atoms/Avatar";
import MenuDrop from "@/components/Atoms/MenuDrop";
import Profile from "@/components/Atoms/Profile";
import CloseVoteModal from "@/components/Molecules/CloseVoteModal";
import DeleteVoteModal from "@/components/Molecules/DeleteVoteModal";
import IdeaDetailModal from "@/components/Molecules/IdeaDetailModal";
import { IVoteMenuOption } from "@/components/Templates/Idea/Vote";
import {
  AvatarWrapper,
  Category,
  ConfigIcon,
  ConfigWrap,
  GridBox,
  Header,
  IconWrap,
  MessageBox,
  Percent,
  PercentWrap,
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
import { IVote } from "@/interfaces/vote";
import { getDueDate, parseIsoDate } from "@/utils/date";

import { CommentIcon } from "../../../../../../public/icons/Comment/styles.ts";
import { LikedIcon } from "../../../../../../public/icons/Liked/styles.ts";

interface PropsType {
  vote: IVote;
  getVote: () => void;
  isOwner: boolean;
}

export default function VoteInprogress({ getVote, isOwner, vote }: PropsType) {
  const [selectedIdeaId, setSelectedIdeaId] = useState<number>(-1);

  // close vote modal
  const [closeVoteOpen, setCloseVoteOpen] = React.useState(false);
  const handleCloseVoteOpen = () => setCloseVoteOpen(true);
  const handleCloseVoteClose = () => setCloseVoteOpen(false);

  // delete vote modal
  const [deleteVoteOpen, setDeleteVoteOpen] = React.useState(false);
  const handleDeleteVoteOpen = () => setDeleteVoteOpen(true);
  const handleDeleteVoteClose = () => setDeleteVoteOpen(false);

  // idea detail modal
  const [ideaDetailOpen, setIdeaDetaileOpen] = React.useState(false);
  const handleIdeaDetailOpen = () => setIdeaDetaileOpen(true);
  const handleIdeaDetailClose = () => setIdeaDetaileOpen(false);

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
        getVote={getVote}
      />

      <DeleteVoteModal
        voteId={vote.vote.voteId}
        voteName={vote.vote.title}
        open={deleteVoteOpen}
        handleClose={handleDeleteVoteClose}
        getVote={getVote}
      />

      <IdeaDetailModal
        open={ideaDetailOpen}
        handleClose={handleIdeaDetailClose}
        selectedIdeaId={selectedIdeaId}
      />

      <Header className={"profile"}>
        <Profile />
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
              getVote={getVote}
            />
          )}
          {vote && (
            <DeleteVoteModal
              voteId={vote.vote.voteId}
              voteName={vote.vote.title}
              open={deleteVoteOpen}
              handleClose={handleDeleteVoteClose}
              getVote={getVote}
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
                    <AvatarWrapper>
                      <Avatar
                        src={result.idea.user.profileImage}
                        width={40}
                        height={40}
                      />
                    </AvatarWrapper>
                  </TableData>
                  <TableData
                    className={"title"}
                    isTitle
                    onClick={() => {
                      setSelectedIdeaId(result.idea.id);
                      handleIdeaDetailOpen();
                    }}
                  >
                    <VoteTitle>{result.idea.title}</VoteTitle>
                    <VoteDate>{`${result.idea.userName} | ${parseIsoDate(
                      result.idea.createdAt
                    )}`}</VoteDate>
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
                      return (
                        <AvatarWrapper
                          key={`relateUser-${relatedUser.id}-${index}`}
                        >
                          <Avatar
                            key={index}
                            src={relatedUser.profileImage}
                            width={33}
                            height={33}
                          />
                        </AvatarWrapper>
                      );
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
