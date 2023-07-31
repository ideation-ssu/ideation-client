import { Autocomplete } from "@mui/material";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";

export const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled("div")`
  width: 668px;
  height: 679px;
  background-color: white;
  border-radius: 10px;
`;

export const Title = styled("div")`
  padding: 20px;
  text-align: center;
  span {
    font-family: NotoSansSemiBold, sans-serif;
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
  justify-content: center;
  align-items: center;
`;

export const Line = styled("div")<{ rate: number }>`
  display: flex;
  flex-direction: row;
  flex: ${(props) => props.rate};
  align-items: center;

  span {
    font-family: Pretendard, sans-serif;
    font-size: 20px;
    padding-left: 10px;
    background: linear-gradient(88deg, #6e72fc 0%, #713edc 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const SubTitleBar = styled("div")`
  width: 3px;
  height: 25px;
  background: linear-gradient(90deg, #713edc 0%, #6e72fc 100%);
`;

export const ButtonWrap = styled("div")`
  width: 487px;
  margin: 50px auto;
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

export const FieldIcon = styled("div")`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='21' height='21' viewBox='0 0 21 21' fill='none'%3E%3Cpath d='M1.16667 9.33333H8.16667C8.47609 9.33333 8.77283 9.21042 8.99162 8.99162C9.21042 8.77283 9.33333 8.47609 9.33333 8.16667V1.16667C9.33333 0.857247 9.21042 0.560501 8.99162 0.341709C8.77283 0.122916 8.47609 0 8.16667 0H1.16667C0.857247 0 0.560501 0.122916 0.341709 0.341709C0.122916 0.560501 0 0.857247 0 1.16667V8.16667C0 8.47609 0.122916 8.77283 0.341709 8.99162C0.560501 9.21042 0.857247 9.33333 1.16667 9.33333ZM12.8333 9.33333H19.8333C20.1428 9.33333 20.4395 9.21042 20.6583 8.99162C20.8771 8.77283 21 8.47609 21 8.16667V1.16667C21 0.857247 20.8771 0.560501 20.6583 0.341709C20.4395 0.122916 20.1428 0 19.8333 0H12.8333C12.5239 0 12.2272 0.122916 12.0084 0.341709C11.7896 0.560501 11.6667 0.857247 11.6667 1.16667V8.16667C11.6667 8.47609 11.7896 8.77283 12.0084 8.99162C12.2272 9.21042 12.5239 9.33333 12.8333 9.33333ZM1.16667 21H8.16667C8.47609 21 8.77283 20.8771 8.99162 20.6583C9.21042 20.4395 9.33333 20.1428 9.33333 19.8333V12.8333C9.33333 12.5239 9.21042 12.2272 8.99162 12.0084C8.77283 11.7896 8.47609 11.6667 8.16667 11.6667H1.16667C0.857247 11.6667 0.560501 11.7896 0.341709 12.0084C0.122916 12.2272 0 12.5239 0 12.8333V19.8333C0 20.1428 0.122916 20.4395 0.341709 20.6583C0.560501 20.8771 0.857247 21 1.16667 21ZM16.3333 21C18.907 21 21 18.907 21 16.3333C21 13.7597 18.907 11.6667 16.3333 11.6667C13.7597 11.6667 11.6667 13.7597 11.6667 16.3333C11.6667 18.907 13.7597 21 16.3333 21Z' fill='url(%23paint0_linear_472_5940)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_472_5940' x1='20.5198' y1='10.5' x2='0.576222' y2='10.4948' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%236E72FC'/%3E%3Cstop offset='1' stop-color='%23AD1DEB'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E");
  background-size: cover;
  width: 21px;
  height: 21px;
  margin: auto;
`;
