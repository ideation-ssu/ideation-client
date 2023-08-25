import MuiSearchIcon from "@mui/icons-material/Search";
import Grid from "@mui/material/Grid";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";

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
  gap: 10px;

  button {
    width: auto;
  }
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
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex: 1;
  gap: 20px;
`;

export const ProcessCard = styled("div")`
  width: 33%;
  max-height: 68vh;
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
