import { styled } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

export const Container = styled("div")`
  height: 100dvh;
  display: flex;
  align-items: center;
`;

export const StyledTabs = styled(Tabs)`
  &.MuiTabs-root {
    height: 100%;
    width: 97px;
    background-color: #7b40f2;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
  }

  .MuiTabs-flexContainer {
    padding-top: 125px;
    gap: 30px;
  }

  .Mui-selected {
    background-color: white;
    width: 88px;
    margin-left: auto;
    padding-left: 0px;
    border-top-left-radius: 100px;
    border-bottom-left-radius: 100px;
  }

  .MuiTabs-indicator {
    display: none;
  }
`;

export const StyledTab = styled(Tab)``;

export const TabIcon = styled("div")<{ selection: boolean }>`
  background-size: 35px;
  background-repeat: no-repeat;
  width: 35px;
  height: 35px;

  &.workspace {
    background-image: ${(props) =>
      props.selection
        ? `url("data:image/svg+xml,%0A%3Csvg width='39' height='39' viewBox='0 0 39 39' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.88889 19.5H2L19.5 2L37 19.5H33.1111M5.88889 19.5V33.1111C5.88889 34.1425 6.29861 35.1317 7.02792 35.861C7.75723 36.5903 8.74638 37 9.77778 37H29.2222C30.2536 37 31.2428 36.5903 31.9721 35.861C32.7014 35.1317 33.1111 34.1425 33.1111 33.1111V19.5' stroke='%237B40F2' stroke-width='3.33333' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M6 27.9998V17.9998C6 17.1158 6.35119 16.2679 6.97631 15.6428C7.60143 15.0177 8.44928 14.6665 9.33333 14.6665H12.6667C13.5507 14.6665 14.3986 15.0177 15.0237 15.6428C15.6488 16.2679 16 17.1158 16 17.9998V27.9998' stroke='%237B40F2' stroke-width='3.33333' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");`
        : `url("data:image/svg+xml,%0A%3Csvg width='39' height='39' viewBox='0 0 39 39' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.88889 19.5H2L19.5 2L37 19.5H33.1111M5.88889 19.5V33.1111C5.88889 34.1425 6.29861 35.1317 7.02792 35.861C7.75723 36.5903 8.74638 37 9.77778 37H29.2222C30.2536 37 31.2428 36.5903 31.9721 35.861C32.7014 35.1317 33.1111 34.1425 33.1111 33.1111V19.5' stroke='white' stroke-width='3.33333' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M6 27.9998V17.9998C6 17.1158 6.35119 16.2679 6.97631 15.6428C7.60143 15.0177 8.44928 14.6665 9.33333 14.6665H12.6667C13.5507 14.6665 14.3986 15.0177 15.0237 15.6428C15.6488 16.2679 16 17.1158 16 17.9998V27.9998' stroke='white' stroke-width='3.33333' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")`};
  }

  &.dashboard {
    background-image: ${(props) =>
      props.selection
        ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='35' height='35' viewBox='0 0 35 35' fill='none'%3E%3Cpath d='M32.5 0H2.5C1.83716 0.000661846 1.20166 0.264266 0.732964 0.732964C0.264266 1.20166 0.000661846 1.83716 0 2.5V32.5C0.000661846 33.1628 0.264266 33.7983 0.732964 34.267C1.20166 34.7357 1.83716 34.9993 2.5 35H32.5C33.1627 34.999 33.798 34.7353 34.2667 34.2667C34.7353 33.798 34.999 33.1627 35 32.5V2.5C34.9993 1.83716 34.7357 1.20166 34.267 0.732964C33.7983 0.264266 33.1628 0.000661846 32.5 0ZM32.5 11.25H15V2.5H32.5V11.25ZM12.5 2.5V11.25H2.5V2.5H12.5ZM2.5 32.5V13.75H32.5L32.5025 32.5H2.5Z' fill='%237B40F2'/%3E%3C/svg%3E");`
        : `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='35' height='35' viewBox='0 0 35 35' fill='none'%3E%3Cpath d='M32.5 0H2.5C1.83716 0.000661846 1.20166 0.264266 0.732964 0.732964C0.264266 1.20166 0.000661846 1.83716 0 2.5V32.5C0.000661846 33.1628 0.264266 33.7983 0.732964 34.267C1.20166 34.7357 1.83716 34.9993 2.5 35H32.5C33.1627 34.999 33.798 34.7353 34.2667 34.2667C34.7353 33.798 34.999 33.1627 35 32.5V2.5C34.9993 1.83716 34.7357 1.20166 34.267 0.732964C33.7983 0.264266 33.1628 0.000661846 32.5 0ZM32.5 11.25H15V2.5H32.5V11.25ZM12.5 2.5V11.25H2.5V2.5H12.5ZM2.5 32.5V13.75H32.5L32.5025 32.5H2.5Z' fill='white'/%3E%3C/svg%3E");`};
  }

  &.analysis {
    background-image: ${(props) =>
      props.selection
        ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='35' height='35' viewBox='0 0 35 35' fill='none'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M1.25 35H35V32.5H2.5V0H0V33.75L1.25 35ZM5 28.75V8.75L6.25 7.5H11.25L12.5 8.75V28.75L11.25 30H6.25L5 28.75ZM10 27.5V10H7.5V27.5H10ZM25 3.75V28.75L26.25 30H31.25L32.5 28.75V3.75L31.25 2.5H26.25L25 3.75ZM30 5V27.5H27.5V5H30ZM15 28.75V13.75L16.25 12.5H21.25L22.5 13.75V28.75L21.25 30H16.25L15 28.75ZM20 27.5V15H17.5V27.5H20Z' fill='%237B40F2'/%3E%3C/svg%3E")`
        : `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='35' height='35' viewBox='0 0 35 35' fill='none'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M1.25 35H35V32.5H2.5V0H0V33.75L1.25 35ZM5 28.75V8.75L6.25 7.5H11.25L12.5 8.75V28.75L11.25 30H6.25L5 28.75ZM10 27.5V10H7.5V27.5H10ZM25 3.75V28.75L26.25 30H31.25L32.5 28.75V3.75L31.25 2.5H26.25L25 3.75ZM30 5V27.5H27.5V5H30ZM15 28.75V13.75L16.25 12.5H21.25L22.5 13.75V28.75L21.25 30H16.25L15 28.75ZM20 27.5V15H17.5V27.5H20Z' fill='white'/%3E%3C/svg%3E")`};
  }
`;
