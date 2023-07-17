import { Divider } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Card = styled("div")`
  width: 446.31px;
  height: 588px;
  margin: 0 auto;
  border: 1px solid #eaeaea;
  border-radius: 10px;
`;

export const Text = styled("div")`
  width: 100%;
  height: 80.58px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: NotoSans, sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  background-image: linear-gradient(to right, #6e72fc, #ad1deb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const StyledDriver = styled(Divider)`
  border-color: #eaeaea;
`;
