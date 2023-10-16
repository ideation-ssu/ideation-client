import MuiSearchIcon from "@mui/icons-material/Search";
import Grid from "@mui/material/Grid";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";

export const Header = styled("div")`
  display: flex;
  align-items: center;
  &.profile {
    justify-content: flex-end;
    gap: 15px;
  }
  &.header {
    justify-content: space-between;
    align-items: center;
  }
`;

export const ButtonWrap = styled("div")`
  display: flex;
  flex-direction: row;
  width: 148px;
  gap: 10px;
`;

export const LinkIcon = styled("div")`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14' fill='none'%3E%3Cpath d='M7.60127 1.00888C7.91416 0.690975 8.28689 0.438157 8.69797 0.265007C9.10905 0.0918562 9.55034 0.00179843 9.99639 2.66619e-05C10.4424 -0.0017451 10.8844 0.0848042 11.2969 0.254684C11.7093 0.424563 12.084 0.674411 12.3995 0.98982C12.7149 1.30523 12.9647 1.67996 13.1346 2.0924C13.3045 2.50484 13.391 2.94683 13.3892 3.39288C13.3875 3.83893 13.2974 4.28022 13.1243 4.6913C12.9511 5.10238 12.6983 5.47511 12.3804 5.788L10.2341 7.93425L9.23185 6.93338L11.3781 4.78642C11.7463 4.4184 11.9532 3.91918 11.9534 3.39859C11.9535 2.878 11.7468 2.37867 11.3788 2.01046C11.0108 1.64225 10.5116 1.43532 9.99098 1.43519C9.47038 1.43506 8.97106 1.64173 8.60285 2.00975L6.45589 4.15671L5.45431 3.15513L7.60127 1.00888ZM9.10293 5.28721L5.26731 9.12213L4.26573 8.12055L8.10064 4.28563L9.10293 5.28721ZM4.13752 6.47438L1.99127 8.62134C1.62306 8.98955 1.4162 9.48894 1.4162 10.0097C1.4162 10.5304 1.62306 11.0298 1.99127 11.398C2.35948 11.7662 2.85888 11.9731 3.3796 11.9731C3.90033 11.9731 4.39973 11.7662 4.76794 11.398L6.91418 9.25105L7.91577 10.2526L5.76952 12.3989C5.13577 13.0327 4.27618 13.3889 3.37985 13.3889C2.48353 13.389 1.62388 13.033 0.99004 12.3992C0.356194 11.7655 6.64284e-05 10.9059 9.29221e-09 10.0096C-6.64098e-05 9.11324 0.355934 8.2536 0.989686 7.61975L3.13594 5.4735L4.13752 6.47438Z' fill='%237B40F2'/%3E%3C/svg%3E");
  background-size: cover;
  width: 13px;
  height: 13px;
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

export const GridBox = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: 25px;
  margin-left: 0;
  border-radius: 5px;
  background-color: #fff;
`;

export const StyledGrid = styled(Grid)`
  display: flex;
  width: 351px;
  height: 175px;
  padding: 10px;
  background-color: white;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  cursor: pointer;
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.1), -2px -2px 4px rgba(0, 0, 0, 0.1),
    3px -3px 4px rgba(0, 0, 0, 0.1);
  position: relative;

  &.container {
    width: 100%;
    height: 70vh;
    gap: 25px;
    display: flex;
    flex-direction: row;
    background-color: transparent;
    cursor: auto;
    box-shadow: none;
    overflow-y: auto;
    margin: 20px;

    &::-webkit-scrollbar {
      width: 4px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 2px;
      background: #ccc;
    }
  }
`;

export const CardContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 127px;
`;

export const Card = styled("div")`
  width: 300px;
  height: 95px;
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

export const ColorBar = styled("div")<{ color: string }>`
  width: 17px;
  height: 100%;
  background-color: ${(props) => props.color};
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const Content = styled("div")`
  width: 73%;
  display: flex;
  flex-direction: row;
  gap: 15px;
  padding: 15px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
  }

  span {
    &.name {
      font-size: 20px;
    }

    &.email {
      font-size: 12px;
    }
  }
`;

export const MenuWrap = styled("div")`
  width: 45px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CrownIcon = styled("div")`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='22' viewBox='0 0 28 22' fill='none'%3E%3Cpath d='M28 0L20.2222 8.42105L14 0L7.77778 8.42105L0 0V21.8947H28V0Z' fill='%23D9D9D9'/%3E%3C/svg%3E");
  background-size: cover;
  width: 28px;
  height: 21px;
  margin-left: 25px;
`;

export const MenuIcon = styled("div")`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='23' height='24' viewBox='0 0 23 24' fill='none'%3E%3Cpath d='M4.65625 7.125H18.7477M4.65625 12H18.7477M4.65625 16.875H18.7477' stroke='%236E6E6E' stroke-width='2' stroke-miterlimit='10' stroke-linecap='round'/%3E%3C/svg%3E");
  background-size: cover;
  width: 21px;
  height: 24px;
  cursor: pointer;
`;
