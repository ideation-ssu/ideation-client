import React, { useEffect, useState } from "react";

import FlexWrap from "@/components/Atoms/FlexWrap";
import RoundButton from "@/components/Atoms/RoundButton";
import InviteTeamModal from "@/components/Molecules/InviteTeamModal";
import { Joiner } from "@/interfaces/idea";

import {
  ButtonWrap,
  Container,
  Header,
  ProfileImg,
  Search,
  SearchIcon,
  SearchIconWrapper,
  SearchInput,
} from "./styles";

function JoinerList({
  projectId,
  joiners,
}: {
  projectId: number;
  joiners: Joiner[];
}): React.ReactElement | null {
  // invite team members
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container container className={"container"} spacing={1}>
      <FlexWrap gap={60}>
        <Header className={"profile"}>
          <ProfileImg />
        </Header>
        <Header className={"search"}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <SearchInput
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <ButtonWrap>
            <RoundButton
              text={"팀원 초대하기 +"}
              isFilled={true}
              isMainClr={false}
              onClick={handleOpen}
            />
            <InviteTeamModal
              projectId={projectId}
              open={open}
              handleClose={handleClose}
            />
          </ButtonWrap>
        </Header>

        {joiners?.map((value, index) => {
          return <div key={index}>{value.userName}</div>;
        })}
      </FlexWrap>
    </Container>
  );
}

export default JoinerList;
