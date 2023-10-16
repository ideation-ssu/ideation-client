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
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='16' viewBox='0 0 24 16' fill='none'%3E%3Cg clip-path='url(%23clip0_821_5712)'%3E%3Cpath d='M16.5334 10.2219H8.03197C5.68436 10.2219 3.78125 11.5485 3.78125 13.1849V13.6663C3.78125 14.2186 4.22897 14.6663 4.78125 14.6663H19.7841C20.3364 14.6663 20.7841 14.2186 20.7841 13.6663V13.1849C20.7841 11.5485 18.881 10.2219 16.5334 10.2219Z' fill='%236E6E6E'/%3E%3Cpath d='M12.2827 7.25893C14.6303 7.25893 16.5334 5.93237 16.5334 4.29597C16.5334 2.65957 14.6303 1.33301 12.2827 1.33301C9.93509 1.33301 8.03197 2.65957 8.03197 4.29597C8.03197 5.93237 9.93509 7.25893 12.2827 7.25893Z' fill='%236E6E6E'/%3E%3Cpath d='M16.5334 10.2219H8.03197C5.68436 10.2219 3.78125 11.5485 3.78125 13.1849V13.6663C3.78125 14.2186 4.22897 14.6663 4.78125 14.6663H19.7841C20.3364 14.6663 20.7841 14.2186 20.7841 13.6663V13.1849C20.7841 11.5485 18.881 10.2219 16.5334 10.2219Z' stroke='%236E6E6E' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M12.2827 7.25893C14.6303 7.25893 16.5334 5.93237 16.5334 4.29597C16.5334 2.65957 14.6303 1.33301 12.2827 1.33301C9.93509 1.33301 8.03197 2.65957 8.03197 4.29597C8.03197 5.93237 9.93509 7.25893 12.2827 7.25893Z' stroke='%236E6E6E' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_821_5712'%3E%3Crect x='0.949219' width='22.6705' height='16' rx='5' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
  background-size: cover;
  width: 22px;
  height: 16px;
`;

export const IdeaIcon = styled("div")`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='26' height='20' viewBox='0 0 26 20' fill='none'%3E%3Cpath d='M13.015 1.66699C11.0634 1.66699 9.19163 2.28157 7.81159 3.37554C6.43155 4.4695 5.65625 5.95323 5.65625 7.50033C5.65625 9.48366 6.90724 11.2253 8.81001 12.2837V14.167C8.81001 14.388 8.92077 14.6 9.11792 14.7562C9.31507 14.9125 9.58246 15.0003 9.86127 15.0003H16.1688C16.4476 15.0003 16.715 14.9125 16.9121 14.7562C17.1093 14.6 17.2201 14.388 17.2201 14.167V12.2837C19.1228 11.2253 20.3738 9.48366 20.3738 7.50033C20.3738 5.95323 19.5985 4.4695 18.2185 3.37554C16.8384 2.28157 14.9667 1.66699 13.015 1.66699ZM9.86127 17.5003C9.86127 17.7213 9.97203 17.9333 10.1692 18.0896C10.3663 18.2459 10.6337 18.3337 10.9125 18.3337H15.1175C15.3964 18.3337 15.6637 18.2459 15.8609 18.0896C16.058 17.9333 16.1688 17.7213 16.1688 17.5003V16.667H9.86127V17.5003Z' fill='%236E6E6E'/%3E%3C/svg%3E");
  background-size: cover;
  width: 25px;
  height: 20px;
`;

export const NotiIcon = styled("div")`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='19' height='16' viewBox='0 0 19 16' fill='none'%3E%3Cpath d='M17.9388 11.0468C17.8632 10.9754 17.789 10.9039 17.7161 10.835C16.7142 9.88464 16.1081 9.31107 16.1081 6.62071C16.1081 5.22786 15.6832 4.085 14.8457 3.22786C14.2282 2.59464 13.3935 2.11429 12.2932 1.75929C12.2664 1.74757 12.2505 1.721 12.2396 1.69382C11.8311 0.677567 10.7608 0 9.55582 0C8.3505 0 7.28046 0.677879 6.87219 1.69349C6.86147 1.72016 6.84565 1.74597 6.81933 1.7575C4.2518 2.58643 3.00401 4.17679 3.00401 6.61964C3.00401 9.31107 2.39878 9.88464 1.396 10.8339C1.32313 10.9029 1.2489 10.9729 1.17331 11.0457C0.978032 11.2304 0.85431 11.4551 0.816782 11.6932C0.779253 11.9313 0.82949 12.1729 0.961546 12.3893C1.24253 12.8536 1.84138 13.1418 2.52493 13.1418H16.5917C17.2721 13.1418 17.8668 12.8539 18.1487 12.3918C18.2813 12.1753 18.3321 11.9336 18.2948 11.6952C18.2576 11.4568 18.1341 11.2318 17.9388 11.0468ZM9.55582 16C10.2139 15.9996 10.8595 15.8595 11.4243 15.5946C11.9891 15.3297 12.4519 14.9498 12.7636 14.4954C12.7783 14.4736 12.7856 14.4492 12.7847 14.4246C12.7838 14.3999 12.7748 14.3759 12.7586 14.3548C12.7424 14.3337 12.7195 14.3162 12.6921 14.3041C12.6647 14.292 12.6338 14.2857 12.6024 14.2857H6.51012C6.47866 14.2856 6.44771 14.2919 6.42028 14.304C6.39285 14.3161 6.36988 14.3335 6.3536 14.3546C6.33733 14.3758 6.32829 14.3998 6.32739 14.4245C6.32649 14.4491 6.33374 14.4735 6.34845 14.4954C6.66018 14.9498 7.12292 15.3296 7.68759 15.5945C8.25227 15.8594 8.89783 15.9995 9.55582 16Z' fill='%236E6E6E'/%3E%3C/svg%3E");
  background-size: cover;
  width: 17.5px;
  height: 16px;
`;
