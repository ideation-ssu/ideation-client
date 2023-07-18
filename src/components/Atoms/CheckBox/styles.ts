import { styled } from "@mui/material/styles";

export const Check = styled("div")<{ isChecked: boolean }>`
  background-image: url("data:image/svg+xml,%0A%3Csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.03317 13.7529C10.7012 13.7529 13.6747 10.7793 13.6747 7.11129C13.6747 3.44325 10.7012 0.469719 7.03317 0.469719C3.36513 0.469719 0.391602 3.44325 0.391602 7.11129C0.391602 10.7793 3.36513 13.7529 7.03317 13.7529Z' fill='%23713EDC'/%3E%3Cpath d='M11.0179 4.89746L6.29504 9.32517L3.93359 7.11132' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
  background-size: 13.28px;
  width: 13.28px;
  height: 13.28px;
`;
