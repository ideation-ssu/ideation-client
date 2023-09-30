import MuiSearchIcon from "@mui/icons-material/Search";
import { Chip } from "@mui/material";
import AvatarGroup from "@mui/material/AvatarGroup";
import Grid from "@mui/material/Grid";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";

export const Header = styled("div")`
  display: flex;
  align-items: center;
  &.profile {
    justify-content: flex-end;
  }
  &.search {
    justify-content: space-between;
  }
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

export const ButtonWrap = styled("div")`
  display: flex;
  flex-direction: row;
  gap: 10px;

  button {
    width: auto;
  }
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

export const IdeaContent = styled("div")`
  width: 100%;
  padding: 10px 10px;
  display: flex;
  flex-direction: row;
`;

export const IdeaHandleIcon = styled("div")`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='3' height='14' viewBox='0 0 3 14' fill='none'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M3 1.55556C3 2.41465 2.32841 3.11111 1.5 3.11111C0.671587 3.11111 0 2.41465 0 1.55556C0 0.696446 0.671587 0 1.5 0C2.32841 0 3 0.696446 3 1.55556ZM1.5 8.55556C2.32841 8.55556 3 7.8591 3 7C3 6.14091 2.32841 5.44445 1.5 5.44445C0.671587 5.44445 0 6.14091 0 7C0 7.8591 0.671587 8.55556 1.5 8.55556ZM1.5 14C2.32841 14 3 13.3035 3 12.4444C3 11.5854 2.32841 10.8889 1.5 10.8889C0.671587 10.8889 0 11.5854 0 12.4444C0 13.3035 0.671587 14 1.5 14Z' fill='%236E6E6E'/%3E%3C/svg%3E");
  background-size: cover;
  width: 3px;
  height: 14px;
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
  position: relative;

  span {
    font-size: 15px;
  }
`;

export const IdeaTop = styled("div")`
  display: flex;
  align-items: flex-start;
`;

export const UserGroup = styled(AvatarGroup)<{ src: string }>`
  div:first-of-type {
    width: 33px;
    height: 33px;
    z-index: 1;
    background-image: ${(props) => (props.src ? `url(${props.src})` : "none")};
    background-size: cover;
    background-color: transparent;
    background-position: 50% 50%;
    font-size: 15px;
    font-family: Pretendard, sans-serif;
  }

  div:first-of-type::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: -1;
  }

  div:nth-of-type(2) {
    z-index: 2;
  }

  .MuiAvatar-root {
    border: none;
  }
`;

export const IdeaTitleText = styled("p")`
  width: 0;
  flex-grow: 1;
  margin: 0 0 0 10px;
  font-size: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

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
  margin-left: 10px;
`;

export const HashTag = styled("div")<{
  color: string;
  backgroundColor: string;
}>`
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 5px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: bold;
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const ReactionWrap = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;

  span {
    color: #d9d9d9;
  }

  .isLiked {
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
