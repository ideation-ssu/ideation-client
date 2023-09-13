import { styled } from "@mui/material/styles";

export const Container = styled("div")`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #f8f8f8;
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
