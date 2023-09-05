import MuiSearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

export const Container = styled("div")`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Content = styled("div")`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

export const Header = styled("div")`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const LogoWrap = styled("div")`
  width: 195px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #7b40f2;
`;

export const AvatarWrap = styled("div")`
  width: 40px;
  height: 40px;
  margin-right: 30px;
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

export const RightHeaderWrap = styled("div")`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

export const ButtonWrap = styled("div")``;

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
