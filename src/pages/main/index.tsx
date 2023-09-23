import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Avatar from "@/components/Atoms/Avatar";
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
  const router = useRouter();

  const [projects, setProjects] = useState<Project[]>([]);

  // project creation modal
  const [projectOpen, setProjectOpen] = React.useState(false);
  const projectModalOpen = () => setProjectOpen(true);

  // login modal
  const [loginOpen, setLoginOpen] = React.useState(false);
  const loginModalOpen = () => setLoginOpen(true);
  const loginModalClose = () => setLoginOpen(false);

  const openAddProjectModal = async () => {
    if (isLoggedIn()) projectModalOpen();
    else loginModalOpen();
  };

  const projectModalClose = () => {
    setProjectOpen(false);
    getProjects();
  };

  useEffect(() => {
    if (isLoggedIn()) {
      getProjects();
    } else {
      router.replace("/login");
    }
  }, [isLoggedIn]);

  const getProjects = () => {
    axios.get(`${process.env.NEXT_PUBLIC_BASEURL}/project`).then((res) => {
      console.log(res);
      if (res.data.error?.code === "AUTH_ACCESS_DENIED") {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        router.replace("/login");
        return;
      }
      setProjects(res.data.data?.projects);
    });
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
            <span>{"My Workspace"}</span>
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
                text={"프로젝트 생성하기"}
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
