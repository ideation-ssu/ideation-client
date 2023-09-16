import React, { ReactNode, useEffect, useState } from "react";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";

import FlexWrap from "@/components/Atoms/FlexWrap";
import Brainstorming from "@/components/Templates/Idea/Brainstorming";
import IdeaList from "@/components/Templates/Idea/IdeaList";
import JoinerList from "@/components/Templates/Idea/JoinerList";
import Vote from "@/components/Templates/Idea/Vote";
import { IIdeaByStatus } from "@/interfaces/idea";
import { Joiner } from "@/interfaces/project";
import {
  Container,
  Content,
  Logo,
  LogoIcon,
  Panel,
  StyledTab,
  StyledTabContainer,
  StyledTabs,
  TabIcon,
} from "@/styles/idea/styles";
import { useAuth } from "@/utils/auth";

interface IdeaProps {
  projectId: number;
  code?: string;
}

const Idea: NextPage<IdeaProps> = (props) => {
  const { projectId, code } = props;
  const router = useRouter();

  const { user, axios } = useAuth();
  const [isOwner, setIsOwner] = useState<boolean>(false);
  const [tab, setTab] = useState(code ? 4 : 1);
  const [ideas, setIdeas] = useState<IIdeaByStatus>({
    NOT_STARTED: [],
    IN_PROGRESS: [],
    DONE: [],
  });
  const [joiners, setJoiners] = useState<Joiner[]>([]);
  const query = router.query;

  useEffect(() => {
    getJoiners();
    getIdeas();
  }, [projectId, user]);

  useEffect(() => {
    checkOwner();
  }, [joiners, user]);

  const checkOwner = () => {
    const owner = joiners?.find((joiner) => joiner.role === "OWNER");
    setIsOwner(owner != undefined && owner?.userDto.id === user?.id);
  };

  const goMain = () => {
    router.push("/main");
  };

  const getJoiners = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASEURL}/project/joiner/${projectId}`)
      .then((res) => {
        setJoiners(res.data.data?.joiners);
      });
  };

  const getIdeas = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASEURL}/idea/${projectId}`)
      .then((res) => {
        setIdeas(res.data.data);
      });
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    router.replace({
      query: {
        ...router.query,
        tab: newValue,
      },
    });
  };

  useEffect(() => {
    if (!query.tab) {
      setTab(1);
      return;
    }

    setTab(Number(query.tab));
  }, [query]);

  return (
    <Container>
      <StyledTabs orientation="vertical" value={tab} onChange={handleTabChange}>
        <Logo onClick={goMain}>
          <LogoIcon />
          {"Ideation"}
        </Logo>
        <StyledTab
          icon={<TabIcon className={"idealist"} selection={tab === 1} />}
          label={"Idea List"}
        />
        <StyledTab
          icon={<TabIcon className={"analysis"} selection={tab === 2} />}
          label={"통계 및 분석"}
        />
        <StyledTab
          icon={<TabIcon className={"brainstorming"} selection={tab === 3} />}
          label={"브레인 스토밍"}
        />
        <StyledTab
          icon={<TabIcon className={"joiner-list"} selection={tab === 4} />}
          label={"참여자 리스트"}
        />
        <StyledTab
          icon={<TabIcon className={"vote"} selection={tab === 5} />}
          label={"투표하기"}
        />
      </StyledTabs>
      <Content>
        <TabPanel value={tab} index={1}>
          <TabContainer>
            <IdeaList
              projectId={projectId}
              isOwner={isOwner}
              joiners={joiners}
              ideas={ideas}
              setIdeas={setIdeas}
              updateIdeaList={getIdeas}
            />
          </TabContainer>
        </TabPanel>
        <TabPanel value={tab} index={2}>
          통계 및 분석
        </TabPanel>
        <TabPanel value={tab} index={3}>
          <TabContainer>
            <Brainstorming projectId={projectId} joiners={joiners} />
          </TabContainer>
        </TabPanel>
        <TabPanel value={tab} index={4}>
          <TabContainer>
            <JoinerList
              projectId={projectId}
              joiners={joiners}
              code={code ? code : ""}
              isOwner={isOwner}
              getJoiners={getJoiners}
            />
          </TabContainer>
        </TabPanel>
        <TabPanel value={tab} index={5}>
          <TabContainer>
            <Vote projectId={projectId} ideas={ideas} isOwner={isOwner} />
          </TabContainer>
        </TabPanel>
      </Content>
    </Container>
  );
};

export default Idea;

export const getServerSideProps: GetServerSideProps<IdeaProps> = async (
  context
) => {
  const { query } = context;
  const projectId: number =
    typeof query.projectId === "string" ? parseInt(query.projectId) : -1;
  const code: string | undefined = query.code as string | undefined;

  const props: IdeaProps = {
    projectId,
    ...(code !== undefined && { code }),
  };

  return {
    props,
  };
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Panel
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </Panel>
  );
}

interface TabContainerProps {
  children?: ReactNode;
}

const TabContainer: React.FC<TabContainerProps> = ({ children }) => {
  return (
    <StyledTabContainer container className="container" spacing={1}>
      <FlexWrap gap={35}>{children}</FlexWrap>
    </StyledTabContainer>
  );
};
