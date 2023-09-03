import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";

export const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled("div")`
  width: 512px;
  height: 552px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 10px;
`;

export const Title = styled("div")`
  width: 100%;
  height: 111px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #f5f6f7;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;

  span {
    padding: 0 50px;
  }

  .main_title {
    font-size: 18px;
    font-weight: 700;
    color: #091e42;
  }

  .sub_title {
    font-size: 14px;
    font-weight: 400;
    color: #7a8699;
  }
`;

export const Content = styled("div")`
  width: calc(100% - 100px);
  display: flex;
  flex-direction: column;
  gap: 55px;
  padding: 25px 0;

  span {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
  }

  .bold {
    font-weight: bold;
  }
`;

export const JoinerWrap = styled("div")<{ isOwner: boolean }>`
  width: 370px;
  height: ${(props) => (props.isOwner ? 230 : 270)}px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid #f5f6f7;
  border-radius: 10px;
`;

export const JoinerTitle = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const JoinerListWrap = styled("div")`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const JoinerList = styled("div")`
  min-height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  overflow-y: auto;

  span {
    flex: 10;
  }
`;

export const AvatarWrap = styled("div")`
  display: flex;
  justify-content: flex-end;
  flex: 2;
`;

export const ActiveWrap = styled("div")`
  flex: 1;
`;

export const Active = styled("div")<{ isActive: boolean }>`
  width: 15px;
  height: 15px;
  background-color: ${(props) => (props.isActive ? "#00b18c" : "#f36262")};
  border-radius: 10px;
`;

export const ButtonWrap = styled("div")`
  width: 410px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
`;
