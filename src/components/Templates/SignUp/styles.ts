import { styled } from "@mui/material/styles";

export const Container = styled("div")`
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const InnerContainer = styled("div")`
  padding: 40px;
  display: flex;
  flex-direction: column;

  &.more-padding {
    padding-top: 100px;
  }
`;

export const Text = styled("div")`
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  letter-spacing: 0;
  text-align: center;

  &.guide {
    font-size: 10px;
    line-height: 12px;
    color: #bdbdbd;

    position: relative;
    bottom: -30px;
  }

  &.login {
    width: fit-content;
    margin-left: auto;
    color: #bdbdbd;
    font-size: 10px;
    line-height: 12px;
    cursor: pointer;
  }

  &.welcome {
    font-size: 20px;
    line-height: 24px;
  }
`;

export const Circle = styled("div")`
  width: 132px;
  height: 132px;
  background-color: #713edc;
  border-radius: 70px;
  margin: auto;
`;
