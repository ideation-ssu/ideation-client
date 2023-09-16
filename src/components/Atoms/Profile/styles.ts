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
