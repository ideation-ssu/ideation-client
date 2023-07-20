import { styled } from "@mui/material/styles";

export const Check = styled("div")<{ isChecked: boolean }>`
  background-image: ${(props) =>
    props.isChecked
      ? `url("data:image/svg+xml,%0A%3Csvg width='9' height='7' viewBox='0 0 9 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.2002 3.49977L3.4002 5.69977L8.16686 0.933105' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")`
      : `transparent`};
  background-color: ${(props) => (props.isChecked ? "#7b40f2" : "none")};
  background-repeat: no-repeat;
  background-position: center center;
  width: 11px;
  height: 11px;
  border: ${(props) => (props.isChecked ? "none" : "1px solid #d9d9d9")};
  border-radius: 2px;
  box-sizing: border-box;
`;
