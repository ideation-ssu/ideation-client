import Grid from "@mui/material/Grid";
import { css, styled } from "@mui/material/styles";

export const Container = styled("div")`
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const ProjectIcon = styled("div")`
  background-image: url("data:image/svg+xml,%3Csvg width='223' height='174' viewBox='0 0 223 174' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg opacity='0.8'%3E%3Ccircle cx='111' cy='87' r='61' fill='%237B40F2'/%3E%3Cpath d='M8.50423e-05 87C8.50423e-05 38.9511 49.9202 0 111.5 0C173.08 0 223 38.9511 223 87C223 135.049 173.08 174 111.5 174C92.6406 174 74.8484 170.34 59.2543 163.877L15.2278 173.646C13.1816 174.098 11.0177 174.117 8.95951 173.698C6.90134 173.28 5.02355 172.441 3.52008 171.267C2.01661 170.093 0.941982 168.628 0.407185 167.022C-0.127611 165.415 -0.103185 163.727 0.477942 162.131L12.9978 127.784C4.4414 115.228 -0.0224688 101.221 8.50423e-05 87ZM63.7143 68.3571C63.7143 70.0053 64.5534 71.5859 66.047 72.7513C67.5406 73.9167 69.5664 74.5714 71.6786 74.5714H151.321C153.434 74.5714 155.459 73.9167 156.953 72.7513C158.447 71.5859 159.286 70.0053 159.286 68.3571C159.286 66.709 158.447 65.1284 156.953 63.963C155.459 62.7976 153.434 62.1429 151.321 62.1429H71.6786C69.5664 62.1429 67.5406 62.7976 66.047 63.963C64.5534 65.1284 63.7143 66.709 63.7143 68.3571ZM71.6786 99.4286C69.5664 99.4286 67.5406 100.083 66.047 101.249C64.5534 102.414 63.7143 103.995 63.7143 105.643C63.7143 107.291 64.5534 108.872 66.047 110.037C67.5406 111.202 69.5664 111.857 71.6786 111.857H119.464C121.577 111.857 123.602 111.202 125.096 110.037C126.59 108.872 127.429 107.291 127.429 105.643C127.429 103.995 126.59 102.414 125.096 101.249C123.602 100.083 121.577 99.4286 119.464 99.4286H71.6786Z' fill='%237B40F2'/%3E%3C/g%3E%3Cpath d='M156.16 135H67.84C65.716 135 64 133.284 64 131.16V42.84C64 40.716 65.716 39 67.84 39H156.16C158.284 39 160 40.716 160 42.84V131.16C160 133.284 158.284 135 156.16 135ZM94.72 59.16C94.72 58.632 94.288 58.2 93.76 58.2H84.16C83.632 58.2 83.2 58.632 83.2 59.16V114.84C83.2 115.368 83.632 115.8 84.16 115.8H93.76C94.288 115.8 94.72 115.368 94.72 114.84V59.16ZM117.76 92.76C117.76 92.232 117.328 91.8 116.8 91.8H107.2C106.672 91.8 106.24 92.232 106.24 92.76V114.84C106.24 115.368 106.672 115.8 107.2 115.8H116.8C117.328 115.8 117.76 115.368 117.76 114.84V92.76ZM140.8 84.12C140.8 83.592 140.368 83.16 139.84 83.16H130.24C129.712 83.16 129.28 83.592 129.28 84.12V114.84C129.28 115.368 129.712 115.8 130.24 115.8H139.84C140.368 115.8 140.8 115.368 140.8 114.84V84.12Z' fill='white'/%3E%3C/svg%3E%0A");
  background-size: cover;
  width: 223px;
  height: 174px;
`;

export const EmptyWrap = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const EmptyMessage = styled("div")`
  font-size: 20px;
  text-align: center;
  font-weight: bold;

  span {
    white-space: break-spaces;
    color: #7b40f2;
  }
