import React, { useState } from "react";

import Avatar from "@/components/Atoms/Avatar";
import AvatarGroup from "@/components/Atoms/AvatarGroup";
import MenuDrop from "@/components/Atoms/MenuDrop";
import Notification from "@/components/Atoms/Notification";
import Profile from "@/components/Atoms/Profile";
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
  VoteMedalIcon,
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

export default function VoteDone({ getVote, isOwner, vote }: PropsType) {
  const [selectedIdeaId, setSelectedIdeaId] = useState<number>(-1);

  // delete vote modal
  const [deleteVoteOpen, setDeleteVoteOpen] = React.useState(false);
  const handleDeleteVoteOpen = () => setDeleteVoteOpen(true);
  const handleDeleteVoteClose = () => setDeleteVoteOpen(false);

  // idea detail modal
  const [ideaDetailOpen, setIdeaDetaileOpen] = React.useState(false);
  const handleIdeaDetailOpen = () => setIdeaDetaileOpen(true);
  const handleIdeaDetailClose = () => setIdeaDetaileOpen(false);

  const menuOptions: IVoteMenuOption[] = [
    {
      label: "투표 삭제하기",
      onClick: () => {
        handleDeleteVoteOpen();
      },
    },
  ];

  console.log(vote.votedUsers);

  return (
    <>
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
        {vote && <Notification projectId={vote.project.id} />}
        <Profile />
      </Header>

      <Header className={"rate"}>
        <TitleWrap>
          <TitleBar />
          <span>{vote.vote.title}</span>
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
              {
                vote.votedUsers.reduce<{ ids: string[]; names: string[] }>(
                  (acc, user, index) => {
                    const userId = user.id.toString();
                    if (!acc.ids.includes(userId)) {
                      acc.ids.push(userId);
                      acc.names.push(
                        index !== vote.votedUsers.length - 1
                          ? `${user.name}, `
                          : user.name
                      );
                    }
                    return acc;
                  },
                  { ids: [], names: [] }
                ).names
              }
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
                    <AvatarWrapper>
                      {result.rank <= 3 && (
                        <VoteMedalIcon
                          src={`/icons/Vote/medal-${result.rank}.svg`}
                          alt="medal"
                        />
                      )}
                      <Avatar
                        src={result.idea.user.profileImage}
                        showHoverName={true}
                        userName={result.idea.user.name}
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
                  <TableData className={"reaction"}>
                    <CommentIcon />
                    <span>{result.idea.commentCount}</span>
                    <LikedIcon isLiked={result.idea.isLiked} />
                    <span className={result.idea.isLiked ? "liked" : ""}>
                      {result.idea.likeCount}
                    </span>
                  </TableData>
                  <TableData>
                    <AvatarGroup
                      users={result.idea.relatedUsers.filter(
                        (relatedUser) => relatedUser.id != result.idea.userId
                      )}
                      max={2}
                      width={33}
                      height={33}
                      showHoverName={true}
                    />
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
