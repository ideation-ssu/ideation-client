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
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
`;

export const Idea = styled("div")`
  height: 95px;
  display: flex;
  gap: 8px;
  user-select: none;
  margin: 8px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
`;

export const IdeaInner = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 20px;

  span {
    font-size: 15px;
  }
`;

export const IdeaTop = styled("div")``;

export const IdeaBottom = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HashTagWrap = styled("div")`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

export const HashTag = styled("div")`
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 5px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: bold;
  background-color: #d6f0e0;
  color: #0d6832;
`;

export const ReactionWrap = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;

  span {
    color: #7b40f2;
  }
`;

export const StatusTitle = styled("div")`
  height: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;

  &.NOT_STARTED {
    width: 103px;
    color: #e94e7c;
    background: rgba(233, 78, 124, 0.04);
  }

  &.IN_PROGRESS {
    width: 88px;
    color: #f79942;
    background: rgba(245, 161, 83, 0.04);
  }

  &.DONE {
    width: 57px;
    color: #4fb1f9;
    background: rgba(83, 177, 245, 0.04);
  }
`;
