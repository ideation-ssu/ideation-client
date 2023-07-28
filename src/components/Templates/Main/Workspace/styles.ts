import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

export const Container = styled("div")`
  height: 100dvh;
  display: flex;
  align-items: center;
`;

export const StyledGrid = styled(Grid)`
  display: flex;
  width: 283px;
  height: 142px;
  gap: 25px;
  background-color: white;
  border-radius: 5px;

  &.container {
    width: 100%;
    height: 70vh;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 30px;
    margin-left: 0;
    background-color: transparent;
  }

  &.add-project {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #7b40f2;
    cursor: pointer;
    span {
      font-family: Pretendard, sans-serif;
      font-size: 15px;
      color: #ffffff;
    }
  }
`;

export const PlusIcon = styled("div")`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='45' height='45' viewBox='0 0 45 45' fill='none'%3E%3Cpath d='M39.375 16.875H28.125V5.625C28.125 4.13316 27.5324 2.70242 26.4775 1.64752C25.4226 0.592632 23.9918 0 22.5 0C21.0082 0 19.5774 0.592632 18.5225 1.64752C17.4676 2.70242 16.875 4.13316 16.875 5.625L17.0747 16.875H5.625C4.13316 16.875 2.70242 17.4676 1.64752 18.5225C0.592632 19.5774 0 21.0082 0 22.5C0 23.9918 0.592632 25.4226 1.64752 26.4775C2.70242 27.5324 4.13316 28.125 5.625 28.125L17.0747 27.9253L16.875 39.375C16.875 40.8668 17.4676 42.2976 18.5225 43.3525C19.5774 44.4074 21.0082 45 22.5 45C23.9918 45 25.4226 44.4074 26.4775 43.3525C27.5324 42.2976 28.125 40.8668 28.125 39.375V27.9253L39.375 28.125C40.8668 28.125 42.2976 27.5324 43.3525 26.4775C44.4074 25.4226 45 23.9918 45 22.5C45 21.0082 44.4074 19.5774 43.3525 18.5225C42.2976 17.4676 40.8668 16.875 39.375 16.875Z' fill='white'/%3E%3C/svg%3E");
  background-size: cover;
  width: 45px;
  height: 45px;
`;

export const Category = styled("div")<{ color: string }>`
  width: 17px;
  height: 100%;
  background-color: ${(props) => props.color};
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;
