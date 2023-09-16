import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";

export const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled("div")`
  width: 512px;
  height: 406px;
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
  gap: 110px;
  padding: 45px 0;
`;

export const ButtonWrap = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;

  button {
    width: max-content;
  }
`;
