import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import { borderRadius } from "@mui/system";
import axios from "axios";

import MenuDrop from "@/components/Atoms/MenuDrop";
import RoundButton from "@/components/Atoms/RoundButton";
import InviteTeamModal from "@/components/Molecules/InviteTeamModal";
import ProfileModal from "@/components/Molecules/ProfileModal";
import { Joiner } from "@/interfaces/idea";
import { IVote } from "@/interfaces/vote";
import { useAuth } from "@/utils/auth";
import { getToken } from "@/utils/tokenUtils";

import {
  Category,
  CommentIcon,
  GridBox,
  Header,
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
} from "./styles";

function Vote({ projectId }: { projectId: number }): React.ReactElement | null {
  const [vote, setVote] = useState<IVote>();

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
        console.log(res.data);
        setVote(res.data);
      });
  };

  return (
    <>
      <Header className={"profile"}>
        <ProfileImg />
      </Header>

      <Header className={"rate"}>
        <TitleWrap>
          <TitleBar />
          <span>{"SSU IT프로젝트 아이데이션"}</span>
        </TitleWrap>
        <SliderWrap>
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
                    {result.idea.likeCount}
                  </TableData>
                  <TableData>{"연관자"}</TableData>
                  <TableData>{result.percent}</TableData>
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
