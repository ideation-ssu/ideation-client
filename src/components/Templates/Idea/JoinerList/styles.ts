import MuiSearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";

export const Header = styled("div")`
  display: flex;
  &.profile {
    justify-content: flex-end;
  }
  &.header {
    justify-content: space-between;
  }
`;

export const ButtonWrap = styled("div")`
  display: flex;
  flex-direction: row;
  width: 148px;
  gap: 10px;
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
  width: 94%;
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: 25px;
  margin-left: 0;
  padding: 30px;
  border-radius: 5px;
  background-color: #fff;
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
