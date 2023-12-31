import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";

export const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled("div")`
  width: 615px;
  height: 479px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
`;

export const Title = styled("div")`
  padding: 20px;
  text-align: center;
  span {
    font-size: 20px;
    background: linear-gradient(88deg, #6e72fc 0%, #ad1deb 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const Content = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 50px 40px 0;
`;

export const Grid = styled("div")`
  display: flex;
  flex-direction: row;
`;

export const Line = styled("div")<{ rate: number; isAlignCenter?: boolean }>`
  display: flex;
  flex-direction: row;
  flex: ${(props) => props.rate};
  align-items: center;
  justify-content: ${(props) =>
    props.isAlignCenter ? "center" : "flex-start"};

  span {
    font-size: 20px;
    padding-left: 10px;
    background: linear-gradient(88deg, #6e72fc 0%, #713edc 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
Line.defaultProps = {
  isAlignCenter: false, // 기본값 지정
};

export const SubTitleBar = styled("div")`
  width: 3px;
  height: 25px;
  background: linear-gradient(90deg, #713edc 0%, #6e72fc 100%);
`;

export const ButtonWrap = styled("div")`
  width: 487px;
  margin: auto;
`;
