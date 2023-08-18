import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";

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
  height: 521px;
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
  font-size: 14px;
  font-weight: bold;
  color: #6e6e6e;
  padding-left: 3px;
`;

export const Name = styled("div")`
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 12px;
  color: #000;
`;

export const Date = styled("div")`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Content = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const Grid = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Line = styled("div")<{ rate: number }>`
  display: flex;
  flex-direction: row;
  flex: ${(props) => props.rate};
  align-items: center;

  span {
    font-size: 20px;
    padding-left: 10px;
    background: linear-gradient(88deg, #6e72fc 0%, #713edc 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const ButtonWrap = styled("div")`
  width: 100%;
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .idea-status,
  .idea-submit {
    width: 230px;
    height: 100%;
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
`;

export const TitleIcon = styled("div")`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='22' viewBox='0 0 18 22' fill='none'%3E%3Cpath d='M9 22C8.46429 22 8.00872 21.7992 7.63329 21.3977C7.25786 20.9962 7.07057 20.5095 7.07143 19.9375V4.125H1.92857C1.39286 4.125 0.937288 3.92425 0.56186 3.52275C0.186431 3.12125 -0.000854214 2.6345 2.92874e-06 2.0625C2.92874e-06 1.48959 0.187717 1.00238 0.563146 0.600878C0.938574 0.199378 1.39372 -0.000913534 1.92857 3.13212e-06H16.0714C16.6071 3.13212e-06 17.0627 0.200753 17.4381 0.602253C17.8136 1.00375 18.0009 1.4905 18 2.0625C18 2.63542 17.8123 3.12263 17.4369 3.52413C17.0614 3.92563 16.6063 4.12592 16.0714 4.125H10.9286V19.9375C10.9286 20.5104 10.7409 20.9976 10.3654 21.3991C9.99 21.8006 9.53486 22.0009 9 22Z' fill='url(%23paint0_linear_472_5950)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_472_5950' x1='17.5884' y1='11' x2='0.493904' y2='10.9964' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%236E72FC'/%3E%3Cstop offset='1' stop-color='%23AD1DEB'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E");
  background-size: cover;
  width: 18px;
  height: 22px;
  margin: auto;
`;

export const AsignIcon = styled("div")`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='21' viewBox='0 0 20 21' fill='none'%3E%3Cpath d='M14.6004 13.9159H5.30039C2.73227 13.9159 0.650391 15.9347 0.650391 18.425V20.6796H19.2504V18.425C19.2504 15.9347 17.1685 13.9159 14.6004 13.9159Z' fill='url(%23paint0_linear_472_5936)'/%3E%3Cpath d='M9.95039 9.40685C12.5185 9.40685 14.6004 7.38806 14.6004 4.89776C14.6004 2.40746 12.5185 0.388672 9.95039 0.388672C7.38227 0.388672 5.30039 2.40746 5.30039 4.89776C5.30039 7.38806 7.38227 9.40685 9.95039 9.40685Z' fill='url(%23paint1_linear_472_5936)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_472_5936' x1='18.8251' y1='10.5341' x2='1.16076' y2='10.5299' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%236E72FC'/%3E%3Cstop offset='1' stop-color='%23AD1DEB'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint1_linear_472_5936' x1='18.8251' y1='10.5341' x2='1.16076' y2='10.5299' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%236E72FC'/%3E%3Cstop offset='1' stop-color='%23AD1DEB'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E");
  background-size: cover;
  width: 18.6px;
  height: 20.29px;
  margin: auto;
`;

export const CategoryIcon = styled("div")`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='21' height='21' viewBox='0 0 21 21' fill='none'%3E%3Cpath d='M1.16667 9.33333H8.16667C8.47609 9.33333 8.77283 9.21042 8.99162 8.99162C9.21042 8.77283 9.33333 8.47609 9.33333 8.16667V1.16667C9.33333 0.857247 9.21042 0.560501 8.99162 0.341709C8.77283 0.122916 8.47609 0 8.16667 0H1.16667C0.857247 0 0.560501 0.122916 0.341709 0.341709C0.122916 0.560501 0 0.857247 0 1.16667V8.16667C0 8.47609 0.122916 8.77283 0.341709 8.99162C0.560501 9.21042 0.857247 9.33333 1.16667 9.33333ZM12.8333 9.33333H19.8333C20.1428 9.33333 20.4395 9.21042 20.6583 8.99162C20.8771 8.77283 21 8.47609 21 8.16667V1.16667C21 0.857247 20.8771 0.560501 20.6583 0.341709C20.4395 0.122916 20.1428 0 19.8333 0H12.8333C12.5239 0 12.2272 0.122916 12.0084 0.341709C11.7896 0.560501 11.6667 0.857247 11.6667 1.16667V8.16667C11.6667 8.47609 11.7896 8.77283 12.0084 8.99162C12.2272 9.21042 12.5239 9.33333 12.8333 9.33333ZM1.16667 21H8.16667C8.47609 21 8.77283 20.8771 8.99162 20.6583C9.21042 20.4395 9.33333 20.1428 9.33333 19.8333V12.8333C9.33333 12.5239 9.21042 12.2272 8.99162 12.0084C8.77283 11.7896 8.47609 11.6667 8.16667 11.6667H1.16667C0.857247 11.6667 0.560501 11.7896 0.341709 12.0084C0.122916 12.2272 0 12.5239 0 12.8333V19.8333C0 20.1428 0.122916 20.4395 0.341709 20.6583C0.560501 20.8771 0.857247 21 1.16667 21ZM16.3333 21C18.907 21 21 18.907 21 16.3333C21 13.7597 18.907 11.6667 16.3333 11.6667C13.7597 11.6667 11.6667 13.7597 11.6667 16.3333C11.6667 18.907 13.7597 21 16.3333 21Z' fill='url(%23paint0_linear_472_5940)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_472_5940' x1='20.5198' y1='10.5' x2='0.576222' y2='10.4948' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%236E72FC'/%3E%3Cstop offset='1' stop-color='%23AD1DEB'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E");
  background-size: cover;
  width: 21px;
  height: 21px;
  margin: auto;
`;

export const HashIcon = styled("div")`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='23' height='24' viewBox='0 0 23 24' fill='none'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8.31232 0.0157889C8.55546 0.0465491 8.79025 0.125685 9.00327 0.248673C9.2163 0.371661 9.40337 0.53609 9.55382 0.732564C9.70426 0.929038 9.81511 1.1537 9.88005 1.39372C9.94499 1.63374 9.96273 1.88441 9.93227 2.1314L9.49465 5.68563H14.4378L14.9338 1.66155C14.9952 1.16293 15.249 0.709477 15.6394 0.400956C16.0298 0.0924355 16.5248 -0.0458864 17.0156 0.0164203C17.5065 0.0787271 17.9528 0.336558 18.2565 0.733194C18.5602 1.12983 18.6963 1.63278 18.635 2.1314L18.1973 5.68563H21.1351C21.6297 5.68563 22.1041 5.88524 22.4538 6.24054C22.8035 6.59584 23 7.07774 23 7.58021C23 8.08269 22.8035 8.56458 22.4538 8.91988C22.1041 9.27518 21.6297 9.47479 21.1351 9.47479H17.7311L17.1095 14.527H20.5135C21.0081 14.527 21.4824 14.7266 21.8322 15.0819C22.1819 15.4372 22.3784 15.9191 22.3784 16.4216C22.3784 16.9241 22.1819 17.4059 21.8322 17.7612C21.4824 18.1166 21.0081 18.3162 20.5135 18.3162H16.6433L16.1485 22.3402C16.0872 22.8389 15.8334 23.2923 15.443 23.6008C15.0525 23.9094 14.5575 24.0477 14.0667 23.9854C13.5759 23.9231 13.1295 23.6652 12.8259 23.2686C12.5222 22.872 12.386 22.369 12.4474 21.8704L12.8837 18.3162H7.94059L7.44578 22.3402C7.41542 22.5871 7.33748 22.8255 7.21642 23.0418C7.09537 23.2581 6.93357 23.4481 6.74025 23.6008C6.54694 23.7536 6.3259 23.8662 6.08976 23.9322C5.85361 23.9981 5.60699 24.0162 5.36397 23.9854C5.12095 23.9545 4.88629 23.8753 4.67339 23.7524C4.46049 23.6294 4.27352 23.465 4.12315 23.2686C3.97279 23.0722 3.86197 22.8476 3.79702 22.6077C3.73208 22.3678 3.71428 22.1173 3.74465 21.8704L4.18103 18.3162H1.86486C1.37027 18.3162 0.895936 18.1166 0.546206 17.7612C0.196476 17.4059 0 16.9241 0 16.4216C0 15.9191 0.196476 15.4372 0.546206 15.0819C0.895936 14.7266 1.37027 14.527 1.86486 14.527H4.64724L5.26886 9.47479H2.48649C1.99189 9.47479 1.51756 9.27518 1.16783 8.91988C0.818098 8.56458 0.621622 8.08269 0.621622 7.58021C0.621622 7.07774 0.818098 6.59584 1.16783 6.24054C1.51756 5.88524 1.99189 5.68563 2.48649 5.68563H5.73508L6.23113 1.66155C6.26127 1.41454 6.33901 1.17599 6.45993 0.95952C6.58084 0.743051 6.74256 0.552908 6.93583 0.399955C7.1291 0.247002 7.35014 0.134237 7.58633 0.0681036C7.82251 0.00197012 8.06921 -0.0149729 8.31232 0.0157889ZM13.3524 14.527L13.9741 9.47479H9.02967L8.40805 14.527H13.3524Z' fill='url(%23paint0_linear_715_6090)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_715_6090' x1='22.4741' y1='12' x2='0.6311' y2='11.9946' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%236E72FC'/%3E%3Cstop offset='1' stop-color='%23AD1DEB'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E");
  background-size: cover;
  width: 23px;
  height: 24px;
  margin: auto;
`;
