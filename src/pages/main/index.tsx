import React from "react";

import Workspace from "@/components/Templates/Main/Workspace";
import {
  Container,
  StyledTab,
  StyledTabs,
  TabIcon,
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
          icon={<TabIcon className={"dashboard"} selection={value === 1} />}
        />
        <StyledTab
          icon={<TabIcon className={"analysis"} selection={value === 2} />}
        />
        <StyledTab label="Setting" />
        <StyledTab label="User" />
      </StyledTabs>
      <TabPanel value={value} index={0}>
        <Workspace />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Dashboard
      </TabPanel>
      <TabPanel value={value} index={2}>
        Analysis
      </TabPanel>
      <TabPanel value={value} index={3}>
        Setting
      </TabPanel>
      <TabPanel value={value} index={4}>
        User
      </TabPanel>
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
