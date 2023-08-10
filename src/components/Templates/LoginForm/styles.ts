import { styled } from "@mui/material/styles";

export const Container = styled("div")`
  width: 446.31px;
  height: 588px;
  margin: 0 auto;
  border: 1px solid #eaeaea;
  border-radius: 10px;
`;

export const InnerContainer = styled("div")`
  padding: 40px;
  display: flex;
  flex-direction: column;
`;

export const FlexWrap = styled("div")<{ gap: number }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap}px;
`;

export const Text = styled("div")`
  width: 100%;
  height: 80.58px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  background-image: linear-gradient(to right, #6e72fc, #ad1deb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
