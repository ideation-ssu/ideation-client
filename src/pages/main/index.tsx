import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Profile from "@/components/Atoms/Profile";
import RoundButton from "@/components/Atoms/RoundButton";
import CreateProjectModal from "@/components/Molecules/CreateProjectModal";
import LoginModal from "@/components/Molecules/LoginModal";
import Workspace from "@/components/Templates/Main/Workspace";
import { Project } from "@/interfaces/project";
import {
  AvatarWrap,
  ButtonWrap,
  Container,
  Content,
  Header,
  LogoWrap,
  RightHeaderWrap,
  Search,
  SearchIcon,
  SearchIconWrapper,
  SearchInput,
  TitleBar,
  TitleWrap,
} from "@/styles/main/styles";
import { useAuth } from "@/utils/auth";

import { LogoIcon } from "../../../public/icons/Logo/styles.ts";

function Main(): React.ReactElement {
  const { user, axios, isLoggedIn } = useAuth();
  const [projects, setProjects] = useState<Project[]>([]);

  // project creation modal
  const [projectOpen, setProjectOpen] = React.useState(false);
  const projectModalOpen = () => setProjectOpen(true);

  // login modal
  const [loginOpen, setLoginOpen] = React.useState(false);
  const loginModalOpen = () => setLoginOpen(true);
  const loginModalClose = () => setLoginOpen(false);

  const [isLoading, setIsLoading] = useState(false);

  const openAddProjectModal = async () => {
    if (isLoggedIn()) projectModalOpen();
    else loginModalOpen();
  };

  const projectModalClose = () => {
    setProjectOpen(false);
    getProjects();
  };

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    if (isLoading) {
      return;
    }

    setIsLoading(true);
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_BASEURL}/project`);

      if (res.data.error?.code === "AUTH_ACCESS_DENIED") {
        throw new Error("");
      }
      setProjects(res.data.data?.projects);
    } catch (e) {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      window.location.href = "/login";
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      {projectOpen && (
        <CreateProjectModal
          open={projectOpen}
          handleClose={projectModalClose}
        />
      )}
      <LoginModal open={loginOpen} handleClose={loginModalClose} />
      <Header>
        <LogoWrap>
          <LogoIcon />
        </LogoWrap>
        {user && (
          <AvatarWrap>
            <Profile />
          </AvatarWrap>
        )}
      </Header>
      <Content>
        <Header>
          <TitleWrap>
            <TitleBar />
            <span>{"내 프로젝트"}</span>
          </TitleWrap>
          <RightHeaderWrap>
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
                isFilled={true}
                text={"프로젝트 생성하기 +"}
                isMainClr={false}
                onClick={openAddProjectModal}
              />
            </ButtonWrap>
          </RightHeaderWrap>
        </Header>
        <Workspace projects={projects} />
      </Content>
    </Container>
  );
}

export default Main;
