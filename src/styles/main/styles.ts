import MuiSearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

export const Container = styled("div")`
  height: 100vh;
  display: flex;
  background-color: #f5f5f5;
  overflow: hidden;
`;

export const Content = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px;
`;

export const StyledTabs = styled(Tabs)`
  &.MuiTabs-root {
    height: 100%;
    width: 101px;
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
    height: 64px;
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
  background-position: center;
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

  &.management {
    background-image: ${(props) =>
      props.selection
        ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='35' height='32' viewBox='0 0 35 32' fill='none'%3E%3Cmask id='mask0_272_2098' style='mask-type:luminance' maskUnits='userSpaceOnUse' x='-2' y='0' width='37' height='32'%3E%3Cpath d='M16.6667 28.6667H2.5C1.83696 28.6667 1.20107 28.4033 0.732233 27.9344C0.263392 27.4656 0 26.8297 0 26.1667V4.5C0 3.83696 0.263392 3.20107 0.732233 2.73223C1.20107 2.26339 1.83696 2 2.5 2H30.8333C31.4964 2 32.1323 2.26339 32.6011 2.73223C33.0699 3.20107 33.3333 3.83696 33.3333 4.5V14.5492' stroke='white' stroke-width='3.33333' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M0 4.5C0 3.83696 0.263392 3.20107 0.732233 2.73223C1.20107 2.26339 1.83696 2 2.5 2H30.8333C31.4964 2 32.1323 2.26339 32.6011 2.73223C33.0699 3.20107 33.3333 3.83696 33.3333 4.5V12H0V4.5Z' fill='white' stroke='white' stroke-width='3.33333'/%3E%3Cpath d='M3.33268 6.99984C3.33268 6.07936 4.07887 5.33317 4.99935 5.33317C5.91982 5.33317 6.66602 6.07936 6.66602 6.99984C6.66602 7.92031 5.91982 8.6665 4.99935 8.6665C4.07887 8.6665 3.33268 7.92031 3.33268 6.99984Z' fill='black'/%3E%3Cpath d='M8.33268 6.99984C8.33268 6.07936 9.07887 5.33317 9.99935 5.33317C10.9198 5.33317 11.666 6.07936 11.666 6.99984C11.666 7.92031 10.9198 8.6665 9.99935 8.6665C9.07887 8.6665 8.33268 7.92031 8.33268 6.99984Z' fill='black'/%3E%3Cpath d='M27.5 26.1667C28.8807 26.1667 30 25.0475 30 23.6667C30 22.286 28.8807 21.1667 27.5 21.1667C26.1193 21.1667 25 22.286 25 23.6667C25 25.0475 26.1193 26.1667 27.5 26.1667Z' stroke='white' stroke-width='3.33333'/%3E%3Cpath d='M27.5009 29.5002V26.1668M27.5009 21.1668V17.8335M22.4492 26.5835L25.3359 24.9168M29.6659 22.4168L32.5526 20.7502M22.4492 20.7502L25.3359 22.4168M29.6659 24.9168L32.5526 26.5835' stroke='white' stroke-width='3.33333' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/mask%3E%3Cg mask='url(%23mask0_272_2098)'%3E%3Cpath d='M0 0H40V40H0V0Z' fill='%23713EDC'/%3E%3C/g%3E%3C/svg%3E")`
        : `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='35' height='32' viewBox='0 0 35 32' fill='none'%3E%3Cmask id='mask0_272_2384' style='mask-type:luminance' maskUnits='userSpaceOnUse' x='-2' y='0' width='37' height='32'%3E%3Cpath d='M16.6667 28.6667H2.5C1.83696 28.6667 1.20107 28.4033 0.732233 27.9344C0.263392 27.4656 0 26.8297 0 26.1667V4.5C0 3.83696 0.263392 3.20107 0.732233 2.73223C1.20107 2.26339 1.83696 2 2.5 2H30.8333C31.4964 2 32.1323 2.26339 32.6011 2.73223C33.0699 3.20107 33.3333 3.83696 33.3333 4.5V14.5492' stroke='white' stroke-width='3.33333' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M0 4.5C0 3.83696 0.263392 3.20107 0.732233 2.73223C1.20107 2.26339 1.83696 2 2.5 2H30.8333C31.4964 2 32.1323 2.26339 32.6011 2.73223C33.0699 3.20107 33.3333 3.83696 33.3333 4.5V12H0V4.5Z' fill='white' stroke='white' stroke-width='3.33333'/%3E%3Cpath d='M3.33268 6.99984C3.33268 6.07936 4.07887 5.33317 4.99935 5.33317C5.91982 5.33317 6.66602 6.07936 6.66602 6.99984C6.66602 7.92031 5.91982 8.6665 4.99935 8.6665C4.07887 8.6665 3.33268 7.92031 3.33268 6.99984Z' fill='black'/%3E%3Cpath d='M8.33268 6.99984C8.33268 6.07936 9.07887 5.33317 9.99935 5.33317C10.9198 5.33317 11.666 6.07936 11.666 6.99984C11.666 7.92031 10.9198 8.6665 9.99935 8.6665C9.07887 8.6665 8.33268 7.92031 8.33268 6.99984Z' fill='black'/%3E%3Cpath d='M27.5 26.1667C28.8807 26.1667 30 25.0475 30 23.6667C30 22.286 28.8807 21.1667 27.5 21.1667C26.1193 21.1667 25 22.286 25 23.6667C25 25.0475 26.1193 26.1667 27.5 26.1667Z' stroke='white' stroke-width='3.33333'/%3E%3Cpath d='M27.5009 29.5002V26.1668M27.5009 21.1668V17.8335M22.4492 26.5835L25.3359 24.9168M29.6659 22.4168L32.5526 20.7502M22.4492 20.7502L25.3359 22.4168M29.6659 24.9168L32.5526 26.5835' stroke='white' stroke-width='3.33333' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/mask%3E%3Cg mask='url(%23mask0_272_2384)'%3E%3Cpath d='M0 0H40V40H0V0Z' fill='white'/%3E%3C/g%3E%3C/svg%3E")`};
  }
`;

export const Header = styled("div")`
  display: flex;
  justify-content: space-between;
`;

export const TitleWrap = styled("div")`
  display: flex;
  align-items: flex-end;
  span {
    padding-left: 10px;
    font-size: 24px;
    font-weight: 600;
  }
`;

export const TitleBar = styled("div")`
  width: 7px;
  height: 32px;
  background: linear-gradient(0deg, #6e72fc 0%, #ad1deb 100%);
`;

export const ProfileImg = styled("div")`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64' fill='none'%3E%3Cg clip-path='url(%23clip0_273_3027)'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M32.0006 5.33325C17.2727 5.33325 5.33398 17.2719 5.33398 31.9999C5.33398 46.7279 17.2727 58.6666 32.0006 58.6666C46.7286 58.6666 58.6673 46.7279 58.6673 31.9999C58.6673 17.2719 46.7286 5.33325 32.0006 5.33325ZM22.6673 25.3333C22.6673 24.1076 22.9087 22.8939 23.3778 21.7615C23.8468 20.6292 24.5343 19.6003 25.401 18.7336C26.2677 17.8669 27.2966 17.1794 28.4289 16.7104C29.5613 16.2413 30.775 15.9999 32.0006 15.9999C33.2263 15.9999 34.44 16.2413 35.5724 16.7104C36.7047 17.1794 37.7336 17.8669 38.6003 18.7336C39.467 19.6003 40.1545 20.6292 40.6235 21.7615C41.0926 22.8939 41.334 24.1076 41.334 25.3333C41.334 27.8086 40.3507 30.1826 38.6003 31.9329C36.85 33.6833 34.476 34.6666 32.0006 34.6666C29.5253 34.6666 27.1513 33.6833 25.401 31.9329C23.6506 30.1826 22.6673 27.8086 22.6673 25.3333ZM48.6886 45.2906C46.6925 47.8016 44.1548 49.8291 41.2651 51.2218C38.3754 52.6145 35.2084 53.3362 32.0006 53.3332C28.7929 53.3362 25.6259 52.6145 22.7362 51.2218C19.8465 49.8291 17.3088 47.8016 15.3127 45.2906C19.6353 42.1892 25.534 39.9999 32.0006 39.9999C38.4673 39.9999 44.366 42.1892 48.6886 45.2906Z' fill='%23EAEAEA'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_273_3027'%3E%3Crect width='64' height='64' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
  background-size: 53px;
  width: 53px;
  height: 53px;
`;

export const Search = styled("div")`
  width: 420px;
  height: 41px;
  display: flex;
  border-radius: 10px;
  background-color: #edeef3;
  :hover {
    background-color: #e2e3e8;
  }
`;

export const SearchIcon = styled(MuiSearchIcon)`
  color: #cccccc;
`;

export const SearchIconWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 15px;
`;

export const SearchInput = styled(InputBase)`
  font-size: 18px;
  padding-left: 10px;
`;
