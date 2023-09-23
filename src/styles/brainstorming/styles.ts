import { styled } from "@mui/material/styles";

export const Container = styled("div")`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  background-color: #f8f8f8;
  background-image: linear-gradient(0deg, transparent 34px, #e9e9e9 34px),
    linear-gradient(90deg, transparent 34px, #e9e9e9 34px);
  background-size: 35px 35px;
`;

export const Content = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const Header = styled("div")`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const LogoWrap = styled("div")`
  width: 195px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #7b40f2;
  cursor: pointer;
`;

export const TimerWrap = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-right: 25px;

  span {
    width: 135px;
    font-size: 50px;
    background: linear-gradient(270deg, #6e72fc 2.3%, #ad1deb 97.24%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const TimerIcon = styled("div")`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='47' height='57' viewBox='0 0 47 57' fill='none'%3E%3Cpath d='M23.5 54.249C34.8218 54.249 44 45.0709 44 33.749C44 22.4272 34.8218 13.249 23.5 13.249C12.1782 13.249 3 22.4272 3 33.749C3 45.0709 12.1782 54.249 23.5 54.249Z' stroke='url(%23paint0_linear_1197_13818)' stroke-width='5'/%3E%3Cpath d='M28.6328 3H18.3828M23.5078 3V13.25M37.6016 18.375L41.4453 14.5312M23.5078 26.0625V33.75H15.8203' stroke='url(%23paint1_linear_1197_13818)' stroke-width='5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_1197_13818' x1='43.0625' y1='33.7491' x2='4.125' y2='33.739' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%236E72FC'/%3E%3Cstop offset='1' stop-color='%23AD1DEB'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint1_linear_1197_13818' x1='40.8594' y1='18.375' x2='16.5234' y2='18.3698' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%236E72FC'/%3E%3Cstop offset='1' stop-color='%23AD1DEB'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E");
  background-size: cover;
  width: 43px;
  height: 52.25px;
`;

export const SendBtn = styled("div")`
  width: 70px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #713edc;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;
`;

export const SendIcon = styled("div")`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='35' height='35' viewBox='0 0 35 35' fill='none'%3E%3Cpath d='M14.2015 20.3333L32.5348 2M14.2015 20.3333L20.0348 32C20.1079 32.1596 20.2253 32.2948 20.373 32.3896C20.5208 32.4844 20.6926 32.5348 20.8681 32.5348C21.0436 32.5348 21.2155 32.4844 21.3632 32.3896C21.5109 32.2948 21.6283 32.1596 21.7015 32L32.5348 2M14.2015 20.3333L2.53479 14.5C2.37522 14.4269 2.24 14.3095 2.1452 14.1618C2.05039 14.014 2 13.8422 2 13.6667C2 13.4911 2.05039 13.3193 2.1452 13.1716C2.24 13.0239 2.37522 12.9065 2.53479 12.8333L32.5348 2' stroke='white' stroke-width='3.33333' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-size: cover;
  width: 30px;
  height: 30px;
