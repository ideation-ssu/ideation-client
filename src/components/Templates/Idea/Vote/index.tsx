import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import axios from "axios";

import MenuDrop from "@/components/Atoms/MenuDrop";
import CloseVoteModal from "@/components/Molecules/CloseVoteModal";
import DeleteVoteModal from "@/components/Molecules/DeleteVoteModal";
import { IVote } from "@/interfaces/vote";
import { useAuth } from "@/utils/auth";
import { getToken } from "@/utils/tokenUtils";

import { CommentIcon } from "../../../../../public/icons/Comment/styles.ts";
import { LikedIcon } from "../../../../../public/icons/Liked/styles.ts";

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
  TitleWrap,
  VotedIcon,
} from "./styles";

function Vote({ projectId }: { projectId: number }): React.ReactElement | null {
  const { user } = useAuth();
  const [vote, setVote] = useState<IVote>();

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
      .get(`${process.env.NEXT_PUBLIC_BASEURL}/vote/${projectId}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
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
      .post(`${process.env.NEXT_PUBLIC_BASEURL}/vote/do`, data, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
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
      .post(`${process.env.NEXT_PUBLIC_BASEURL}/vote/cancel`, data, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((res) => {
        getVote();
      });
  };

  const menuOptions = [
    { label: "투표 종료하기", onClick: handleCloseVoteOpen },
    {
      label: "투표 삭제하기",
      onClick: handleDeleteVoteOpen,
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

      <Header className={"rate"}>
        <TitleWrap>
          <TitleBar />
          <span>{vote?.project.name}</span>
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

          <SliderWrap isAnonymous={vote?.vote.isAnonymous}>
            <MessageBox className={"joiner-box"}>
              {vote?.votedUsers.map((user, index) => {
                return index != vote?.votedUsers.length - 1
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
            <span>{`${vote?.totalJoinerCount}명 중 ${vote?.votedUserCount}명이 참여했어요`}</span>
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
            {vote?.voteResults.map((result, index) => {
              return (
                <TableRow
                  key={index}
                  className={"body"}
                  isFill={index % 2 != 0}
                  onClick={() =>
                    result.voted
                      ? voteCalcel(result.idea.id)
                      : voteDo(result.idea.id)
                  }
                >
                  <TableData>
                    <Avatar src={result.idea.user.image} />
                  </TableData>
                  <TableData className={"title"}>{result.idea.title}</TableData>
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
                    <IconWrap isVoted={result.voted}>
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

export default Vote;
