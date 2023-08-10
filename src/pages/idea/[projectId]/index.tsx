import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import FlexWrap from "@/components/Atoms/FlexWrap";
import RoundButton from "@/components/Atoms/RoundButton";
import IdeaList from "@/components/Templates/Idea/IdeaList";
import NewIdeaModal from "@/components/Templates/NewIdeaModal";
import {
  ButtonWrap,
  Container,
  Content,
  Header,
  ProfileImg,
  Search,
  SearchIcon,
  SearchIconWrapper,
  SearchInput,
  StyledTab,
  StyledTabs,
  TabIcon,
} from "@/styles/idea/styles";
import { getTokenFromLocal } from "@/utils/tokenUtils";

interface Joiner {
  userId: number;
  userName: string;
  userEmail: string;
  joinerStatus: string;
  joinerRole: string;
}

function Idea(): React.ReactElement {
  const router = useRouter();
  const { query } = router;
  const projectId: number =
    typeof query.projectId === "string" ? parseInt(query.projectId) : -1;

  const [token, setToken] = useState("");
  const [tab, setTab] = useState(0);
  const [joiners, setJoiners] = useState<Joiner[]>([]);

  // new idea modal
  const [newIdeaOpen, setNewIdeaOpen] = React.useState(false);
  const handlenewIdeaOpen = () => setNewIdeaOpen(true);
  const handlenewIdeaClose = () => setNewIdeaOpen(false);

  useEffect(() => {
    fetchJoiners();
  }, [projectId]);

  const getToken = async () => {
    const token = await getTokenFromLocal();
    if (token) {
      setToken(token.accessToken);
      return token.accessToken;
    }
    return null;
  };

  const fetchJoiners = async () => {
    try {
      const token = await getToken();
      if (token && projectId > -1) {
        setToken(token.accessToken);
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BASEURL}/project/joiner/${projectId}`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        setJoiners(res.data.data.joiners);
      }
    } catch (error) {
      console.error("Error fetching joiners:", error);
    }
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <Container>
      <StyledTabs orientation="vertical" value={tab} onChange={handleTabChange}>
        <StyledTab
          icon={<TabIcon className={"idealist"} selection={tab === 0} />}
          label={"Idea IdeaList"}
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
        <FlexWrap gap={60}>
          <Header className={"profile"}>
            <ProfileImg />
          </Header>
          <Header className={"search"}>
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
                text={"아이디어 정렬"}
                isFilled={false}
                isMainClr={false}
              />
              <RoundButton
                text={"아이디어 생성하기 +"}
                isFilled={true}
                isMainClr={false}
                onClick={handlenewIdeaOpen}
              />
              <NewIdeaModal
                token={token}
                open={newIdeaOpen}
                handleClose={handlenewIdeaClose}
                joiner={joiners.map((joiner: Joiner) => joiner.userName)}
              />
            </ButtonWrap>
          </Header>
        </FlexWrap>
        <TabPanel value={tab} index={0}>
          <IdeaList />
        </TabPanel>
        <TabPanel value={tab} index={1}>
          Analysis
        </TabPanel>
        <TabPanel value={tab} index={2}>
          Dashboard
        </TabPanel>
        <TabPanel value={tab} index={3}>
          Management
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
