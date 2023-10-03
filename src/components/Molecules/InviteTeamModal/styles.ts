import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";

export const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled("div")<{ existInviteUser: boolean }>`
  width: 512px;
  height: ${(props) => (props.existInviteUser ? "552" : "406")}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  position: relative;
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
  gap: 12px;
  padding: 45px 0;

  > .modal-text-content {
    text-align: center;
    font-size: 18px;

    > span {
      font-weight: bold;
    }
  }
`;

export const InputBoxWrap = styled("div")`
  width: 100%;
  height: 54px;
`;

export const EmailList = styled("div")<{ existInviteUser: boolean }>`
  width: 100%;
  height: 234px;
  display: ${(props) => (props.existInviteUser ? "block" : "none")};
  overflow-y: auto;
  border: 1px solid #f5f6f7;
  border-radius: 10px;
`;

export const ListInner = styled("div")`
  padding: 10px;
  span {
    font-size: 12px;
  }
`;

export const Item = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px;

  span {
    font-size: 14px;
    font-weight: bold;
  }
`;

export const ButtonWrap = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
  position: absolute;
  bottom: 35px;
  right: 47px;

  button {
    width: max-content;
  }
`;
