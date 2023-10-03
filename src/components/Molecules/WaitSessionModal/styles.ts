import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";

export const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled("div")`
  width: 512px;
  height: 552px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  gap: 10px;
`;

export const Title = styled("div")`
  width: 100%;
  height: 111px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #f5f6f7;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;

  span {
    padding: 0 50px;
  }

  .main_title {
    font-size: 18px;
    font-weight: 700;
    color: #091e42;
  }

  .sub_title {
    font-size: 14px;
    font-weight: 400;
    color: #7a8699;
  }
`;

export const SessionName = styled("div")`
  width: calc(100% - 100px);
  display: flex;
  flex-direction: column;
  gap: 55px;
  padding: 10px 0;

  span {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
  }
`;

export const JoinerWrap = styled("div")<{ isOwner: boolean }>`
  width: 370px;
  height: ${(props) => (props.isOwner ? 230 : 270)}px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid #f5f6f7;
  border-radius: 10px;
`;

export const JoinerTitle = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const JoinerListWrap = styled("div")`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const JoinerList = styled("div")`
  min-height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  overflow-y: auto;

  span {
    flex: 10;
  }
`;

export const AvatarWrap = styled("div")`
  display: flex;
  justify-content: flex-end;
  flex: 2;
`;

export const ActiveWrap = styled("div")`
  flex: 1;
`;

export const Active = styled("div")<{ isActive: boolean }>`
  width: 15px;
  height: 15px;
  background-color: ${(props) => (props.isActive ? "#00b18c" : "#f36262")};
  border-radius: 10px;
`;

export const SessionFuncWrap = styled("div")`
  width: 90%;
  height: 335px;
  display: flex;
  flex-direction: column;
`;

export const Grid = styled("div")`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

export const Item = styled("div")`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: end;
  align-items: center;
  gap: 20px;
`;

export const TimerIcon = styled("div")`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='71' height='87' viewBox='0 0 71 87' fill='none'%3E%3Cpath d='M35.5 84.25C53.4493 84.25 68 69.6993 68 51.75C68 33.8007 53.4493 19.25 35.5 19.25C17.5507 19.25 3 33.8007 3 51.75C3 69.6993 17.5507 84.25 35.5 84.25Z' stroke='url(%23paint0_linear_1197_13661)' stroke-width='5'/%3E%3Cpath d='M43.625 3H27.375M35.5 3V19.25M57.8438 27.375L63.9375 21.2812M35.5 39.5625V51.75H23.3125' stroke='url(%23paint1_linear_1197_13661)' stroke-width='5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_1197_13661' x1='66.5137' y1='51.75' x2='4.78354' y2='51.734' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%236E72FC'/%3E%3Cstop offset='1' stop-color='%23AD1DEB'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint1_linear_1197_13661' x1='63.0086' y1='27.375' x2='24.4272' y2='27.3667' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%236E72FC'/%3E%3Cstop offset='1' stop-color='%23AD1DEB'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E");
  background-size: cover;
  width: 66px;
  height: 81.25px;
`;

