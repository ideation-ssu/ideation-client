import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";

import MenuDrop from "@/components/Atoms/MenuDrop";
import RoundButton from "@/components/Atoms/RoundButton";
import CloseVoteModal from "@/components/Molecules/CloseVoteModal";
import CreateVoteIdeaModal from "@/components/Molecules/CreateVoteIdeaModal";
import DeleteVoteModal from "@/components/Molecules/DeleteVoteModal";
import { IIdeaByStatus } from "@/interfaces/idea";
import { IVote } from "@/interfaces/vote";
import { useAuth } from "@/utils/auth";

import { CommentIcon } from "../../../../../public/icons/Comment/styles.ts";
import { LikedIcon } from "../../../../../public/icons/Liked/styles.ts";

import {
  Category,
  ConfigIcon,
  ConfigWrap,
  CreateVoteButtonWrap,
  EmptyMessage,
  EmptyWrap,
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
  TitleWrap,
  VotedIcon,
  VoteIcon,
} from "./styles";

function Vote({
  projectId,
  ideas,
}: {
  projectId: number;
  ideas: IIdeaByStatus;
}): React.ReactElement | null {
  const { axios } = useAuth();
  const [vote, setVote] = useState<IVote>();

  // new vote idea modal
  const [newVoteIdeaOpen, setNewVoteIdeaOpen] = React.useState(false);
  const handleNewVoteIdeaOpen = () => setNewVoteIdeaOpen(true);
  const handleNewVoteIdeaClose = () => setNewVoteIdeaOpen(false);

  // close vote modal
  const [closeVoteOpen, setCloseVoteOpen] = React.useState(false);
  const handleCloseVoteOpen = () => setCloseVoteOpen(true);
  const handleCloseVoteClose = () => setCloseVoteOpen(false);

  // delete vote modal
  const [deleteVoteOpen, setDeleteVoteOpen] = React.useState(false);
  const handleDeleteVoteOpen = () => setDeleteVoteOpen(true);
  const handleDeleteVoteClose = () => setDeleteVoteOpen(false);

  useEffect(() => {
    getVote();
  }, []);

  const getVote = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASEURL}/vote/${projectId}`)
      .then((res) => {
        setVote((prevVote) => {
          return res.data;
        });
      });
  };

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

  const menuOptions = [
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
        setVote(undefined);
      },
    },
  ];

  // console.log(
  //   vote?.project.joiners.find((joiner) => joiner.role === "OWNER")?.userId
  // );
  // console.log(vote?.project.joiners.map((joiner) => console.log(joiner.role)));

  return (
    <>
      <Header className={"profile"}>
        <ProfileImg />
      </Header>

      {vote?.vote ? (
        <Header className={"rate"}>
          <TitleWrap>
            <TitleBar />
            <span>{vote.project.name}</span>
          </TitleWrap>

          <ConfigWrap>
            <MenuDrop options={menuOptions} menuIcon={<ConfigIcon />} />

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
      ) : (
        <Header className={"add-button"}>
          <CreateVoteButtonWrap>
            <RoundButton
              isFilled={true}
              text={"아이디어 선정하기"}
              isMainClr={false}
              onClick={handleNewVoteIdeaOpen}
            />

            <CreateVoteIdeaModal
              projectId={projectId}
              ideas={ideas}
              open={newVoteIdeaOpen}
              handleClose={() => {
                handleNewVoteIdeaClose();
                getVote();
              }}
            />
          </CreateVoteButtonWrap>
        </Header>
      )}

      <GridBox>
        {vote?.vote ? (
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
                    <TableData className={"title"}>
                      {result.idea.title}
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
        ) : (
          <EmptyWrap>
            <VoteIcon />
            <EmptyMessage>{"진행 중인 투표가 없어요!"}</EmptyMessage>
          </EmptyWrap>
        )}
      </GridBox>
    </>
  );
}

export default Vote;
