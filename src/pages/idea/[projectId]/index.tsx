import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import IdeaList from "@/components/Templates/Idea/IdeaList";
import JoinerList from "@/components/Templates/Idea/JoinerList";
import { Joiner } from "@/interfaces/idea";
import {
  Container,
  Content,
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

  const [tab, setTab] = useState(!code ? 0 : 3);
  const [joiners, setJoiners] = useState<Joiner[]>([]);

  useEffect(() => {
    getJoiners();
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

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <Container>
      <StyledTabs orientation="vertical" value={tab} onChange={handleTabChange}>
        <StyledTab
          icon={<TabIcon className={"idealist"} selection={tab === 0} />}
          label={"Idea List"}
        />
        <StyledTab
          icon={<TabIcon className={"analysis"} selection={tab === 1} />}
          label={"통계 및 분석"}
        />
        <StyledTab
          icon={<TabIcon className={"brainstorming"} selection={tab === 2} />}
          label={"브레인 스토밍"}
        />
        <StyledTab
          icon={<TabIcon className={"management"} selection={tab === 3} />}
          label={"참여자 리스트"}
        />
      </StyledTabs>
      <Content>
        <TabPanel value={tab} index={0}>
          <IdeaList joiners={joiners} />
        </TabPanel>
        <TabPanel value={tab} index={1}>
          Analysis
        </TabPanel>
        <TabPanel value={tab} index={2}>
          Dashboard
        </TabPanel>
        <TabPanel value={tab} index={3}>
          <JoinerList projectId={projectId} joiners={joiners} code={code} />
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
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}