export const ClusteringIcon = styled("div")`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='79' height='77' viewBox='0 0 79 77' fill='none'%3E%3Cpath d='M67.3884 50.2496C64.6186 50.2481 61.9403 51.2551 59.8409 53.0871L49.9247 45.2653C50.72 43.6435 51.1334 41.8567 51.1323 40.0455C51.1314 39.5732 51.103 39.1014 51.0471 38.6326L57.3251 36.5133C58.7305 38.9889 60.9757 40.8621 63.6422 41.7837C66.3087 42.7053 69.2146 42.6126 71.8187 41.5227C74.4227 40.4328 76.5472 38.4201 77.7963 35.8597C79.0453 33.2993 79.3338 30.3657 78.6079 27.6056C77.882 24.8455 76.1913 22.4471 73.8508 20.8573C71.5103 19.2675 68.6796 18.5947 65.8861 18.9643C63.0927 19.3339 60.527 20.7207 58.6671 22.8662C56.8072 25.0117 55.78 27.7697 55.7769 30.6263C55.7778 31.0985 55.8062 31.5703 55.862 32.0391L49.5841 34.1585C48.3558 31.9886 46.4758 30.2734 44.2186 29.2631C41.9613 28.2528 39.4447 28.0003 37.0359 28.5423L33.8853 21.3601C36.2276 19.6664 37.8664 17.1512 38.4841 14.302C39.1019 11.4529 38.6545 8.47264 37.2287 5.9389C35.8029 3.40516 33.5002 1.49834 30.767 0.587986C28.0337 -0.322366 25.0645 -0.171423 22.4347 1.01156C19.8049 2.19455 17.7019 4.32533 16.5332 6.99096C15.3644 9.6566 15.2133 12.6673 16.1089 15.4395C17.0046 18.2117 18.8833 20.5481 21.3809 21.9958C23.8786 23.4435 26.8174 23.8995 29.6277 23.2754L32.7783 30.4575C30.4242 32.1552 28.7808 34.6836 28.1707 37.5467C27.5606 40.4098 28.0278 43.4007 29.4806 45.9325L18.6199 55.7441C16.3104 53.9909 13.4412 53.1697 10.5685 53.4395C7.69573 53.7094 5.02414 55.0512 3.07157 57.2048C1.11901 59.3584 0.0245725 62.1704 0.000408793 65.0957C-0.0237549 68.021 1.02408 70.8512 2.94079 73.0377C4.8575 75.2241 7.50655 76.6111 10.3744 76.9297C13.2423 77.2484 16.1247 76.476 18.4628 74.7622C20.801 73.0485 22.4284 70.5155 23.0295 67.6543C23.6306 64.7931 23.1627 61.8076 21.7163 59.2763L32.5538 49.4647C34.6634 51.0724 37.2514 51.901 39.8891 51.8132C42.5267 51.7254 45.0555 50.7265 47.0566 48.9819L56.9729 56.8038C55.854 59.0977 55.5026 61.6988 55.972 64.2133C56.4414 66.7278 57.706 69.0188 59.5742 70.7393C61.4425 72.4599 63.8128 73.5164 66.3262 73.7489C68.8396 73.9814 71.3593 73.3771 73.5038 72.0277C75.6482 70.6783 77.3007 68.6571 78.211 66.2702C79.1213 63.8833 79.2398 61.2607 78.5487 58.7993C77.8575 56.338 76.3943 54.172 74.3806 52.6293C72.3669 51.0866 69.9123 50.2512 67.3884 50.2496ZM67.3884 23.5619C68.7664 23.5619 70.1134 23.9762 71.2591 24.7524C72.4048 25.5287 73.2977 26.632 73.8251 27.9228C74.3524 29.2137 74.4903 30.6341 74.2215 32.0045C73.9527 33.3748 73.2892 34.6336 72.3148 35.6215C71.3405 36.6095 70.0991 37.2823 68.7476 37.5549C67.3962 37.8275 65.9954 37.6876 64.7223 37.1529C63.4493 36.6182 62.3612 35.7128 61.5957 34.551C60.8301 33.3893 60.4215 32.0235 60.4215 30.6263C60.4215 28.7527 61.1555 26.9558 62.4621 25.631C63.7686 24.3062 65.5407 23.5619 67.3884 23.5619ZM20.1681 11.7879C20.1681 10.3907 20.5767 9.02484 21.3423 7.8631C22.1078 6.70137 23.1959 5.79591 24.4689 5.26122C25.742 4.72653 27.1428 4.58663 28.4943 4.85922C29.8457 5.1318 31.0871 5.80462 32.0614 6.79259C33.0358 7.78056 33.6993 9.03932 33.9681 10.4097C34.237 11.78 34.099 13.2005 33.5717 14.4913C33.0444 15.7822 32.1514 16.8855 31.0057 17.6617C29.86 18.438 28.513 18.8523 27.1351 18.8523C25.2873 18.8523 23.5153 18.108 22.2087 16.7832C20.9022 15.4583 20.1681 13.6615 20.1681 11.7879ZM11.653 72.2277C10.2751 72.2277 8.92809 71.8134 7.78239 71.0371C6.63668 70.2609 5.74371 69.1576 5.2164 67.8667C4.68909 66.5759 4.55112 65.1555 4.81994 63.7851C5.08876 62.4148 5.7523 61.156 6.72664 60.168C7.70099 59.1801 8.94237 58.5072 10.2938 58.2347C11.6453 57.9621 13.0461 58.102 14.3191 58.6367C15.5922 59.1713 16.6803 60.0768 17.4458 61.2385C18.2113 62.4003 18.6199 63.7661 18.6199 65.1633C18.6199 67.0369 17.8859 68.8338 16.5794 70.1586C15.2728 71.4834 13.5008 72.2277 11.653 72.2277ZM39.5207 47.1099C38.1428 47.1099 36.7958 46.6955 35.6501 45.9193C34.5044 45.143 33.6114 44.0397 33.0841 42.7489C32.5568 41.458 32.4188 40.0376 32.6877 38.6673C32.9565 37.2969 33.62 36.0382 34.5944 35.0502C35.5687 34.0622 36.8101 33.3894 38.1615 33.1168C39.513 32.8442 40.9138 32.9841 42.1869 33.5188C43.4599 34.0535 44.548 34.959 45.3135 36.1207C46.079 37.2824 46.4877 38.6483 46.4877 40.0455C46.4877 41.9191 45.7536 43.7159 44.4471 45.0407C43.1405 46.3656 41.3685 47.1099 39.5207 47.1099ZM67.3884 69.088C66.0105 69.088 64.6635 68.6737 63.5178 67.8974C62.3721 67.1212 61.4791 66.0179 60.9518 64.727C60.4245 63.4362 60.2866 62.0157 60.5554 60.6454C60.8242 59.275 61.4877 58.0163 62.4621 57.0283C63.4364 56.0403 64.6778 55.3675 66.0293 55.0949C67.3807 54.8223 68.7815 54.9622 70.0546 55.4969C71.3276 56.0316 72.4157 56.9371 73.1812 58.0988C73.9468 59.2606 74.3554 60.6264 74.3554 62.0236C74.3554 63.8972 73.6214 65.694 72.3148 67.0189C71.0083 68.3437 69.2362 69.088 67.3884 69.088Z' fill='url(%23paint0_linear_1197_13667)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_1197_13667' x1='77.1936' y1='38.5001' x2='2.16769' y2='38.4801' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%236E72FC'/%3E%3Cstop offset='1' stop-color='%23AD1DEB'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E");
  background-size: cover;
  width: 79px;
  height: 77px;
`;

