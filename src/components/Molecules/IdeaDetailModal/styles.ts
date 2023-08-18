import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
export const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrap = styled("div")`
  width: 668px;
  height: 679px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
`;

export const Container = styled("div")`
  width: 600px;
  height: 555px;
`;

export const Category = styled("div")`
  width: 66px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: #7b40f2;
  color: #fff;
`;

export const Title = styled("div")`
  font-size: 16px;
  font-weight: bold;
  color: #6e6e6e;
  padding-left: 3px;
`;

export const Name = styled("div")`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 13px;
  color: #000;
`;

export const Date = styled("div")`
  font-size: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #bdbdbd;
`;

export const Content = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 5px;
`;

export const MainText = styled("div")`
  height: 170px;
  font-size: 14px;
  line-height: 21.5px;
  overflow-y: auto;
`;

export const HashTagWrap = styled("div")`
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
`;

export const HashTag = styled("div")`
  width: 74px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
  border-radius: 4px;
  background-color: #d6f0e0;
  color: #0d6832;
`;

export const LikeWrap = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
  color: #d9d9d9;
`;

export const LikeIcon = styled("div")<{ isLiked: boolean }>`
  background-image: ${(props) =>
    props.isLiked
      ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='21' height='19' viewBox='0 0 21 19' fill='none'%3E%3Cpath d='M10.8867 18.1818L9.43672 16.8739C4.28672 12.2467 0.886719 9.18504 0.886719 5.44959C0.886719 2.38791 3.30672 0 6.38672 0C8.12672 0 9.79672 0.802576 10.8867 2.06094C11.9767 0.802576 13.6467 0 15.3867 0C18.4667 0 20.8867 2.38791 20.8867 5.44959C20.8867 9.18504 17.4867 12.2467 12.3367 16.8739L10.8867 18.1818Z' fill='%237B40F2'/%3E%3C/svg%3E")`
      : `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='19' viewBox='0 0 20 19' fill='none'%3E%3Cpath d='M10 18.1818L8.55 16.8739C3.4 12.2467 0 9.18504 0 5.44959C0 2.38791 2.42 0 5.5 0C7.24 0 8.91 0.802576 10 2.06094C11.09 0.802576 12.76 0 14.5 0C17.58 0 20 2.38791 20 5.44959C20 9.18504 16.6 12.2467 11.45 16.8739L10 18.1818Z' fill='%23D9D9D9'/%3E%3C/svg%3E")`};
  background-size: cover;
  width: 16px;
  height: 14px;
  cursor: pointer;
`;

export const StyledTabs = styled(Tabs)`
  &.MuiTabs-root {
    min-height: 25px;
  }

  .MuiTabs-flexContainer {
    display: flex;
    flex-direction: row;
    gap: 6px;
  }

  .MuiButtonBase-root {
    min-width: 30px;
    min-height: 25px;
    padding: 0;
    font-size: 10px;
    color: #d9d9d9;

    &.Mui-selected {
      color: #6e6e6e;
    }
  }

  .MuiTabs-indicator {
    background-color: #6e6e6e;
  }
`;

export const Panel = styled("div")`
  padding: 13px 5px;
`;
