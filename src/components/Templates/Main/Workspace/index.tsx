import React, { useState } from "react";
import { useRouter } from "next/router";
import hexToRgba from "hex-to-rgba";

import MenuDrop from "@/components/Atoms/MenuDrop";
import DeleteProjectModal from "@/components/Molecules/DeleteProjectModal";
import {
  Category,
  Content,
  ContentBody,
  ContentHeader,
  DDay,
  EmptyMessage,
  EmptyWrap,
  IdeaIcon,
  MenuIcon,
  NotiIcon,
  PersonIcon,
  ProjectIcon,
  ProjectInfoBox,
  ProjectInfoWrap,
  StyledGrid,
} from "@/components/Templates/Main/Workspace/styles";
import { Project } from "@/interfaces/project";

function Workspace({
  projects,
  getProjects,
}: {
  projects: Project[];
  getProjects: () => void;
}): React.ReactElement {
  const router = useRouter();

  const [selectProject, setSelectProject] = useState<Project>();

  // delete project modal
  const [deleteProjectOpen, setDeleteProjectOpen] = React.useState(false);
  const handleDeleteProjectOpen = () => setDeleteProjectOpen(true);
  const handleDeleteProjectClose = () => setDeleteProjectOpen(false);

  const goIdeaPage = (projectId: number) => {
    router.push(`/idea/${projectId}`);
  };

  return (
    <>
      <StyledGrid container className="container" spacing={1}>
        {selectProject && (
          <DeleteProjectModal
            projectId={selectProject.id}
            open={deleteProjectOpen}
            handleClose={() => {
              handleDeleteProjectClose();
              getProjects();
            }}
          />
        )}
        {projects && projects.length > 0 ? (
          projects.map((project: Project) => (
            <StyledGrid key={project.id}>
              <Category isDone={project.done} backgroundColor={project.color} />
              <Content>
                <ContentHeader>
                  <DDay
                    isDone={project.done}
                    backgroundColor={hexToRgba(project.color, 0.2)}
                  >
                    <span>
                      {project.done
                        ? "마감"
                        : project.dday < 0
                        ? `D + ${project.dday * -1}`
                        : `D - ${project.dday}`}
                    </span>
                  </DDay>
                  <MenuDrop
                    options={[
                      {
                        label: "프로젝트 삭제하기",
                        onClick: () => {
                          setSelectProject(project);
                          handleDeleteProjectOpen();
                        },
                      },
                    ]}
                    menuIcon={<MenuIcon />}
                  />
                </ContentHeader>
                <ContentBody onClick={() => goIdeaPage(project.id)}>
                  <span className="title">{project.name}</span>
                  <span className="desc">{project.desc}</span>
                  <ProjectInfoWrap>
                    <ProjectInfoBox>
                      <PersonIcon />
                      {project.joiners.length}
                    </ProjectInfoBox>
                    <ProjectInfoBox>
                      <IdeaIcon />
                      {project.ideaCount}
                    </ProjectInfoBox>
                    <ProjectInfoBox>
                      <NotiIcon />
                      {"0"}
                    </ProjectInfoBox>
                  </ProjectInfoWrap>
                </ContentBody>
              </Content>
            </StyledGrid>
          ))
        ) : (
          <EmptyWrap>
            <ProjectIcon />
            <EmptyMessage>
              내 프로젝트가 없습니다. <span>{"\n프로젝트"}</span>를
              생성해보세요!
            </EmptyMessage>
          </EmptyWrap>
        )}
      </StyledGrid>
    </>
  );
}

export default Workspace;
