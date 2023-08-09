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
    width: 255px;
    background-color: #7b40f2;
  }

  .MuiTabs-flexContainer {
    padding-top: 125px;
    gap: 30px;
  }

  .MuiButtonBase-root {
    display: flex;
    flex-direction: row;
    gap: 7px;

    font-family: Pretendard, sans-serif;
    font-size: 17px;
    color: #ffffff;
  }

  .Mui-selected {
    width: 180px;
    height: 49px;
    margin: auto;
    background-color: white;
    border-radius: 8px;
    color: #713edc !important;
  }

  .MuiTabs-indicator {
    display: none;
  }
`;

export const StyledTab = styled(Tab)``;

export const TabIcon = styled("div")<{ selection: boolean }>`
  background-size: 28px;
  background-repeat: no-repeat;
  background-position: center;
  width: 28px;
  height: 28px;

  &.idealist {
    background-image: ${(props) =>
      props.selection
        ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17' height='16' viewBox='0 0 17 16' fill='none'%3E%3Cpath d='M1.24269 8.94988H6.51916C7.00284 8.94988 7.39858 8.55414 7.39858 8.07047V1.03517C7.39858 0.551497 7.00284 0.155762 6.51916 0.155762H1.24269C0.759017 0.155762 0.363281 0.551497 0.363281 1.03517V8.07047C0.363281 8.55414 0.759017 8.94988 1.24269 8.94988ZM1.24269 15.9852H6.51916C7.00284 15.9852 7.39858 15.5894 7.39858 15.1058V11.5881C7.39858 11.1044 7.00284 10.7087 6.51916 10.7087H1.24269C0.759017 10.7087 0.363281 11.1044 0.363281 11.5881V15.1058C0.363281 15.5894 0.759017 15.9852 1.24269 15.9852ZM10.0368 15.9852H15.3133C15.797 15.9852 16.1927 15.5894 16.1927 15.1058V8.07047C16.1927 7.58679 15.797 7.19106 15.3133 7.19106H10.0368C9.55313 7.19106 9.1574 7.58679 9.1574 8.07047V15.1058C9.1574 15.5894 9.55313 15.9852 10.0368 15.9852ZM9.1574 1.03517V4.55282C9.1574 5.0365 9.55313 5.43223 10.0368 5.43223H15.3133C15.797 5.43223 16.1927 5.0365 16.1927 4.55282V1.03517C16.1927 0.551497 15.797 0.155762 15.3133 0.155762H10.0368C9.55313 0.155762 9.1574 0.551497 9.1574 1.03517Z' fill='%23713EDC'/%3E%3C/svg%3E");`
        : `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17' height='16' viewBox='0 0 17 16' fill='none'%3E%3Cpath d='M1.24269 8.94988H6.51916C7.00284 8.94988 7.39858 8.55414 7.39858 8.07047V1.03517C7.39858 0.551497 7.00284 0.155762 6.51916 0.155762H1.24269C0.759017 0.155762 0.363281 0.551497 0.363281 1.03517V8.07047C0.363281 8.55414 0.759017 8.94988 1.24269 8.94988ZM1.24269 15.9852H6.51916C7.00284 15.9852 7.39858 15.5894 7.39858 15.1058V11.5881C7.39858 11.1044 7.00284 10.7087 6.51916 10.7087H1.24269C0.759017 10.7087 0.363281 11.1044 0.363281 11.5881V15.1058C0.363281 15.5894 0.759017 15.9852 1.24269 15.9852ZM10.0368 15.9852H15.3133C15.797 15.9852 16.1927 15.5894 16.1927 15.1058V8.07047C16.1927 7.58679 15.797 7.19106 15.3133 7.19106H10.0368C9.55313 7.19106 9.1574 7.58679 9.1574 8.07047V15.1058C9.1574 15.5894 9.55313 15.9852 10.0368 15.9852ZM9.1574 1.03517V4.55282C9.1574 5.0365 9.55313 5.43223 10.0368 5.43223H15.3133C15.797 5.43223 16.1927 5.0365 16.1927 4.55282V1.03517C16.1927 0.551497 15.797 0.155762 15.3133 0.155762H10.0368C9.55313 0.155762 9.1574 0.551497 9.1574 1.03517Z' fill='white'/%3E%3C/svg%3E");`};
  }

  &.analysis {
    background-image: ${(props) =>
      props.selection
        ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='35' height='35' viewBox='0 0 35 35' fill='none'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M1.25 35H35V32.5H2.5V0H0V33.75L1.25 35ZM5 28.75V8.75L6.25 7.5H11.25L12.5 8.75V28.75L11.25 30H6.25L5 28.75ZM10 27.5V10H7.5V27.5H10ZM25 3.75V28.75L26.25 30H31.25L32.5 28.75V3.75L31.25 2.5H26.25L25 3.75ZM30 5V27.5H27.5V5H30ZM15 28.75V13.75L16.25 12.5H21.25L22.5 13.75V28.75L21.25 30H16.25L15 28.75ZM20 27.5V15H17.5V27.5H20Z' fill='%237B40F2'/%3E%3C/svg%3E")`
        : `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='35' height='35' viewBox='0 0 35 35' fill='none'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M1.25 35H35V32.5H2.5V0H0V33.75L1.25 35ZM5 28.75V8.75L6.25 7.5H11.25L12.5 8.75V28.75L11.25 30H6.25L5 28.75ZM10 27.5V10H7.5V27.5H10ZM25 3.75V28.75L26.25 30H31.25L32.5 28.75V3.75L31.25 2.5H26.25L25 3.75ZM30 5V27.5H27.5V5H30ZM15 28.75V13.75L16.25 12.5H21.25L22.5 13.75V28.75L21.25 30H16.25L15 28.75ZM20 27.5V15H17.5V27.5H20Z' fill='white'/%3E%3C/svg%3E")`};
  }

  &.brainstorming {
    background-image: ${(props) =>
      props.selection
        ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='35' height='35' viewBox='0 0 35 35' fill='none'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M1.25 35H35V32.5H2.5V0H0V33.75L1.25 35ZM5 28.75V8.75L6.25 7.5H11.25L12.5 8.75V28.75L11.25 30H6.25L5 28.75ZM10 27.5V10H7.5V27.5H10ZM25 3.75V28.75L26.25 30H31.25L32.5 28.75V3.75L31.25 2.5H26.25L25 3.75ZM30 5V27.5H27.5V5H30ZM15 28.75V13.75L16.25 12.5H21.25L22.5 13.75V28.75L21.25 30H16.25L15 28.75ZM20 27.5V15H17.5V27.5H20Z' fill='%237B40F2'/%3E%3C/svg%3E")`
        : `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='31' height='35' viewBox='0 0 31 35' fill='none'%3E%3Cpath d='M17.4505 0C10.1531 0 4.26876 5.73611 3.90099 12.95L0.184549 17.8694C-0.280006 18.4722 0.184549 19.4444 0.997519 19.4444H3.90099V25.2778C3.90099 27.4361 5.62371 29.1667 7.77227 29.1667H9.70792V35H23.2574V25.8806C27.8449 23.7028 31 19.0556 31 13.6111C31 6.10556 24.9608 0 17.4505 0ZM25.3092 12.775L21.5153 13.7861L24.3027 16.6056C24.6277 16.9335 24.8102 17.3775 24.8102 17.8403C24.8102 18.3031 24.6277 18.747 24.3027 19.075C23.9762 19.4015 23.5342 19.5849 23.0735 19.5849C22.6128 19.5849 22.1709 19.4015 21.8444 19.075L19.0184 16.275L18.0312 20.0861C17.7989 21.0389 16.8311 21.5833 15.9213 21.3306C15.6991 21.2737 15.4904 21.1729 15.3074 21.0341C15.1244 20.8952 14.9707 20.7212 14.8554 20.5221C14.7401 20.323 14.6654 20.1028 14.6357 19.8743C14.606 19.6459 14.6219 19.4138 14.6825 19.1917L15.7084 15.3611L11.8952 16.3917C11.674 16.4539 11.4426 16.4709 11.2148 16.4417C10.9869 16.4125 10.7672 16.3377 10.5687 16.2216C10.3702 16.1056 10.1968 15.9507 10.0589 15.7662C9.92105 15.5816 9.82144 15.3711 9.76599 15.1472C9.51435 14.2333 10.0563 13.2611 11.0048 13.0278L14.7987 12.0361L12.0113 9.19722C11.7201 8.86312 11.5663 8.43029 11.5809 7.98646C11.5955 7.54263 11.7776 7.12099 12.0902 6.80698C12.4028 6.49298 12.8225 6.31009 13.2643 6.29538C13.7061 6.28067 14.137 6.43525 14.4696 6.72778L17.2763 9.52778L18.2828 5.71667C18.3371 5.49813 18.4338 5.29251 18.5674 5.1116C18.7009 4.93069 18.8687 4.77804 19.0612 4.66243C19.2536 4.54681 19.4668 4.47049 19.6887 4.43785C19.9105 4.40521 20.1366 4.41689 20.354 4.47222C21.3218 4.725 21.8638 5.67778 21.6315 6.63056L20.6056 10.4417L24.3995 9.41111C24.6244 9.35282 24.8587 9.33981 25.0887 9.37284C25.3187 9.40587 25.5399 9.48429 25.7396 9.60358C25.9393 9.72286 26.1136 9.88066 26.2523 10.0679C26.3911 10.2551 26.4916 10.468 26.548 10.6944C26.6031 10.9128 26.6147 11.1399 26.5822 11.3627C26.5497 11.5856 26.4738 11.7998 26.3587 11.9931C26.2436 12.1864 26.0916 12.355 25.9115 12.4892C25.7314 12.6233 25.5268 12.7205 25.3092 12.775Z' fill='white'/%3E%3C/svg%3E");`};
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
  &.profile {
    justify-content: flex-end;
  }
  &.search {
    justify-content: space-between;
  }
`;

export const ButtonWrap = styled("div")`
  display: flex;
  flex-direction: row;
  width: 261px;
  gap: 10px;
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
  font-family: Pretendard, sans-serif;
  font-size: 18px;
  padding-left: 10px;
`;
