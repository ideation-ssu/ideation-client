import React, { useState } from "react";
import { useRouter } from "next/router";

import MenuDrop from "@/components/Atoms/MenuDrop";
import DeleteProjectModal from "@/components/Molecules/DeleteProjectModal";
import { IVoteMenuOption } from "@/components/Templates/Idea/Vote";
import {
  Category,
  Content,
  ContentBody,
  ContentHeader,
  DDay,
  IdeaIcon,
  MenuIcon,
  NotiIcon,
  PersonIcon,
  ProjectInfoBox,
  ProjectInfoWrap,
  StyledGrid,
} from "@/components/Templates/Main/Workspace/styles";
import { Project } from "@/interfaces/project";

function Workspace({ projects }: { projects: Project[] }): React.ReactElement {
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
      <StyledGrid container className={"container"} spacing={1}>
        {selectProject && (
          <DeleteProjectModal
            projectId={selectProject.id}
            open={deleteProjectOpen}
            handleClose={handleDeleteProjectClose}
          />
        )}
        {projects &&
          projects.map((project: Project) => (
            <StyledGrid key={project.id}>
              <Category isDone={project.done} backgroundColor={project.color} />
              <Content>
                <ContentHeader>
                  <DDay isDone={project.done} backgroundColor={project.color}>
                    <span>
                      {project.done
                        ? "마감"
                        : project.dday < 0
                        ? `D+${project.dday * -1}`
                        : `D${project.dday * -1}`}
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
                  <span className={"title"}>{project.name}</span>
                  <span className={"desc"}>{project.desc}</span>
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
          ))}
      </StyledGrid>
    </>
  );
}

export default Workspace;
