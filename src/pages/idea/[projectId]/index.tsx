import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import IdeaList from "@/components/Templates/Idea/IdeaList";
import JoinerList from "@/components/Templates/Idea/JoinerList";
import { IIdeaByStatus, Joiner } from "@/interfaces/idea";
import {
  Container,
  Content,
  Logo,
  Panel,
  StyledTab,
  StyledTabs,
  TabIcon,
} from "@/styles/idea/styles";
import { getToken } from "@/utils/tokenUtils";

function Idea(): React.ReactElement {
  const router = useRouter();
  const { query } = router;
  const projectId: number =
    typeof query.projectId === "string" ? parseInt(query.projectId) : -1;
  const code: string = query.code as string;

  const [tab, setTab] = useState(!code ? 1 : 3);
  const [ideas, setIdeas] = useState<IIdeaByStatus>({
    NOT_STARTED: [],
    IN_PROGRESS: [],
    DONE: [],
  });
  const [joiners, setJoiners] = useState<Joiner[]>([]);

  useEffect(() => {
    getJoiners();
    getIdeas();
  }, [projectId]);

  const getJoiners = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASEURL}/project/joiner/${projectId}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((res) => {
        setJoiners(res.data.data?.joiners);
      });
  };

  const getIdeas = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASEURL}/idea/${projectId}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((res) => {
        setIdeas(res.data.data);
      });
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <Container>
      <StyledTabs orientation="vertical" value={tab} onChange={handleTabChange}>
        <Logo>{"ideation"}</Logo>
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
          <IdeaList
            joiners={joiners}
            ideas={ideas}
            setIdeas={setIdeas}
            updateIdeaList={getIdeas}
          />
        </TabPanel>
        <TabPanel value={tab} index={2}>
          통계 및 분석
        </TabPanel>
        <TabPanel value={tab} index={3}>
          브레인 스토밍
        </TabPanel>
        <TabPanel value={tab} index={4}>
          <JoinerList projectId={projectId} joiners={joiners} code={code} />
        </TabPanel>
        <TabPanel value={tab} index={5}>
          투표하기
        </TabPanel>
      </Content>
    </Container>
  );
}

export default Idea;

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
