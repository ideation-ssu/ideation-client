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
  background-color: #f8f8f8;
`;

export const Content = styled("div")`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 35px;
`;

export const Header = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  &.title {
    margin: 0;
  }
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
  cursor: pointer;
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

export const SearchIcon = styled("div")`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='22' height='19' viewBox='0 0 22 19' fill='none'%3E%3Cpath d='M17.635 17.2928C15.8957 15.6971 13.2699 15.6835 10.948 16.1078C10.1114 16.2607 9.24823 16.3032 8.38453 16.2286C6.13954 16.0344 4.05958 15.0627 2.56801 13.5112C1.07645 11.9598 0.285403 9.94515 0.3559 7.87746C0.426398 5.80977 1.35314 3.84444 2.94748 2.38152C4.5421 0.918855 6.68436 0.0686544 8.93819 0.00397931C11.192 -0.0606958 13.388 0.665017 15.0792 2.03339C16.7703 3.40177 17.8295 5.30996 18.0411 7.36953C18.089 7.83589 18.0926 8.30208 18.0536 8.76323C17.8269 11.437 17.7803 14.5525 19.7576 16.3665L20.7097 17.24C20.8556 17.3643 20.9622 17.5223 21.0184 17.6975C21.0745 17.8727 21.0782 18.0585 21.0289 18.2355C20.9795 18.4124 20.8791 18.5738 20.7382 18.7028C20.5973 18.8317 20.421 18.9234 20.2281 18.9682C20.0354 19.0135 19.8331 19.0103 19.6422 18.9591C19.4514 18.9078 19.2791 18.8103 19.1436 18.6768L17.635 17.2928ZM15.8636 8.13136C15.8767 7.32297 15.7145 6.52026 15.3864 5.76991C15.0583 5.01956 14.5708 4.33656 13.9523 3.76064C13.3338 3.18471 12.5967 2.72736 11.7838 2.41519C10.9709 2.10302 10.0984 1.94225 9.21716 1.94225C8.3359 1.94225 7.46344 2.10302 6.65052 2.41519C5.83761 2.72736 5.10047 3.18471 4.48199 3.76064C3.86351 4.33656 3.37603 5.01956 3.04791 5.76991C2.71979 6.52026 2.55758 7.32297 2.57072 8.13136C2.59675 9.73277 3.30844 11.2605 4.55206 12.3845C5.79568 13.5086 7.47138 14.1386 9.21716 14.1386C10.9629 14.1386 12.6386 13.5086 13.8823 12.3845C15.1259 11.2605 15.8376 9.73277 15.8636 8.13136Z' fill='%23CCCCCC'/%3E%3C/svg%3E");
  background-size: cover;
  width: 20px;
  height: 19px;
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