export const BrainstormingIcon = styled("div")`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='78' height='87' viewBox='0 0 78 87' fill='none'%3E%3Cpath d='M46.8189 10.3385L64.0025 20.1985C64.5206 19.6548 65.1262 19.1835 65.8084 18.7848C67.6787 17.7175 69.8985 17.4303 71.9814 17.9861C74.0644 18.5419 75.8407 19.8954 76.9212 21.75C77.5709 22.8765 77.9384 24.1416 77.9929 25.4388C78.0474 26.7359 77.7872 28.0271 77.2342 29.2034C76.6813 30.3797 75.8518 31.4067 74.8157 32.1978C73.7796 32.9888 72.5673 33.5208 71.2809 33.7488V53.2512C72.5816 53.4837 73.8056 54.0278 74.8469 54.8364C75.8881 55.6449 76.7153 56.6935 77.2567 57.8914C77.7981 59.0892 78.0374 60.4001 77.9539 61.7106C77.8704 63.0211 77.4665 64.2915 76.7774 65.4119C76.0882 66.5323 75.1345 67.4689 73.9989 68.1404C72.8632 68.812 71.5799 69.1983 70.2602 69.2659C68.9404 69.3335 67.6239 69.0804 66.4248 68.5284C65.2257 67.9764 64.1801 67.1423 63.3786 66.0982L46.5015 75.777C47.0217 77.0059 47.2281 78.3436 47.1023 79.671C46.9765 80.9984 46.5223 82.2743 45.7802 83.3851C45.0382 84.4959 44.0312 85.4072 42.849 86.0379C41.6668 86.6686 40.346 86.9991 39.0042 87C37.7172 87.003 36.4479 86.7021 35.3009 86.1223C34.1538 85.5424 33.1618 84.7001 32.4065 83.6647C31.6513 82.6293 31.1543 81.4305 30.9567 80.1669C30.759 78.9033 30.8663 77.6112 31.2697 76.3969L14.2028 66.6057C13.3606 67.5387 12.3116 68.2642 11.1387 68.7251C9.96578 69.186 8.70107 69.3697 7.44446 69.2615C6.18786 69.1534 4.97377 68.7564 3.89809 68.102C2.82241 67.4475 1.9146 66.5535 1.24637 65.4906C0.578144 64.4277 0.167793 63.225 0.0477315 61.9774C-0.0723304 60.7299 0.101186 59.4716 0.554575 58.3022C1.00796 57.1327 1.72881 56.084 2.66017 55.2388C3.59154 54.3937 4.70791 53.7753 5.92112 53.4325L5.92476 33.5675C4.73351 33.2324 3.63485 32.6318 2.71232 31.8114C1.78979 30.991 1.06768 29.9723 0.600909 28.833C0.134133 27.6936 -0.0650206 26.4634 0.0185922 25.2361C0.102205 24.0087 0.466382 22.8165 1.08343 21.75C1.69775 20.6959 2.5437 19.7931 3.55816 19.1092C4.57263 18.4252 5.72943 17.9777 6.94228 17.7999C8.15512 17.6222 9.3927 17.7189 10.5627 18.0827C11.7327 18.4466 12.8049 19.0682 13.6994 19.9013L31.0836 9.92526C30.8022 8.73909 30.7947 7.505 31.0617 6.31553C31.3287 5.12607 31.8633 4.0121 32.6253 3.05717C33.3874 2.10224 34.3571 1.33114 35.4618 0.801676C36.5666 0.272216 37.7776 -0.00185476 39.0042 1.64975e-05C40.2673 -0.0025207 41.5137 0.287628 42.6443 0.847418C43.7749 1.40721 44.7586 2.22122 45.5172 3.2248C46.2758 4.22839 46.7884 5.3939 47.0144 6.62876C47.2403 7.86363 47.1734 9.13384 46.8189 10.3385ZM45.0203 13.5285C44.8378 13.7243 44.6445 13.9128 44.4475 14.0904L67.3517 53.5122L67.6034 53.4397V33.5494C66.561 33.2494 65.5896 32.7448 64.7467 32.0655C63.9039 31.3862 63.2066 30.5459 62.6961 29.5943C62.1856 28.6427 61.8722 27.599 61.7745 26.525C61.6768 25.4511 61.7968 24.3685 62.1273 23.3414L45.0166 13.5213L45.0203 13.5285ZM33.0537 13.5974C32.9365 13.4717 32.8234 13.3423 32.7144 13.2095L15.7424 22.9463C16.162 24.0525 16.332 25.2367 16.2403 26.4153C16.1486 27.594 15.7975 28.7382 15.2119 29.7672C14.6262 30.7962 13.8202 31.6849 12.8509 32.3703C11.8816 33.0558 10.7726 33.5214 9.60228 33.7342V53.2585L9.96711 53.331L33.0537 13.5974ZM41.226 15.8594C39.5428 16.3331 37.751 16.2568 36.1147 15.6419L13.2761 54.9332C14.573 55.9802 15.5153 57.3973 15.9759 58.9932H62.0215C62.4127 57.6209 63.1615 56.3755 64.1922 55.3827L41.226 15.8594ZM44.6883 73.1344L61.9777 63.2164C61.9283 63.0282 61.8857 62.8384 61.85 62.6472H16.1583C16.1109 62.901 16.0489 63.1547 15.9796 63.4012L33.1851 73.2721C33.9419 72.4991 34.8473 71.8852 35.8475 71.4667C36.8478 71.0483 37.9225 70.8338 39.0078 70.8361C41.2223 70.8361 43.2253 71.7134 44.6919 73.1344H44.6883Z' fill='url(%23paint0_linear_1197_13666)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_1197_13666' x1='76.2165' y1='43.5001' x2='2.14025' y2='43.4828' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%236E72FC'/%3E%3Cstop offset='1' stop-color='%23AD1DEB'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E");
  background-size: cover;
  width: 78px;
  height: 87px;
`;

