import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

export const Container = styled("div")`
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const GridBox = styled("div")`
  width: 94%;
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: 25px;
  margin-left: 0;
  padding: 30px;
  border-radius: 5px;
  background-color: #fff;
  overflow-x: scroll;
`;

export const Inner = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

export const AnalysisWrap = styled("div")`
  display: flex;
  flex-direction: column;
  flex: 6;
  gap: 15px;
`;

export const SubTitle = styled("div")`
  font-size: 15px;
`;

export const AnalysisTop = styled("div")`
  display: flex;
  flex-direction: row;
  flex: 4;
  gap: 15px;
`;

export const TimerWrap = styled("div")`
  display: flex;
  flex-direction: column;
  flex: 4;
  gap: 5px;

  span {
    font-size: 50px;
    font-weight: bold;
    color: #7d40ff;
  }
`;

export const TimerIcon = styled("div")`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='47' height='57' viewBox='0 0 47 57' fill='none'%3E%3Cpath d='M23.5 54.249C34.8218 54.249 44 45.0709 44 33.749C44 22.4272 34.8218 13.249 23.5 13.249C12.1782 13.249 3 22.4272 3 33.749C3 45.0709 12.1782 54.249 23.5 54.249Z' stroke='%23713EDC' stroke-width='5'/%3E%3Cpath d='M28.6328 3H18.3828M23.5078 3V13.25M37.6016 18.375L41.4453 14.5312M23.5078 26.0625V33.75H15.8203' stroke='%23713EDC' stroke-width='5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-size: cover;
  width: 41px;
  height: 51px;
`;

export const Content = styled("div")<{ direction: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: #f8f8ff;
  border-radius: 10px;
`;

export const IdeaAnalysisWarp = styled("div")`
  display: flex;
  flex-direction: column;
  flex: 6;
  gap: 5px;
`;

export const AnalysisBottom = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 6;
`;

export const IdeaList = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 4;
`;
