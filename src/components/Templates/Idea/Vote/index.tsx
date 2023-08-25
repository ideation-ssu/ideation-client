import React, { useEffect, useState } from "react";

import MenuDrop from "@/components/Atoms/MenuDrop";
import RoundButton from "@/components/Atoms/RoundButton";
import InviteTeamModal from "@/components/Molecules/InviteTeamModal";
import ProfileModal from "@/components/Molecules/ProfileModal";
import { Joiner } from "@/interfaces/idea";
import { useAuth } from "@/utils/auth";

import {
  ButtonWrap,
  Card,
  CardContainer,
  ColorBar,
  Content,
  CrownIcon,
  GridBox,
  Header,
  MenuIcon,
  MenuWrap,
  ProfileImg,
  Search,
  SearchIcon,
  SearchIconWrapper,
  SearchInput,
} from "./styles";

function Vote({
  projectId,
  joiners,
}: {
  projectId: number;
  joiners: Joiner[];
}): React.ReactElement | null {
  return (
    <>
      <Header className={"profile"}>
        <ProfileImg />
      </Header>
      <Header className={"search"} />
      <GridBox></GridBox>
    </>
  );
}

export default Vote;

const MenuIconReactNode: React.ReactNode = <MenuIcon />;
