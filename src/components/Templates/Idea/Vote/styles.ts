import MuiSearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";

export const Header = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  &.profile {
    justify-content: flex-end;
  }
  &.search,
  &.rate {
    justify-content: space-between;
  }
`;

export const ButtonWrap = styled("div")`
  display: flex;
  flex-direction: row;
  width: 118px;
  gap: 10px;
`;

export const ProfileImg = styled("div")`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64' fill='none'%3E%3Cg clip-path='url(%23clip0_273_3027)'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M32.0006 5.33325C17.2727 5.33325 5.33398 17.2719 5.33398 31.9999C5.33398 46.7279 17.2727 58.6666 32.0006 58.6666C46.7286 58.6666 58.6673 46.7279 58.6673 31.9999C58.6673 17.2719 46.7286 5.33325 32.0006 5.33325ZM22.6673 25.3333C22.6673 24.1076 22.9087 22.8939 23.3778 21.7615C23.8468 20.6292 24.5343 19.6003 25.401 18.7336C26.2677 17.8669 27.2966 17.1794 28.4289 16.7104C29.5613 16.2413 30.775 15.9999 32.0006 15.9999C33.2263 15.9999 34.44 16.2413 35.5724 16.7104C36.7047 17.1794 37.7336 17.8669 38.6003 18.7336C39.467 19.6003 40.1545 20.6292 40.6235 21.7615C41.0926 22.8939 41.334 24.1076 41.334 25.3333C41.334 27.8086 40.3507 30.1826 38.6003 31.9329C36.85 33.6833 34.476 34.6666 32.0006 34.6666C29.5253 34.6666 27.1513 33.6833 25.401 31.9329C23.6506 30.1826 22.6673 27.8086 22.6673 25.3333ZM48.6886 45.2906C46.6925 47.8016 44.1548 49.8291 41.2651 51.2218C38.3754 52.6145 35.2084 53.3362 32.0006 53.3332C28.7929 53.3362 25.6259 52.6145 22.7362 51.2218C19.8465 49.8291 17.3088 47.8016 15.3127 45.2906C19.6353 42.1892 25.534 39.9999 32.0006 39.9999C38.4673 39.9999 44.366 42.1892 48.6886 45.2906Z' fill='%23EAEAEA'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_273_3027'%3E%3Crect width='64' height='64' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
  background-size: 53px;
  width: 53px;
  height: 53px;
`;

export const TitleWrap = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
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

export const SliderWrap = styled("div")`
  display: flex;
  flex-direction: column;

  span {
    font-size: 8px;
    color: #6e6e6e;
    text-align: right;
    margin-top: 4px;
  }
`;
export const SliderBackground = styled("div")`
  width: 374px;
  height: 28px;
  background-color: #eaeaea;
  border-radius: 100px;
`;

export const Slider = styled("div")<{ total: number; count: number }>`
  width: ${(props) => `calc(100% / ${props.total} * ${props.count})`};
  height: 100%;
  background-color: #00b18c;
  border-radius: 100px;
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

export const Content = styled("div")`
  width: 73%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 15px;

  span {
    &.name {
      font-size: 20px;
    }

    &.email {
      font-size: 12px;
    }
  }
`;

export const Table = styled("table")`
  width: 100%;
  height: 100%;
`;

export const TableHead = styled("thead")``;

export const TableHeader = styled("th")`
  padding: 10px 5px;
  background-color: #f9f9f9;
  flex: 1;
  font-size: 13px;
  color: #6e6e6e;
  &.assign {
    border-top-left-radius: 100px;
    border-bottom-left-radius: 100px;
  }

  &.idea-name {
  }

  &.category {
  }

  &.liked {
  }

  &.relations {
  }

  &.vote {
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
  }
`;

export const TableRow = styled("tr")<{ isFill?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 7px;

  &.body {
    background-color: ${(props) =>
      props.isFill ? "rgba(113, 62, 220, 0.05)" : "rgba(113, 62, 220, 0.02)"};
    border-radius: 5px;
  }
`;

export const TableData = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 5px;
  flex: 1;
  &.assign {
  }

  &.title {
    font-weight: bold;
  }

  &.category {
  }

  &.liked {
  }

  &.relations {
  }

  &.vote {
  }
`;

export const Category = styled("div")`
  width: 66px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #7b40f2;
  border-radius: 20px;
  font-size: 14px;
`;

export const CommentIcon = styled("div")`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='14' viewBox='0 0 16 14' fill='none'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.4141 0C14.5186 0 15.4141 0.895431 15.4141 2V8.57404C15.4141 9.67861 14.5186 10.574 13.4141 10.574H10.0182V12.7388C10.0182 13.1401 9.56915 13.3779 9.23719 13.1524L5.44272 10.574H1.99697C0.892406 10.574 -0.00302505 9.67861 -0.00302505 8.57404V2C-0.00302505 0.895431 0.892406 0 1.99698 0H13.4141Z' fill='%237B40F2'/%3E%3C/svg%3E");
  background-size: cover;
  width: 15px;
  height: 13px;
`;
