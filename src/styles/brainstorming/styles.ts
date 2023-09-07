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

export const SendBtn = styled("div")`
  width: 70px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #713edc;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;
`;

export const SendIcon = styled("div")`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='35' height='35' viewBox='0 0 35 35' fill='none'%3E%3Cpath d='M14.2015 20.3333L32.5348 2M14.2015 20.3333L20.0348 32C20.1079 32.1596 20.2253 32.2948 20.373 32.3896C20.5208 32.4844 20.6926 32.5348 20.8681 32.5348C21.0436 32.5348 21.2155 32.4844 21.3632 32.3896C21.5109 32.2948 21.6283 32.1596 21.7015 32L32.5348 2M14.2015 20.3333L2.53479 14.5C2.37522 14.4269 2.24 14.3095 2.1452 14.1618C2.05039 14.014 2 13.8422 2 13.6667C2 13.4911 2.05039 13.3193 2.1452 13.1716C2.24 13.0239 2.37522 12.9065 2.53479 12.8333L32.5348 2' stroke='white' stroke-width='3.33333' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-size: cover;
  width: 30px;
  height: 30px;
`;

export const Footer = styled("div")`
  width: 80%;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, -50%);
`;
