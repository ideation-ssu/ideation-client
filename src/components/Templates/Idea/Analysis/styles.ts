import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

export const Container = styled("div")`
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const GridBox = styled("div")`
  display: flex;
  flex: 1;
  flex-direction: row;
  gap: 25px;
  margin-left: 0;
  padding: 30px;
  border-radius: 5px;
  background-color: #fff;
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

  &.idea-list {
    justify-content: flex-start;
    overflow-y: auto;
    padding: 20px 10px;
    flex: 1;
  }
`;

export const IdeaListWrap = styled("div")`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  background-color: #f8f8ff;
  border-radius: 10px;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 20px 10px;
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
  flex: 1;
`;

export const IdeaList = styled("div")`
  height: 630px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 4;
`;

export const IdeaWrap = styled("div")`
  width: 95%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  padding: 10px;
  border-radius: 10px;
  background-color: #f3edff;

  :nth-child(1) {
    background-color: #7d40ff;
  }
  :nth-child(2) {
    background-color: #9c6cff;
  }
  :nth-child(3) {
    background-color: #c7acff;
  }

  :nth-child(1) span.title,
  :nth-child(2) span.title,
  :nth-child(3) span.title {
    font-size: 20px;
    color: #fff;
  }

  :nth-child(1) span.name,
  :nth-child(2) span.name,
  :nth-child(3) span.name {
    font-size: 10px;
    color: #fff;
  }
`;

export const IdeaTitleInfo = styled("div")`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 5px;

  span.title {
    font-size: 20px;
    color: #000;
  }
  span.name {
    font-size: 13px;
    color: #000;
  }
`;

export const IconWrap = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const HeartIcon = styled("div")<{ isDark: boolean }>`
  background-image: ${(props) =>
    props.isDark
      ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='14' viewBox='0 0 16 14' fill='none'%3E%3Cpath d='M7.65145 13.7625L6.54199 12.7725C2.60149 9.27 0 6.9525 0 4.125C0 1.8075 1.85165 0 4.2083 0C5.53965 0 6.81744 0.6075 7.65145 1.56C8.48546 0.6075 9.76325 0 11.0946 0C13.4512 0 15.3029 1.8075 15.3029 4.125C15.3029 6.9525 12.7014 9.27 8.76091 12.7725L7.65145 13.7625Z' fill='black'/%3E%3C/svg%3E");`
      : `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='14' viewBox='0 0 16 14' fill='none'%3E%3Cpath d='M7.65145 13.7625L6.54199 12.7725C2.60149 9.27 0 6.9525 0 4.125C0 1.8075 1.85165 0 4.2083 0C5.53965 0 6.81744 0.6075 7.65145 1.56C8.48546 0.6075 9.76325 0 11.0946 0C13.4512 0 15.3029 1.8075 15.3029 4.125C15.3029 6.9525 12.7014 9.27 8.76091 12.7725L7.65145 13.7625Z' fill='white'/%3E%3C/svg%3E");`}
  background-size: cover;
  width: 17px;
  height: 15px;
`;

export const LikeCount = styled("span")<{ isDark: boolean }>`
  font-size: 15px;
  color: ${(props) => (props.isDark ? "#000" : "#fff")};
  padding-bottom: 2px;
`;
