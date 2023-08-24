import MuiSearchIcon from "@mui/icons-material/Search";
import Grid from "@mui/material/Grid";
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

export const Logo = styled("div")`
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22.14px;
  color: #eaeaea;
`;

export const Panel = styled("div")`
  width: 100%;
  height: 100%;
`;

export const StyledTabs = styled(Tabs)`
  &.MuiTabs-root {
    height: 100%;
    width: 255px;
    background-color: #7b40f2;
  }

  .MuiTabs-scroller {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .MuiTabs-flexContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }

  .MuiButtonBase-root {
    width: 165px;
    height: 49px;
    min-height: 49px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 7px;

    font-family: Pretendard, sans-serif;
    font-size: 17px;
    color: #ffffff;
  }

  .Mui-selected {
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
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  &.idealist {
    width: 20px;
    height: 20px;
    background-image: ${(props) =>
      props.selection
        ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17' height='16' viewBox='0 0 17 16' fill='none'%3E%3Cpath d='M1.24269 8.94988H6.51916C7.00284 8.94988 7.39858 8.55414 7.39858 8.07047V1.03517C7.39858 0.551497 7.00284 0.155762 6.51916 0.155762H1.24269C0.759017 0.155762 0.363281 0.551497 0.363281 1.03517V8.07047C0.363281 8.55414 0.759017 8.94988 1.24269 8.94988ZM1.24269 15.9852H6.51916C7.00284 15.9852 7.39858 15.5894 7.39858 15.1058V11.5881C7.39858 11.1044 7.00284 10.7087 6.51916 10.7087H1.24269C0.759017 10.7087 0.363281 11.1044 0.363281 11.5881V15.1058C0.363281 15.5894 0.759017 15.9852 1.24269 15.9852ZM10.0368 15.9852H15.3133C15.797 15.9852 16.1927 15.5894 16.1927 15.1058V8.07047C16.1927 7.58679 15.797 7.19106 15.3133 7.19106H10.0368C9.55313 7.19106 9.1574 7.58679 9.1574 8.07047V15.1058C9.1574 15.5894 9.55313 15.9852 10.0368 15.9852ZM9.1574 1.03517V4.55282C9.1574 5.0365 9.55313 5.43223 10.0368 5.43223H15.3133C15.797 5.43223 16.1927 5.0365 16.1927 4.55282V1.03517C16.1927 0.551497 15.797 0.155762 15.3133 0.155762H10.0368C9.55313 0.155762 9.1574 0.551497 9.1574 1.03517Z' fill='%23713EDC'/%3E%3C/svg%3E");`
        : `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17' height='16' viewBox='0 0 17 16' fill='none'%3E%3Cpath d='M1.24269 8.94988H6.51916C7.00284 8.94988 7.39858 8.55414 7.39858 8.07047V1.03517C7.39858 0.551497 7.00284 0.155762 6.51916 0.155762H1.24269C0.759017 0.155762 0.363281 0.551497 0.363281 1.03517V8.07047C0.363281 8.55414 0.759017 8.94988 1.24269 8.94988ZM1.24269 15.9852H6.51916C7.00284 15.9852 7.39858 15.5894 7.39858 15.1058V11.5881C7.39858 11.1044 7.00284 10.7087 6.51916 10.7087H1.24269C0.759017 10.7087 0.363281 11.1044 0.363281 11.5881V15.1058C0.363281 15.5894 0.759017 15.9852 1.24269 15.9852ZM10.0368 15.9852H15.3133C15.797 15.9852 16.1927 15.5894 16.1927 15.1058V8.07047C16.1927 7.58679 15.797 7.19106 15.3133 7.19106H10.0368C9.55313 7.19106 9.1574 7.58679 9.1574 8.07047V15.1058C9.1574 15.5894 9.55313 15.9852 10.0368 15.9852ZM9.1574 1.03517V4.55282C9.1574 5.0365 9.55313 5.43223 10.0368 5.43223H15.3133C15.797 5.43223 16.1927 5.0365 16.1927 4.55282V1.03517C16.1927 0.551497 15.797 0.155762 15.3133 0.155762H10.0368C9.55313 0.155762 9.1574 0.551497 9.1574 1.03517Z' fill='white'/%3E%3C/svg%3E");`};
  }

  &.analysis {
    width: 23px;
    height: 23px;
    background-image: ${(props) =>
      props.selection
        ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='35' height='35' viewBox='0 0 35 35' fill='none'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M1.25 35H35V32.5H2.5V0H0V33.75L1.25 35ZM5 28.75V8.75L6.25 7.5H11.25L12.5 8.75V28.75L11.25 30H6.25L5 28.75ZM10 27.5V10H7.5V27.5H10ZM25 3.75V28.75L26.25 30H31.25L32.5 28.75V3.75L31.25 2.5H26.25L25 3.75ZM30 5V27.5H27.5V5H30ZM15 28.75V13.75L16.25 12.5H21.25L22.5 13.75V28.75L21.25 30H16.25L15 28.75ZM20 27.5V15H17.5V27.5H20Z' fill='%237B40F2'/%3E%3C/svg%3E")`
        : `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='35' height='35' viewBox='0 0 35 35' fill='none'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M1.25 35H35V32.5H2.5V0H0V33.75L1.25 35ZM5 28.75V8.75L6.25 7.5H11.25L12.5 8.75V28.75L11.25 30H6.25L5 28.75ZM10 27.5V10H7.5V27.5H10ZM25 3.75V28.75L26.25 30H31.25L32.5 28.75V3.75L31.25 2.5H26.25L25 3.75ZM30 5V27.5H27.5V5H30ZM15 28.75V13.75L16.25 12.5H21.25L22.5 13.75V28.75L21.25 30H16.25L15 28.75ZM20 27.5V15H17.5V27.5H20Z' fill='white'/%3E%3C/svg%3E")`};
  }

  &.brainstorming {
    width: 20px;
    height: 23px;
    background-image: ${(props) =>
      props.selection
        ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='23' viewBox='0 0 20 23' fill='none'%3E%3Cpath d='M11.2584 0C6.5504 0 2.75404 3.76944 2.51676 8.51L0.119064 11.7428C-0.180649 12.1389 0.119064 12.7778 0.643561 12.7778H2.51676V16.6111C2.51676 18.0294 3.6282 19.1667 5.01437 19.1667H6.26317V23H15.0048V17.0072C17.9645 15.5761 20 12.5222 20 8.94444C20 4.01222 16.1037 0 11.2584 0ZM16.3285 8.395L13.8809 9.05944L15.6791 10.9122C15.8889 11.1277 16.0066 11.4195 16.0066 11.7236C16.0066 12.0277 15.8889 12.3195 15.6791 12.535C15.4685 12.7496 15.1834 12.87 14.8862 12.87C14.5889 12.87 14.3038 12.7496 14.0932 12.535L12.2699 10.695L11.633 13.1994C11.4832 13.8256 10.8588 14.1833 10.2718 14.0172C10.1285 13.9798 9.99381 13.9136 9.87574 13.8224C9.75767 13.7312 9.65853 13.6168 9.58413 13.4859C9.50973 13.3551 9.46155 13.2104 9.4424 13.0603C9.42325 12.9102 9.43351 12.7577 9.47259 12.6117L10.1345 10.0944L7.67432 10.7717C7.53162 10.8126 7.38235 10.8237 7.23535 10.8046C7.08835 10.7854 6.9466 10.7362 6.81851 10.6599C6.69042 10.5837 6.57859 10.4819 6.48963 10.3606C6.40068 10.2393 6.33641 10.101 6.30064 9.95389C6.13829 9.35333 6.48796 8.71444 7.09987 8.56111L9.54752 7.90944L7.74925 6.04389C7.56137 5.82433 7.4621 5.53991 7.47154 5.24825C7.48099 4.95659 7.59845 4.67951 7.80012 4.47316C8.00179 4.26681 8.27258 4.14663 8.55763 4.13696C8.84267 4.1273 9.12065 4.22888 9.33523 4.42111L11.146 6.26111L11.7954 3.75667C11.8304 3.61306 11.8928 3.47793 11.9789 3.35905C12.0651 3.24016 12.1734 3.13986 12.2975 3.06388C12.4217 2.9879 12.5592 2.93775 12.7024 2.9163C12.8455 2.89485 12.9914 2.90253 13.1316 2.93889C13.756 3.105 14.1057 3.73111 13.9558 4.35722L13.2939 6.86167L15.7416 6.18444C15.8867 6.14614 16.0379 6.13759 16.1862 6.1593C16.3346 6.181 16.4774 6.23253 16.6062 6.31092C16.7351 6.38931 16.8475 6.493 16.937 6.61603C17.0265 6.73906 17.0913 6.879 17.1278 7.02778C17.1633 7.17125 17.1708 7.3205 17.1498 7.46695C17.1289 7.6134 17.0799 7.75417 17.0056 7.8812C16.9313 8.00822 16.8333 8.119 16.7171 8.20717C16.6009 8.29534 16.4689 8.35917 16.3285 8.395Z' fill='%237B40F2'/%3E%3C/svg%3E")`
        : `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='31' height='35' viewBox='0 0 31 35' fill='none'%3E%3Cpath d='M17.4505 0C10.1531 0 4.26876 5.73611 3.90099 12.95L0.184549 17.8694C-0.280006 18.4722 0.184549 19.4444 0.997519 19.4444H3.90099V25.2778C3.90099 27.4361 5.62371 29.1667 7.77227 29.1667H9.70792V35H23.2574V25.8806C27.8449 23.7028 31 19.0556 31 13.6111C31 6.10556 24.9608 0 17.4505 0ZM25.3092 12.775L21.5153 13.7861L24.3027 16.6056C24.6277 16.9335 24.8102 17.3775 24.8102 17.8403C24.8102 18.3031 24.6277 18.747 24.3027 19.075C23.9762 19.4015 23.5342 19.5849 23.0735 19.5849C22.6128 19.5849 22.1709 19.4015 21.8444 19.075L19.0184 16.275L18.0312 20.0861C17.7989 21.0389 16.8311 21.5833 15.9213 21.3306C15.6991 21.2737 15.4904 21.1729 15.3074 21.0341C15.1244 20.8952 14.9707 20.7212 14.8554 20.5221C14.7401 20.323 14.6654 20.1028 14.6357 19.8743C14.606 19.6459 14.6219 19.4138 14.6825 19.1917L15.7084 15.3611L11.8952 16.3917C11.674 16.4539 11.4426 16.4709 11.2148 16.4417C10.9869 16.4125 10.7672 16.3377 10.5687 16.2216C10.3702 16.1056 10.1968 15.9507 10.0589 15.7662C9.92105 15.5816 9.82144 15.3711 9.76599 15.1472C9.51435 14.2333 10.0563 13.2611 11.0048 13.0278L14.7987 12.0361L12.0113 9.19722C11.7201 8.86312 11.5663 8.43029 11.5809 7.98646C11.5955 7.54263 11.7776 7.12099 12.0902 6.80698C12.4028 6.49298 12.8225 6.31009 13.2643 6.29538C13.7061 6.28067 14.137 6.43525 14.4696 6.72778L17.2763 9.52778L18.2828 5.71667C18.3371 5.49813 18.4338 5.29251 18.5674 5.1116C18.7009 4.93069 18.8687 4.77804 19.0612 4.66243C19.2536 4.54681 19.4668 4.47049 19.6887 4.43785C19.9105 4.40521 20.1366 4.41689 20.354 4.47222C21.3218 4.725 21.8638 5.67778 21.6315 6.63056L20.6056 10.4417L24.3995 9.41111C24.6244 9.35282 24.8587 9.33981 25.0887 9.37284C25.3187 9.40587 25.5399 9.48429 25.7396 9.60358C25.9393 9.72286 26.1136 9.88066 26.2523 10.0679C26.3911 10.2551 26.4916 10.468 26.548 10.6944C26.6031 10.9128 26.6147 11.1399 26.5822 11.3627C26.5497 11.5856 26.4738 11.7998 26.3587 11.9931C26.2436 12.1864 26.0916 12.355 25.9115 12.4892C25.7314 12.6233 25.5268 12.7205 25.3092 12.775Z' fill='white'/%3E%3C/svg%3E");`};
  }

  &.joiner-list {
    width: 23px;
    height: 22px;
    background-image: ${(props) =>
      props.selection
        ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='23' height='22' viewBox='0 0 23 22' fill='none'%3E%3Cpath d='M6.40159 8.60441H5.66294C4.65495 8.56798 3.65023 8.7391 2.71113 9.10715C1.77203 9.47519 0.918583 10.0323 0.203764 10.7439L0 10.9817V18.0115H3.46399V14.0211L3.93095 13.4947L4.1432 13.2485C5.24856 12.113 6.62469 11.2774 8.14207 10.8203C7.38237 10.2423 6.78321 9.47944 6.40159 8.60441Z' fill='%237B40F2'/%3E%3Cpath d='M22.8209 10.7185C22.1061 10.0069 21.2527 9.4498 20.3136 9.08176C19.3745 8.71371 18.3697 8.54259 17.3617 8.57902C17.0526 8.5799 16.7437 8.5969 16.4363 8.62996C16.0475 9.45088 15.4647 10.1648 14.7383 10.7101C16.3582 11.1582 17.8256 12.0387 18.9834 13.2571L19.1956 13.4948L19.6541 14.0212V18.0201H22.9992V10.9563L22.8209 10.7185Z' fill='%237B40F2'/%3E%3Cpath d='M5.63829 6.94908H5.90149C5.7792 5.89906 5.96344 4.83608 6.43198 3.88845C6.90052 2.94083 7.63332 2.14908 8.54193 1.60877C8.21257 1.1056 7.75817 0.696589 7.22324 0.421796C6.68831 0.147003 6.09119 0.0158452 5.49034 0.0411657C4.88949 0.0664861 4.30551 0.247417 3.7956 0.566241C3.28569 0.885065 2.86731 1.33085 2.58145 1.85995C2.29559 2.38905 2.15204 2.98331 2.16485 3.58456C2.17767 4.1858 2.34641 4.77342 2.65455 5.28985C2.9627 5.80629 3.39969 6.23385 3.92272 6.53065C4.44576 6.82746 5.03691 6.98335 5.63829 6.98304V6.94908Z' fill='%237B40F2'/%3E%3Cpath d='M16.9545 6.31176C16.9648 6.5069 16.9648 6.70244 16.9545 6.89758C17.1174 6.92341 17.282 6.9376 17.4469 6.94003H17.6082C18.207 6.90811 18.7872 6.72169 19.2926 6.39894C19.7979 6.07618 20.211 5.62809 20.4917 5.09827C20.7724 4.56846 20.9112 3.97499 20.8945 3.37563C20.8778 2.77628 20.7061 2.19146 20.3963 1.67813C20.0865 1.16479 19.649 0.740428 19.1265 0.44635C18.604 0.152272 18.0142 -0.00149734 17.4146 1.09904e-05C16.815 0.00151932 16.226 0.158255 15.705 0.454958C15.184 0.75166 14.7486 1.17822 14.4414 1.69311C15.2098 2.19482 15.8417 2.87944 16.2803 3.68555C16.7189 4.49167 16.9506 5.39405 16.9545 6.31176Z' fill='%237B40F2'/%3E%3Cpath d='M11.385 10.1156C13.4809 10.1156 15.1801 8.41648 15.1801 6.3205C15.1801 4.22452 13.4809 2.52539 11.385 2.52539C9.28897 2.52539 7.58984 4.22452 7.58984 6.3205C7.58984 8.41648 9.28897 10.1156 11.385 10.1156Z' fill='%237B40F2'/%3E%3Cpath d='M11.5925 12.1365C10.4837 12.0917 9.37736 12.2718 8.33996 12.6657C7.30256 13.0597 6.35558 13.6594 5.556 14.4289L5.34375 14.6666V20.0409C5.34706 20.2159 5.38483 20.3886 5.4549 20.5491C5.52496 20.7095 5.62596 20.8546 5.7521 20.976C5.87825 21.0974 6.02709 21.1928 6.1901 21.2567C6.35312 21.3206 6.52712 21.3517 6.70218 21.3483H16.4574C16.6324 21.3517 16.8064 21.3206 16.9695 21.2567C17.1325 21.1928 17.2813 21.0974 17.4075 20.976C17.5336 20.8546 17.6346 20.7095 17.7047 20.5491C17.7747 20.3886 17.8125 20.2159 17.8158 20.0409V14.6836L17.612 14.4289C16.8176 13.657 15.874 13.0556 14.8389 12.6614C13.8038 12.2672 12.6991 12.0886 11.5925 12.1365Z' fill='%237B40F2'/%3E%3C/svg%3E")`
        : `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='23' height='22' viewBox='0 0 23 22' fill='none'%3E%3Cpath d='M6.40159 8.60441H5.66294C4.65495 8.56798 3.65023 8.7391 2.71113 9.10715C1.77203 9.47519 0.918583 10.0323 0.203764 10.7439L0 10.9817V18.0115H3.46399V14.0211L3.93095 13.4947L4.1432 13.2485C5.24856 12.113 6.62469 11.2774 8.14207 10.8203C7.38237 10.2423 6.78321 9.47944 6.40159 8.60441Z' fill='white'/%3E%3Cpath d='M22.8209 10.7185C22.1061 10.0069 21.2527 9.4498 20.3136 9.08176C19.3745 8.71371 18.3697 8.54259 17.3617 8.57902C17.0526 8.5799 16.7437 8.5969 16.4363 8.62996C16.0475 9.45088 15.4647 10.1648 14.7383 10.7101C16.3582 11.1582 17.8256 12.0387 18.9834 13.2571L19.1956 13.4948L19.6541 14.0212V18.0201H22.9992V10.9563L22.8209 10.7185Z' fill='white'/%3E%3Cpath d='M5.63829 6.94908H5.90149C5.7792 5.89906 5.96344 4.83608 6.43198 3.88845C6.90052 2.94083 7.63332 2.14908 8.54193 1.60877C8.21257 1.1056 7.75817 0.696589 7.22324 0.421796C6.68831 0.147003 6.09119 0.0158452 5.49034 0.0411657C4.88949 0.0664861 4.30551 0.247417 3.7956 0.566241C3.28569 0.885065 2.86731 1.33085 2.58145 1.85995C2.29559 2.38905 2.15204 2.98331 2.16485 3.58456C2.17767 4.1858 2.34641 4.77342 2.65455 5.28985C2.9627 5.80629 3.39969 6.23385 3.92272 6.53065C4.44576 6.82746 5.03691 6.98335 5.63829 6.98304V6.94908Z' fill='white'/%3E%3Cpath d='M16.9545 6.31176C16.9648 6.5069 16.9648 6.70244 16.9545 6.89758C17.1174 6.92341 17.282 6.9376 17.4469 6.94003H17.6082C18.207 6.90811 18.7872 6.72169 19.2926 6.39894C19.7979 6.07618 20.211 5.62809 20.4917 5.09827C20.7724 4.56846 20.9112 3.97499 20.8945 3.37563C20.8778 2.77628 20.7061 2.19146 20.3963 1.67813C20.0865 1.16479 19.649 0.740428 19.1265 0.44635C18.604 0.152272 18.0142 -0.00149734 17.4146 1.09904e-05C16.815 0.00151932 16.226 0.158255 15.705 0.454958C15.184 0.75166 14.7486 1.17822 14.4414 1.69311C15.2098 2.19482 15.8417 2.87944 16.2803 3.68555C16.7189 4.49167 16.9506 5.39405 16.9545 6.31176Z' fill='white'/%3E%3Cpath d='M11.385 10.1156C13.4809 10.1156 15.1801 8.41648 15.1801 6.3205C15.1801 4.22452 13.4809 2.52539 11.385 2.52539C9.28897 2.52539 7.58984 4.22452 7.58984 6.3205C7.58984 8.41648 9.28897 10.1156 11.385 10.1156Z' fill='white'/%3E%3Cpath d='M11.5925 12.1365C10.4837 12.0917 9.37736 12.2718 8.33996 12.6657C7.30256 13.0597 6.35558 13.6594 5.556 14.4289L5.34375 14.6666V20.0409C5.34706 20.2159 5.38483 20.3886 5.4549 20.5491C5.52496 20.7095 5.62596 20.8546 5.7521 20.976C5.87825 21.0974 6.02709 21.1928 6.1901 21.2567C6.35312 21.3206 6.52712 21.3517 6.70218 21.3483H16.4574C16.6324 21.3517 16.8064 21.3206 16.9695 21.2567C17.1325 21.1928 17.2813 21.0974 17.4075 20.976C17.5336 20.8546 17.6346 20.7095 17.7047 20.5491C17.7747 20.3886 17.8125 20.2159 17.8158 20.0409V14.6836L17.612 14.4289C16.8176 13.657 15.874 13.0556 14.8389 12.6614C13.8038 12.2672 12.6991 12.0886 11.5925 12.1365Z' fill='white'/%3E%3C/svg%3E")`};
  }

  &.vote {
    width: 23px;
    height: 25.76px;
    background-image: ${(props) =>
      props.selection
        ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='23' height='26' viewBox='0 0 23 26' fill='none'%3E%3Cpath d='M19.1667 14.1687H18.2978L15.7422 16.7446H18.1828L20.4444 19.3204H2.55556L4.83 16.7446H7.44944L4.89389 14.1687H3.83333L0 18.0325V23.1842C0 24.6009 1.13722 25.76 2.54278 25.76H20.4444C21.85 25.76 23 24.6138 23 23.1842V18.0325L19.1667 14.1687ZM17.8889 7.66474L11.5639 14.0399L7.04056 9.48071L13.3656 3.10551L17.8889 7.66474ZM12.4711 0.375122L4.33167 8.57916C3.83333 9.08145 3.83333 9.89284 4.33167 10.3951L10.6567 16.7703C11.155 17.2726 11.96 17.2726 12.4583 16.7703L20.585 8.57916C21.0833 8.07687 21.0833 7.26549 20.585 6.7632L14.26 0.388001C13.7744 -0.127167 12.9694 -0.127167 12.4711 0.375122Z' fill='%237B40F2'/%3E%3C/svg%3E")`
        : `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='23' height='26' viewBox='0 0 23 26' fill='none'%3E%3Cpath d='M19.1667 14.1687H18.2978L15.7422 16.7446H18.1828L20.4444 19.3204H2.55556L4.83 16.7446H7.44944L4.89389 14.1687H3.83333L0 18.0325V23.1842C0 24.6009 1.13722 25.76 2.54278 25.76H20.4444C21.85 25.76 23 24.6138 23 23.1842V18.0325L19.1667 14.1687ZM17.8889 7.66474L11.5639 14.0399L7.04056 9.48071L13.3656 3.10551L17.8889 7.66474ZM12.4711 0.375122L4.33167 8.57916C3.83333 9.08145 3.83333 9.89284 4.33167 10.3951L10.6567 16.7703C11.155 17.2726 11.96 17.2726 12.4583 16.7703L20.585 8.57916C21.0833 8.07687 21.0833 7.26549 20.585 6.7632L14.26 0.388001C13.7744 -0.127167 12.9694 -0.127167 12.4711 0.375122Z' fill='white'/%3E%3C/svg%3E")`};
  }
`;

export const StyledTabContainer = styled(Grid)`
  width: 100%;
  height: 100%;
  gap: 25px;
  display: flex;
  flex-direction: row;
  margin-left: 0;
  background-color: transparent;
`;
