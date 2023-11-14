import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Notification from "@/components/Atoms/Notification";
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
  Logo,
  LogoIcon,
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

function Main(): React.ReactElement {
  const router = useRouter();
  const { user, axios, isLoggedIn } = useAuth();
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
    getProjects();
  }, [axios]);

  const getProjects = () => {
    axios.get(`${process.env.NEXT_PUBLIC_BASEURL}/project`).then((res) => {
      setProjects(res.data.data?.projects);
    });
  };

  const goMain = () => {
    router.push("/main");
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
          <Logo onClick={goMain}>
            <LogoIcon />
            {"Ideation"}
          </Logo>
        </LogoWrap>
        {user && (
          <AvatarWrap>
            <Notification />
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
                placeholder="검색"
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
        <Workspace projects={projects} getProjects={getProjects} />
      </Content>
    </Container>
  );
}

export default Main;
