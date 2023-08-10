import { styled } from "@mui/material/styles";

export const Label = styled("div")<{ colorful: string }>`
  width: 239.53px;
  padding-bottom: ${(props) => (props.colorful === "true" ? "0" : "40px")};

  white-space: pre-wrap;
  font-weight: 700;
  font-size: 30px;
  line-height: 36.31px;
  text-shadow: ${(props) =>
    props.colorful === "false" &&
    "-1px 0px #eaeaea, 0px 1px #eaeaea, 1px 0px #eaeaea, 0px -1px #eaeaea"};
  text-align: ${(props) => (props.colorful === "true" ? "center" : "unset")};
  margin: ${(props) => (props.colorful === "true" ? "auto" : "none")};

  ${(props) =>
    props.colorful === "true" &&
    `
    background: linear-gradient(to right, #713edc, #6e72fc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `}
`;