`;

export const StyledGrid = styled(Grid)`
  display: flex;
  width: 283px;
  height: 142px;
  background-color: white;
  border-radius: 5px;
  cursor: pointer;
  overflow-y: auto;

  &.container {
    width: 100%;
    height: 70vh;
    gap: 25px;
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    margin-left: 0;
    background-color: transparent;
    cursor: auto;
  }

  &.add-project {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #7b40f2;
    cursor: pointer;
    span {
      font-size: 15px;
      color: #ffffff;
    }
  }
`;

export const Category = styled("div")<{
  isDone: boolean;
  backgroundColor: string;
}>`
  width: 10px;
  height: 100%;
  background-color: ${({ isDone, backgroundColor }) =>
    isDone ? "#AFAFAF" : backgroundColor};
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const ContentHeader = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContentBody = styled("div")`
  width: calc(100% - 20px);
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  gap: 9px;

  span {
    &.title {
      overflow: hidden;
      font-size: 20px;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    &.desc {
      font-size: 12px;
      color: #6e6e6e;
    }
  }
`;

export const Content = styled("div")`
  width: calc(100% - 30px);
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

export const DDay = styled("div")<{ isDone: boolean; backgroundColor: string }>`
  width: 72.54px;
  height: 21px;
  border-radius: 5px;
  background: rgba(245, 197, 39, 0.2);
  text-align: center;
  padding: 2px 5px;

  span {
    font-size: 12px;
    margin: 0;
  }

  ${({ isDone, backgroundColor }) =>
    isDone
      ? css`
          background-color: rgba(87, 87, 87, 0.2);
          color: #000;
        `
      : css`
          background-color: ${backgroundColor};
          color: #000;
        `};
`;

export const MenuIcon = styled("div")`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17' height='12' viewBox='0 0 17 12' fill='none'%3E%3Cpath d='M1.60938 1.125H15.3906M1.60938 6H15.3906M1.60938 10.875H15.3906' stroke='%236E6E6E' stroke-width='2' stroke-miterlimit='10' stroke-linecap='round'/%3E%3C/svg%3E");
  background-size: cover;
  width: 17px;
  height: 12px;
`;

export const ProjectInfoWrap = styled("div")`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

export const ProjectInfoBox = styled("div")`
  width: 63px;
  height: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 6px;
  background-color: #f1f3ff;
  border-radius: 5px;
  font-size: 15px;
  color: #6e6e6e;
`;

export const PersonIcon = styled("div")`
  background-image: url("data:image/svg+xml,%0A%3Csvg width='20' height='19' viewBox='0 0 20 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_2059_6687)'%3E%3Cpath d='M13 11.8614H7C5.34315 11.8614 4 13.2709 4 15.0096V15.5837C4 16.1359 4.44772 16.5837 5 16.5837H15C15.5523 16.5837 16 16.1359 16 15.5837V15.0096C16 13.2709 14.6569 11.8614 13 11.8614Z' fill='%236E6E6E'/%3E%3Cpath d='M10 8.71329C11.6569 8.71329 13 7.30381 13 5.56514C13 3.82647 11.6569 2.41699 10 2.41699C8.34315 2.41699 7 3.82647 7 5.56514C7 7.30381 8.34315 8.71329 10 8.71329Z' fill='%236E6E6E'/%3E%3Cpath d='M13 11.8614H7C5.34315 11.8614 4 13.2709 4 15.0096V15.5837C4 16.1359 4.44772 16.5837 5 16.5837H15C15.5523 16.5837 16 16.1359 16 15.5837V15.0096C16 13.2709 14.6569 11.8614 13 11.8614Z' stroke='%236E6E6E' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M10 8.71329C11.6569 8.71329 13 7.30381 13 5.56514C13 3.82647 11.6569 2.41699 10 2.41699C8.34315 2.41699 7 3.82647 7 5.56514C7 7.30381 8.34315 8.71329 10 8.71329Z' stroke='%236E6E6E' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_2059_6687'%3E%3Crect x='2' y='1' width='16' height='17' rx='5' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
  background-size: cover;
  width: 20px;
  height: 19px;
`;

