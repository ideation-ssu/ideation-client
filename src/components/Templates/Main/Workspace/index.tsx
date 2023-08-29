import React from "react";
import { useRouter } from "next/router";

import {
  Category,
  Content,
  DDay,
  IdeaIcon,
  NotiIcon,
  PersonIcon,
  ProjectInfoBox,
  ProjectInfoWrap,
  StyledGrid,
} from "@/components/Templates/Main/Workspace/styles";
import { Project } from "@/interfaces/project";

function Workspace({ projects }: { projects: Project[] }): React.ReactElement {
  const router = useRouter();

  const goIdeaPage = (projectId: number) => {
    router.push(`/idea/${projectId}`);
  };

  return (
    <>
      <StyledGrid container className={"container"} spacing={1}>
        {projects &&
          projects.map((project: Project) => (
            <StyledGrid
              key={project.id}
              onClick={() => {
                goIdeaPage(project.id);
              }}
            >
              <Category />
              <Content>
                <DDay>
                  <span>{`D-${project.dday}`}</span>
                </DDay>
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
              </Content>
            </StyledGrid>
          ))}
      </StyledGrid>
    </>
  );
}

export default Workspace;
