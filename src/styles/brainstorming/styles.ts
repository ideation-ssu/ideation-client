import { styled } from "@mui/material/styles";

export const Container = styled("div")`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  background-color: #f8f8f8;
  background-image: linear-gradient(0deg, transparent 34px, #e9e9e9 34px),
    linear-gradient(90deg, transparent 34px, #e9e9e9 34px);
  background-size: 35px 35px;
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

export const ButtonWrap = styled("div")``;
