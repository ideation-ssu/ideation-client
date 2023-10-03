import React from "react";
import Avatar from "@mui/material/Avatar";

import MenuDrop from "@/components/Atoms/MenuDrop";
import Profile from "@/components/Atoms/Profile";
import DeleteVoteModal from "@/components/Molecules/DeleteVoteModal";
import { IVoteMenuOption } from "@/components/Templates/Idea/Vote";
import {
  AvatarWrapper,
  Category,
  ConfigIcon,
  ConfigWrap,
  GridBox,
  Header,
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
  VoteHoverText,
  VoteMedalIcon,
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
  isOwner: boolean;
}

export default function VoteDone({ getVote, isOwner, vote }: PropsType) {
  // delete vote modal
  const [deleteVoteOpen, setDeleteVoteOpen] = React.useState(false);
  const handleDeleteVoteOpen = () => setDeleteVoteOpen(true);
  const handleDeleteVoteClose = () => setDeleteVoteOpen(false);

  const menuOptions: IVoteMenuOption[] = [
    {
      label: "투표 삭제하기",
      onClick: () => {
        handleDeleteVoteOpen();
      },
    },
  ];

  return (
    <>
      <DeleteVoteModal
        voteId={vote.vote.voteId}
        voteName={vote.vote.title}
        open={deleteVoteOpen}
        handleClose={handleDeleteVoteClose}
        getVote={getVote}
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

          <DeleteVoteModal
            voteId={vote.vote.voteId}
            voteName={vote.vote.title}
            open={deleteVoteOpen}
            handleClose={handleDeleteVoteClose}
            getVote={getVote}
          />

          <SliderWrap isShow>
            <MessageBox className={"joiner-box"}>
              {vote.votedUsers.map((user, index) => {
                return index != vote.votedUsers.length - 1
                  ? `${user.name}, `
                  : user.name;
              })}
            </MessageBox>
            <SliderBackground>
              <Slider
                total={vote.totalJoinerCount}
                count={vote.votedUserCount}
              />
            </SliderBackground>
            <span>{`${vote.totalJoinerCount}명 중 ${vote.votedUserCount}명이 참여했어요`}</span>
          </SliderWrap>
        </ConfigWrap>
      </Header>

      <GridBox>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader className={"assign"}>{"순위"}</TableHeader>
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
                  rank={result.rank}
                >
                  <TableData>
                    {result.rank <= 3 && (
                      <VoteMedalIcon
                        src={`/icons/Vote/medal-${result.rank}.svg`}
                        alt="medal"
                      />
                    )}
                    <AvatarWrapper>
                      <Avatar src={result.idea.user.profileImage} />
                      <VoteHoverText>{result.idea.user.name}</VoteHoverText>
                    </AvatarWrapper>
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
                      return (
                        <AvatarWrapper
                          key={`relateUser-${relatedUser.id}-${index}`}
                        >
                          <Avatar key={index} src={relatedUser.profileImage} />
                          <VoteHoverText>{relatedUser.name}</VoteHoverText>
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