export const StatisticsIcon = styled("div")`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='73' height='73' viewBox='0 0 73 73' fill='none'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M2.60714 73H73V67.7857H5.21429V0H0V70.3929L2.60714 73ZM10.4286 59.9643V18.25L13.0357 15.6429H23.4643L26.0714 18.25V59.9643L23.4643 62.5714H13.0357L10.4286 59.9643ZM20.8571 57.3571V20.8571H15.6429V57.3571H20.8571ZM52.1429 7.82143V59.9643L54.75 62.5714H65.1786L67.7857 59.9643V7.82143L65.1786 5.21429H54.75L52.1429 7.82143ZM62.5714 10.4286V57.3571H57.3571V10.4286H62.5714ZM31.2857 59.9643V28.6786L33.8929 26.0714H44.3214L46.9286 28.6786V59.9643L44.3214 62.5714H33.8929L31.2857 59.9643ZM41.7143 57.3571V31.2857H36.5V57.3571H41.7143Z' fill='url(%23paint0_linear_1333_5103)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_1333_5103' x1='71.3308' y1='36.5001' x2='2.00306' y2='36.4821' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%236E72FC'/%3E%3Cstop offset='1' stop-color='%23AD1DEB'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E");
  background-size: cover;
  width: 73px;
  height: 73px;
`;

export const FuncTag = styled("div")`
  width: 131px;
  height: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: #ebe1ff;
`;

export const ButtonWrap = styled("div")`
  width: 410px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
`;
