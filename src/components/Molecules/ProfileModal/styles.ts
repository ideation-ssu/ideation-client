import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";

export const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrap = styled("div")`
  width: 290px;
  height: 340px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 16px;
`;

export const TextWrap = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const StyledText = styled("div")`
  font-size: 16px;
  color: #000;

  &.name {
    font-size: 24px;
    font-width: bold;
  }

  &.job {
    color: #555555;
  }
`;
