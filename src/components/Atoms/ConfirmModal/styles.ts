import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";

export const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled("div")`
  width: 358px;
  height: 210px;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  background-color: white;
  border-radius: 10px;
`;

export const Message = styled("div")`
  font-size: 20px;
  text-align: center;
`;

export const Content = styled("div")`
  width: 326px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-bottom: 30px;
`;
