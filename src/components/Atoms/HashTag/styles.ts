import { styled } from "@mui/material/styles";

export const Container = styled("div")`
  height: 35px;
  display: flex;
  flex-direction: row;
`;

export const Tag = styled("div")`
  width: auto;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-left: 6px;

  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(270deg, #6e72fc 0%, #ad1deb 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-sizing: border-box;

  span {
    padding-left: 12px;
    font-size: 13px;
    background-image: radial-gradient(#4f4f4f, #4f4f4f);
  }
`;

export const CancelButton = styled("div")`
  background-image: url("data:image/svg+xml,%0A%3Csvg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath id='Vector' d='M9.70404 1.70779C10.0945 1.31735 10.0945 0.683273 9.70404 0.292831C9.3136 -0.0976105 8.67952 -0.0976105 8.28908 0.292831L5 3.58504L1.70779 0.295955C1.31735 -0.094487 0.683273 -0.094487 0.292831 0.295955C-0.0976105 0.686397 -0.0976105 1.32047 0.292831 1.71092L3.58504 5L0.295955 8.29221C-0.0944869 8.68265 -0.0944869 9.31673 0.295955 9.70717C0.686397 10.0976 1.32047 10.0976 1.71092 9.70717L5 6.41496L8.29221 9.70404C8.68265 10.0945 9.31673 10.0945 9.70717 9.70404C10.0976 9.3136 10.0976 8.67952 9.70717 8.28908L6.41496 5L9.70404 1.70779Z' fill='%23AFAFAF'/%3E%3C/svg%3E%0A");
  background-size: cover;
  width: 10px;
  height: 10px;
  cursor: pointer;
  margin-right: 12px;
`;
