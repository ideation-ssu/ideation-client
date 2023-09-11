import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";

export const Button = styled(IconButton)`
  :hover {
    background: transparent;
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  display: flex;
  justify-content: flex-start;
  gap: 10px;

  &.Mui-disabled {
    opacity: 1;
  }

  span {
    font-size: 14px;
    color: #6e6e6e;
  }
`;

export const UserInfo = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  span {
    &.name {
      font-size: 13px;
      font-weight: bold;
      color: #313131;
    }

    &.count {
      font-size: 8px;
      color: #6e6e6e;
    }
  }
`;

export const IconWrap = styled("div")`
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileIcon = styled("div")`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='20' viewBox='0 0 18 20' fill='none'%3E%3Cpath d='M13 13H5C2.79086 13 1 14.7909 1 17V19H17V17C17 14.7909 15.2091 13 13 13Z' stroke='%236E6E6E' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z' stroke='%236E6E6E' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-size: cover;
  width: 16px;
  height: 18px;
`;

export const ConfigIcon = styled("div")`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M19.6462 12.9792C19.689 12.6667 19.7104 12.3438 19.7104 12C19.7104 11.6667 19.689 11.3333 19.6355 11.0208L21.8094 9.375C22.0021 9.22917 22.0557 8.94792 21.9379 8.73958L19.8818 5.28125C19.7533 5.05208 19.4855 4.97917 19.2499 5.05208L16.6905 6.05208C16.1551 5.65625 15.5875 5.32292 14.9557 5.07292L14.5701 2.42708C14.5273 2.17708 14.3131 2 14.0561 2H9.94388C9.68687 2 9.4834 2.17708 9.44056 2.42708L9.05504 5.07292C8.42322 5.32292 7.84493 5.66667 7.3202 6.05208L4.76076 5.05208C4.52517 4.96875 4.25744 5.05208 4.12894 5.28125L2.08353 8.73958C1.95502 8.95833 1.99786 9.22917 2.21204 9.375L4.38595 11.0208C4.3324 11.3333 4.28957 11.6771 4.28957 12C4.28957 12.3229 4.31099 12.6667 4.36453 12.9792L2.19062 14.625C1.99786 14.7708 1.94431 15.0521 2.06211 15.2604L4.11823 18.7188C4.24673 18.9479 4.51446 19.0208 4.75005 18.9479L7.30949 17.9479C7.84493 18.3437 8.41251 18.6771 9.04433 18.9271L9.42986 21.5729C9.4834 21.8229 9.68687 22 9.94388 22H14.0561C14.3131 22 14.5273 21.8229 14.5594 21.5729L14.945 18.9271C15.5768 18.6771 16.1551 18.3437 16.6798 17.9479L19.2392 18.9479C19.4748 19.0312 19.7426 18.9479 19.8711 18.7188L21.9272 15.2604C22.0557 15.0312 22.0021 14.7708 21.7987 14.625L19.6462 12.9792ZM12 15.75C9.87963 15.75 8.14478 14.0625 8.14478 12C8.14478 9.9375 9.87963 8.25 12 8.25C14.1204 8.25 15.8552 9.9375 15.8552 12C15.8552 14.0625 14.1204 15.75 12 15.75Z' stroke='%236E6E6E'/%3E%3C/svg%3E");
  background-size: cover;
  width: 20px;
  height: 20px;
`;

export const LogoutIcon = styled("div")`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 25 25' fill='none'%3E%3Cpath d='M12.5013 20.8337C10.2912 20.8337 8.17155 19.9557 6.60875 18.3929C5.04594 16.8301 4.16797 14.7105 4.16797 12.5003C4.16797 10.2902 5.04594 8.17057 6.60875 6.60777C8.17155 5.04497 10.2912 4.16699 12.5013 4.16699' stroke='%236E6E6E' stroke-linecap='round'/%3E%3Cpath d='M10.418 12.5H20.8346M20.8346 12.5L17.7096 9.375M20.8346 12.5L17.7096 15.625' stroke='%236E6E6E' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-size: cover;
  width: 25px;
  height: 25px;
`;

export const UpgradeButton = styled("div")`
  width: 185px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #7b40f2;
  border-radius: 5px;

  span {
    font-family: Pretendard, sans-serif;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
  }
`;