`;

export const Footer = styled("div")`
  width: 80%;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const IdeaCountIcon = styled("div")`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='66' height='66' viewBox='0 0 66 66' fill='none'%3E%3Cpath d='M6.59707 29.7C7.43827 29.7009 8.24736 30.023 8.85904 30.6004C9.47072 31.1778 9.83881 31.9669 9.88811 32.8066C9.9374 33.6463 9.66419 34.473 9.12428 35.118C8.58437 35.763 7.81853 36.1776 6.98322 36.2769L6.59707 36.3H3.29671C2.45551 36.2991 1.64642 35.977 1.03474 35.3996C0.423067 34.8222 0.0549747 34.0331 0.00567675 33.1934C-0.0436212 32.3537 0.229596 31.5269 0.769503 30.882C1.30941 30.237 2.07526 29.8224 2.91057 29.7231L3.29671 29.7H6.59707ZM33 0C33.8084 0.000106625 34.5886 0.296855 35.1927 0.833961C35.7968 1.37107 36.1827 2.11117 36.2773 2.9139L36.3004 3.3V6.6C36.2994 7.4411 35.9773 8.25011 35.3999 8.86172C34.8224 9.47332 34.0332 9.84137 33.1934 9.89067C32.3537 9.93996 31.5268 9.66677 30.8817 9.12693C30.2367 8.58708 29.8221 7.82132 29.7227 6.9861L29.6996 6.6V3.3C29.6996 2.42479 30.0473 1.58542 30.6663 0.966547C31.2852 0.347677 32.1247 0 33 0ZM62.7033 29.7C63.5445 29.7009 64.3536 30.023 64.9653 30.6004C65.5769 31.1778 65.945 31.9669 65.9943 32.8066C66.0436 33.6463 65.7704 34.473 65.2305 35.118C64.6906 35.763 63.9247 36.1776 63.0894 36.2769L62.7033 36.3H59.4029C58.5617 36.2991 57.7526 35.977 57.141 35.3996C56.5293 34.8222 56.1612 34.0331 56.1119 33.1934C56.0626 32.3537 56.3358 31.5269 56.8757 30.882C57.4156 30.237 58.1815 29.8224 59.0168 29.7231L59.4029 29.7H62.7033ZM9.5443 9.5469C10.1126 8.97872 10.8687 8.63739 11.6708 8.58697C12.4729 8.53654 13.2658 8.78047 13.9008 9.273L14.211 9.5469L16.5213 11.8569C17.1132 12.4508 17.4568 13.2476 17.4824 14.0857C17.508 14.9237 17.2136 15.7401 16.6591 16.3689C16.1045 16.9978 15.3313 17.392 14.4966 17.4715C13.6618 17.551 12.8281 17.3099 12.1648 16.797L11.8546 16.5231L9.5443 14.2131C8.92558 13.5943 8.578 12.755 8.578 11.88C8.578 11.005 8.92558 10.1657 9.5443 9.5469ZM51.789 9.5469C52.3829 8.95505 53.1799 8.61144 54.018 8.58585C54.8561 8.56026 55.6726 8.85461 56.3015 9.40912C56.9304 9.96363 57.3247 10.7367 57.4042 11.5714C57.4837 12.406 57.2425 13.2396 56.7296 13.9029L56.4557 14.2131L54.1454 16.5231C53.5515 17.1149 52.7546 17.4586 51.9164 17.4842C51.0783 17.5097 50.2619 17.2154 49.6329 16.6609C49.004 16.1064 48.6097 15.3333 48.5302 14.4986C48.4507 13.664 48.6919 12.8304 49.2048 12.1671L49.4787 11.8569L51.789 9.5469ZM39.6007 52.8C40.476 52.8 41.3155 53.1477 41.9344 53.7665C42.5534 54.3854 42.9011 55.2248 42.9011 56.1C42.9011 58.7256 41.8579 61.2437 40.0011 63.1004C38.1443 64.957 35.6259 66 33 66C30.3741 66 27.8557 64.957 25.9989 63.1004C24.1421 61.2437 23.0989 58.7256 23.0989 56.1C23.099 55.2917 23.3958 54.5116 23.933 53.9076C24.4701 53.3036 25.2103 52.9177 26.0131 52.8231L26.3993 52.8H39.6007ZM33 13.2C37.1561 13.2 41.2069 14.5075 44.5785 16.9374C47.9502 19.3673 50.4717 22.7963 51.786 26.7387C53.1003 30.6811 53.1407 34.9371 51.9015 38.9037C50.6622 42.8704 48.2062 46.3466 44.8813 48.84C44.4264 49.1816 43.891 49.3999 43.3268 49.4736L42.9011 49.5H23.0989C22.3848 49.5 21.69 49.2684 21.1187 48.84C17.7938 46.3466 15.3378 42.8704 14.0985 38.9037C12.8593 34.9371 12.8997 30.6811 14.214 26.7387C15.5283 22.7963 18.0498 19.3673 21.4215 16.9374C24.7931 14.5075 28.8439 13.2 33 13.2Z' fill='url(%23paint0_linear_1545_5508)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_1545_5508' x1='64.4909' y1='33' x2='1.81098' y2='32.9838' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%236E72FC'/%3E%3Cstop offset='1' stop-color='%23AD1DEB'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E");
  background-size: cover;
  width: 66px;
  height: 66px;
  position: absolute;
  left: -80px;
  top: -10px;

  span {
    width: 25px;
    position: absolute;
    left: 20.5px;
    top: 17px;
    font-size: 25px;
    text-align: center;
    color: #fff;
  }
`;

export const ExitBtn = styled("div")`
  width: 53px;
  height: 100%;
  position: absolute;
  top: 0;
  right: -60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: var(
    --grad,
    linear-gradient(270deg, #6e72fc 2.3%, #ad1deb 97.24%)
  );
  cursor: pointer;

  span {
    color: #fff;
  }
`;
