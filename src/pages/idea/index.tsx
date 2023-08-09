import React from "react";

import FlexWrap from "@/components/Atoms/FlexWrap";
import RoundButton from "@/components/Atoms/RoundButton";
import IdeaList from "@/components/Templates/Idea/List";
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

function Main(): React.ReactElement {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container>
      <StyledTabs orientation="vertical" value={value} onChange={handleChange}>
        <StyledTab
          icon={<TabIcon className={"idealist"} selection={value === 0} />}
          label={"Idea List"}
        />
        <StyledTab
          icon={<TabIcon className={"analysis"} selection={value === 1} />}
          label={"통계 및 분석"}
        />
        <StyledTab
          icon={<TabIcon className={"brainstorming"} selection={value === 2} />}
          label={"브레인 스토밍"}
        />
        <StyledTab
          icon={<TabIcon className={"management"} selection={value === 3} />}
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
              />
            </ButtonWrap>
          </Header>
        </FlexWrap>
        <TabPanel value={value} index={0}>
          <IdeaList />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Analysis
        </TabPanel>
        <TabPanel value={value} index={2}>
          Dashboard
        </TabPanel>
        <TabPanel value={value} index={3}>
          Management
        </TabPanel>
      </Content>
    </Container>
  );
}

export default Main;

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
