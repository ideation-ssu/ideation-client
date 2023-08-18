import MuiSearchIcon from "@mui/icons-material/Search";
import Grid from "@mui/material/Grid";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";

export const Container = styled(Grid)`
  width: 100%;
  height: 100%;
  gap: 25px;
  display: flex;
  flex-direction: column;
  margin-left: 0;
  margin-top: 0;
  background-color: transparent;
`;

export const Header = styled("div")`
  display: flex;
  &.profile {
    justify-content: flex-end;
  }
  &.search {
    justify-content: space-between;
  }
`;

export const ButtonWrap = styled("div")`
  display: flex;
  flex-direction: row;
  width: 261px;
  gap: 10px;
`;

export const ProfileImg = styled("div")`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64' fill='none'%3E%3Cg clip-path='url(%23clip0_273_3027)'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M32.0006 5.33325C17.2727 5.33325 5.33398 17.2719 5.33398 31.9999C5.33398 46.7279 17.2727 58.6666 32.0006 58.6666C46.7286 58.6666 58.6673 46.7279 58.6673 31.9999C58.6673 17.2719 46.7286 5.33325 32.0006 5.33325ZM22.6673 25.3333C22.6673 24.1076 22.9087 22.8939 23.3778 21.7615C23.8468 20.6292 24.5343 19.6003 25.401 18.7336C26.2677 17.8669 27.2966 17.1794 28.4289 16.7104C29.5613 16.2413 30.775 15.9999 32.0006 15.9999C33.2263 15.9999 34.44 16.2413 35.5724 16.7104C36.7047 17.1794 37.7336 17.8669 38.6003 18.7336C39.467 19.6003 40.1545 20.6292 40.6235 21.7615C41.0926 22.8939 41.334 24.1076 41.334 25.3333C41.334 27.8086 40.3507 30.1826 38.6003 31.9329C36.85 33.6833 34.476 34.6666 32.0006 34.6666C29.5253 34.6666 27.1513 33.6833 25.401 31.9329C23.6506 30.1826 22.6673 27.8086 22.6673 25.3333ZM48.6886 45.2906C46.6925 47.8016 44.1548 49.8291 41.2651 51.2218C38.3754 52.6145 35.2084 53.3362 32.0006 53.3332C28.7929 53.3362 25.6259 52.6145 22.7362 51.2218C19.8465 49.8291 17.3088 47.8016 15.3127 45.2906C19.6353 42.1892 25.534 39.9999 32.0006 39.9999C38.4673 39.9999 44.366 42.1892 48.6886 45.2906Z' fill='%23EAEAEA'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_273_3027'%3E%3Crect width='64' height='64' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
  background-size: 53px;
  width: 53px;
  height: 53px;
`;

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

export const CardContainer = styled("div")`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex: 1;
  gap: 20px;
`;

export const ProcessCard = styled("div")`
  width: 33%;
  padding: 15px;
  border-radius: 5px;
  background-color: #ffffff;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const Idea = styled("div")`
  height: 95px;
  display: flex;
  gap: 8px;
  user-select: none;
  padding: 10px;
  margin: 8px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
`;

export const DragIcon = styled("div")`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='9' height='14' viewBox='0 0 9 14' fill='none'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M2.76923 1.50502C2.76923 2.3362 2.1493 3.01003 1.38462 3.01003C0.619927 3.01003 0 2.3362 0 1.50502C0 0.673819 0.619927 0 1.38462 0C2.1493 0 2.76923 0.673819 2.76923 1.50502ZM1.38462 8.27759C2.1493 8.27759 2.76923 7.60376 2.76923 6.77258C2.76923 5.94139 2.1493 5.26756 1.38462 5.26756C0.619927 5.26756 0 5.94139 0 6.77258C0 7.60376 0.619927 8.27759 1.38462 8.27759ZM1.38462 13.5452C2.1493 13.5452 2.76923 12.8713 2.76923 12.0401C2.76923 11.209 2.1493 10.5351 1.38462 10.5351C0.619927 10.5351 0 11.209 0 12.0401C0 12.8713 0.619927 13.5452 1.38462 13.5452Z' fill='%236E6E6E'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8.9997 1.50502C8.9997 2.3362 8.37977 3.01003 7.61508 3.01003C6.8504 3.01003 6.23047 2.3362 6.23047 1.50502C6.23047 0.673819 6.8504 0 7.61508 0C8.37977 0 8.9997 0.673819 8.9997 1.50502ZM7.61508 8.27759C8.37977 8.27759 8.9997 7.60376 8.9997 6.77258C8.9997 5.94139 8.37977 5.26756 7.61508 5.26756C6.8504 5.26756 6.23047 5.94139 6.23047 6.77258C6.23047 7.60376 6.8504 8.27759 7.61508 8.27759ZM7.61508 13.5452C8.37977 13.5452 8.9997 12.8713 8.9997 12.0401C8.9997 11.209 8.37977 10.5351 7.61508 10.5351C6.8504 10.5351 6.23047 11.209 6.23047 12.0401C6.23047 12.8713 6.8504 13.5452 7.61508 13.5452Z' fill='%236E6E6E'/%3E%3C/svg%3E");
  background-size: cover;
  width: 9px;
  height: 13.5px;
`;

export const StatusTitle = styled("div")`
  height: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;

  &.not_started {
    width: 103px;
    color: #e94e7c;
    background: rgba(233, 78, 124, 0.04);
  }

  &.progress {
    width: 88px;
    color: #f79942;
    background: rgba(245, 161, 83, 0.04);
  }

  &.done {
    width: 57px;
    color: #4fb1f9;
    background: rgba(83, 177, 245, 0.04);
  }
`;