export const IdeaIcon = styled("div")`
  background-image: url("data:image/svg+xml,%0A%3Csvg width='20' height='19' viewBox='0 0 20 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.7057 12.0468C16.6452 11.9754 16.5858 11.9039 16.5276 11.835C15.7261 10.8846 15.2413 10.3111 15.2413 7.62071C15.2413 6.22786 14.9014 5.085 14.2315 4.22786C13.7376 3.59464 13.0698 3.11429 12.1898 2.75929V2.75929C12.1675 2.74714 12.1561 2.72268 12.1484 2.69852C11.8228 1.67966 10.9655 1 10.0001 1C9.03447 1 8.17739 1.67996 7.85194 2.69818C7.84438 2.72183 7.83294 2.74557 7.81116 2.7575V2.7575C5.75737 3.58643 4.75925 5.17679 4.75925 7.61964C4.75925 10.3111 4.27513 10.8846 3.47299 11.8339C3.41471 11.9029 3.35533 11.9729 3.29486 12.0457C3.13866 12.2304 3.03969 12.4551 3.00967 12.6932C2.97965 12.9313 3.01984 13.1729 3.12547 13.3893C3.35023 13.8536 3.82925 14.1418 4.37603 14.1418H15.6282C16.1724 14.1418 16.6481 13.8539 16.8736 13.3918C16.9797 13.1753 17.0203 12.9336 16.9905 12.6952C16.9607 12.4568 16.8619 12.2318 16.7057 12.0468ZM10.0001 17C10.5265 16.9996 11.0429 16.8595 11.4947 16.5946C11.9465 16.3297 12.3167 15.9498 12.5661 15.4954C12.5778 15.4736 12.5836 15.4492 12.5829 15.4246C12.5822 15.3999 12.575 15.3759 12.562 15.3548C12.549 15.3337 12.5307 15.3162 12.5088 15.3041C12.4869 15.292 12.4622 15.2857 12.4371 15.2857H7.56381C7.53865 15.2856 7.51389 15.2919 7.49195 15.304C7.47001 15.3161 7.45164 15.3335 7.43862 15.3546C7.4256 15.3758 7.41837 15.3998 7.41765 15.4245C7.41693 15.4491 7.42273 15.4735 7.43449 15.4954C7.68385 15.9498 8.054 16.3296 8.50569 16.5945C8.95737 16.8594 9.47376 16.9995 10.0001 17Z' fill='%236E6E6E'/%3E%3C/svg%3E%0A");
  background-size: cover;
  width: 20px;
  height: 19px;
`;

export const NotiIcon = styled("div")`
  background-image: url("data:image/svg+xml,%0A%3Csvg width='20' height='19' viewBox='0 0 20 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.83333 1C8.28624 1 6.80251 1.58385 5.70854 2.62312C4.61458 3.66238 4 5.07193 4 6.54167C4 8.42583 4.99167 10.0804 6.5 11.0858V12.875C6.5 13.085 6.5878 13.2863 6.74408 13.4348C6.90036 13.5833 7.11232 13.6667 7.33333 13.6667H12.3333C12.5543 13.6667 12.7663 13.5833 12.9226 13.4348C13.0789 13.2863 13.1667 13.085 13.1667 12.875V11.0858C14.675 10.0804 15.6667 8.42583 15.6667 6.54167C15.6667 5.07193 15.0521 3.66238 13.9581 2.62312C12.8642 1.58385 11.3804 1 9.83333 1ZM7.33333 16.0417C7.33333 16.2516 7.42113 16.453 7.57741 16.6015C7.73369 16.7499 7.94565 16.8333 8.16667 16.8333H11.5C11.721 16.8333 11.933 16.7499 12.0893 16.6015C12.2455 16.453 12.3333 16.2516 12.3333 16.0417V15.25H7.33333V16.0417Z' fill='%236E6E6E'/%3E%3C/svg%3E%0A");
  background-size: cover;
  width: 20px;
  height: 19px;
`;
