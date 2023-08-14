import { styled } from "@mui/material/styles";

export const Container = styled("div")`
  display: flex;
  flex-direction: row;
  gap: 13px;
`;

export const RadioButton = styled("div")<{ isSelected: boolean }>`
  width: 66px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) =>
    props.isSelected ? "#7b40f2" : "transparent"};
  color: ${(props) => (props.isSelected ? "#ffffff" : "#bdbdbd")};
  border: 1px solid ${(props) => (props.isSelected ? "#7b40f2" : "#bdbdbd")};
  border-radius: 20px;
`;
