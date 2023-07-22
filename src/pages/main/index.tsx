import React from "react";

import FlexWrap from "@/components/Atoms/FlexWrap";
import Workspace from "@/components/Templates/Main/Workspace";
import {
  Container,
  Content,
  Filter,
  Header,
  ProfileImg,
  Search,
  SearchIcon,
  SearchIconWrapper,
  SearchInput,
  StyledTab,
  StyledTabs,
  TabIcon,
  TitleBar,
  TitleWrap,
} from "@/styles/main/styles";

function Main(): React.ReactElement {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container>
      <StyledTabs orientation="vertical" value={value} onChange={handleChange}>
        <StyledTab
          icon={<TabIcon className={"workspace"} selection={value === 0} />}
        />
        <StyledTab
          icon={<TabIcon className={"analysis"} selection={value === 1} />}
        />
        <StyledTab
          icon={<TabIcon className={"dashboard"} selection={value === 2} />}
        />
        <StyledTab
          icon={<TabIcon className={"management"} selection={value === 3} />}
        />
      </StyledTabs>
      <Content>
        <FlexWrap gap={60}>
          <Header>
            <TitleWrap>
              <TitleBar />
              <span>{"My Workspace"}</span>
            </TitleWrap>
            <div>
              <ProfileImg />
            </div>
          </Header>
          <Header>
            <Filter>
              <span>{"필터 기능"}</span>
            </Filter>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <SearchInput
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Header>
        </FlexWrap>
        <TabPanel value={value} index={0}>
          <Workspace />
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
