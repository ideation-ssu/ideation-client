import React, { useEffect, useState } from "react";

import RoundButton from "@/components/Atoms/RoundButton";
import InviteTeamModal from "@/components/Molecules/InviteTeamModal";
import { Joiner } from "@/interfaces/idea";

import {
  ButtonWrap,
  Card,
  CardContainer,
  ColorBar,
  Content,
  CrownIcon,
  GridBox,
  Header,
  ProfileImg,
  Search,
  SearchIcon,
  SearchIconWrapper,
  SearchInput,
} from "./styles";

function JoinerList({
  projectId,
  code,
  joiners,
}: {
  projectId: number;
  code: string;
  joiners: Joiner[];
}): React.ReactElement | null {
  // invite team members
  const [open, setOpen] = React.useState<boolean>(!!code);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
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
            code={code}
            open={open}
            handleClose={handleClose}
          />
        </ButtonWrap>
      </Header>
      <GridBox>
        {joiners?.map((value, index) => {
          return (
            <CardContainer key={index}>
              {value.joinerRole === "OWNER" && <CrownIcon />}
              <Card>
                <ColorBar />
                <Content>
                  <span className={"name"}>{value.userName}</span>
                  <span className={"email"}>{value.userEmail}</span>
                </Content>
              </Card>
            </CardContainer>
          );
        })}
      </GridBox>
    </>
  );
}

export default JoinerList;
