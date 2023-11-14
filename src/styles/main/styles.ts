import MuiSearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

export const Container = styled("div")`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #f8f8f8;
`;

export const Content = styled("div")`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 35px;
`;

export const Header = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  &.title {
    margin: 0;
  }
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

export const Logo = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px 0;
  gap: 10px;
  font-size: 22.14px;
  color: #eaeaea;
  cursor: pointer;
`;

export const LogoIcon = styled("div")`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='19' height='31' viewBox='0 0 19 31' fill='none'%3E%3Cpath d='M11.5341 21.9805H7.32198C6.46656 21.9805 5.76273 22.6744 5.77356 23.5311V27.7492C5.77356 28.6058 6.46656 29.2998 7.32198 29.2998H7.59052C7.77308 29.6257 8.03903 29.897 8.36104 30.0859C8.68304 30.2747 9.04947 30.3743 9.42264 30.3743C9.7958 30.3743 10.1622 30.2747 10.4842 30.0859C10.8062 29.897 11.0722 29.6257 11.2548 29.2998H11.5341C12.3895 29.2998 13.0825 28.6058 13.0825 27.7492V23.5311C13.0825 22.6744 12.3895 21.9805 11.5341 21.9805Z' fill='%239B9B9B'/%3E%3Cpath d='M12.0854 22.9121C12.3453 22.9121 12.551 22.717 12.5727 22.4676C12.6484 21.535 13.0491 19.2688 15.2364 16.8398C16.28 16.0169 17.1372 14.9814 17.7514 13.8019C18.3655 12.6223 18.7225 11.3257 18.7988 9.99763C18.8205 9.73739 18.8313 9.56389 18.8313 9.45546V9.34703C18.7663 4.16387 14.5759 1.35713e-08 9.41084 1.35713e-08C6.93204 -0.000133118 4.55332 0.97923 2.79144 2.72532C1.02957 4.47141 0.0268753 6.84317 0.00120307 9.32534C0.00120307 9.32534 -0.00962483 9.58558 0.0336877 10.0193C0.206938 12.7735 1.54962 15.2133 3.59614 16.829C5.78342 19.2688 6.21654 21.535 6.29234 22.4676C6.314 22.717 6.51973 22.9121 6.77961 22.9121H12.0854Z' fill='%23FCD53F'/%3E%3Cpath d='M9.42702 9.43395C11.1812 9.43395 12.6105 10.8544 12.6321 12.6111V12.6978C12.6321 12.7304 12.6321 12.7737 12.6213 12.8388C12.5672 13.7496 12.1232 14.6063 11.4086 15.1701L11.3328 15.2243L11.2678 15.2894C10.0767 16.6123 9.82766 19.9738 9.78434 21.8171H9.08051C9.02637 19.9738 8.7665 16.6123 7.57541 15.2894L7.51044 15.2243L7.43464 15.1701C7.07698 14.8869 6.7838 14.5305 6.57466 14.1247C6.36553 13.7189 6.24526 13.2731 6.22189 12.8171C6.22189 12.7737 6.21106 12.7412 6.21106 12.7195V12.6219C6.24355 10.8653 7.68369 9.43395 9.42702 9.43395ZM9.42702 8.34961C8.53598 8.34993 7.66718 8.62822 6.94136 9.14579C6.21554 9.66336 5.66875 10.3945 5.377 11.2376C5.08525 12.0807 5.06302 12.9939 5.3134 13.8502C5.56379 14.7066 6.07435 15.4635 6.77413 16.0159C8.0735 17.4689 8.00853 22.9123 8.00853 22.9123H10.8672C10.8672 22.9123 10.7805 17.4689 12.0907 16.0268C13.022 15.2894 13.6392 14.1725 13.7149 12.9038C13.7258 12.7846 13.7258 12.7087 13.7258 12.6544V12.6111C13.7141 11.477 13.2561 10.3933 12.4512 9.59541C11.6463 8.79751 10.5596 8.34983 9.42702 8.34961Z' fill='%23FFB02E'/%3E%3Cpath d='M13.1754 24.9964C13.2462 24.9851 13.314 24.9597 13.375 24.9218C13.4359 24.884 13.4888 24.8344 13.5304 24.7759C13.5721 24.7174 13.6017 24.6512 13.6176 24.5812C13.6334 24.5111 13.6353 24.4386 13.6229 24.3679C13.6106 24.2971 13.5843 24.2295 13.5457 24.169C13.507 24.1085 13.4568 24.0563 13.3978 24.0154C13.3388 23.9745 13.2723 23.9457 13.2022 23.9308C13.132 23.9159 13.0596 23.915 12.9891 23.9284L5.69095 25.2079C5.62085 25.2201 5.55384 25.2461 5.49376 25.2843C5.43367 25.3224 5.38168 25.3721 5.34076 25.4304C5.29983 25.4887 5.27078 25.5545 5.25525 25.6241C5.23972 25.6936 5.23802 25.7655 5.25025 25.8357C5.26248 25.9059 5.28839 25.973 5.32652 26.0332C5.36465 26.0934 5.41423 26.1454 5.47245 26.1864C5.53067 26.2274 5.59638 26.2565 5.66582 26.272C5.73527 26.2876 5.80709 26.2893 5.8772 26.2771L13.1754 24.9964ZM13.1212 27.3278C13.2571 27.2974 13.3761 27.2158 13.4534 27.0999C13.5308 26.9839 13.5606 26.8426 13.5366 26.7053C13.5126 26.5679 13.4368 26.4451 13.3247 26.3623C13.2127 26.2796 13.0731 26.2432 12.935 26.2608L5.73427 27.5295C5.66186 27.5391 5.59213 27.5632 5.52929 27.6005C5.46644 27.6378 5.41178 27.6874 5.3686 27.7464C5.32541 27.8054 5.29458 27.8725 5.27798 27.9437C5.26138 28.0149 5.25934 28.0888 5.27199 28.1608C5.28463 28.2329 5.31171 28.3016 5.35157 28.3629C5.39144 28.4242 5.44328 28.4768 5.50397 28.5175C5.56466 28.5582 5.63295 28.5861 5.70472 28.5997C5.77649 28.6133 5.85026 28.6122 5.92159 28.5965L13.1212 27.3278Z' fill='%23D3D3D3'/%3E%3Cpath d='M7.35183 3.73118C6.14991 5.81312 6.75628 8.41554 8.70534 9.53241C10.6544 10.6493 13.199 9.8794 14.4009 7.79747C15.6029 5.71553 14.9965 3.11311 13.0474 1.99624C11.0984 0.879366 8.55375 1.64925 7.35183 3.73118Z' fill='%23FFF478'/%3E%3C/svg%3E");
  background-size: cover;
  width: 19px;
  height: 30px;
`;

export const AvatarWrap = styled("div")`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
  margin-right: 30px;
`;

export const TitleWrap = styled("div")`
  display: flex;
  align-items: flex-end;
  span {
    padding-left: 10px;
    font-size: 24px;
    font-weight: 600;
  }
`;

export const TitleBar = styled("div")`
  width: 7px;
  height: 32px;
  background: linear-gradient(0deg, #6e72fc 0%, #ad1deb 100%);
`;

export const RightHeaderWrap = styled("div")`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

export const ButtonWrap = styled("div")``;

export const Search = styled("div")`
  width: 420px;
  height: 41px;
  display: flex;
  border-radius: 10px;
  background-color: #edeef3;
  :hover {
    background-color: #e2e3e8;
  }
`;

export const SearchIcon = styled("div")`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='22' height='19' viewBox='0 0 22 19' fill='none'%3E%3Cpath d='M17.635 17.2928C15.8957 15.6971 13.2699 15.6835 10.948 16.1078C10.1114 16.2607 9.24823 16.3032 8.38453 16.2286C6.13954 16.0344 4.05958 15.0627 2.56801 13.5112C1.07645 11.9598 0.285403 9.94515 0.3559 7.87746C0.426398 5.80977 1.35314 3.84444 2.94748 2.38152C4.5421 0.918855 6.68436 0.0686544 8.93819 0.00397931C11.192 -0.0606958 13.388 0.665017 15.0792 2.03339C16.7703 3.40177 17.8295 5.30996 18.0411 7.36953C18.089 7.83589 18.0926 8.30208 18.0536 8.76323C17.8269 11.437 17.7803 14.5525 19.7576 16.3665L20.7097 17.24C20.8556 17.3643 20.9622 17.5223 21.0184 17.6975C21.0745 17.8727 21.0782 18.0585 21.0289 18.2355C20.9795 18.4124 20.8791 18.5738 20.7382 18.7028C20.5973 18.8317 20.421 18.9234 20.2281 18.9682C20.0354 19.0135 19.8331 19.0103 19.6422 18.9591C19.4514 18.9078 19.2791 18.8103 19.1436 18.6768L17.635 17.2928ZM15.8636 8.13136C15.8767 7.32297 15.7145 6.52026 15.3864 5.76991C15.0583 5.01956 14.5708 4.33656 13.9523 3.76064C13.3338 3.18471 12.5967 2.72736 11.7838 2.41519C10.9709 2.10302 10.0984 1.94225 9.21716 1.94225C8.3359 1.94225 7.46344 2.10302 6.65052 2.41519C5.83761 2.72736 5.10047 3.18471 4.48199 3.76064C3.86351 4.33656 3.37603 5.01956 3.04791 5.76991C2.71979 6.52026 2.55758 7.32297 2.57072 8.13136C2.59675 9.73277 3.30844 11.2605 4.55206 12.3845C5.79568 13.5086 7.47138 14.1386 9.21716 14.1386C10.9629 14.1386 12.6386 13.5086 13.8823 12.3845C15.1259 11.2605 15.8376 9.73277 15.8636 8.13136Z' fill='%23CCCCCC'/%3E%3C/svg%3E");
  background-size: cover;
  width: 20px;
  height: 19px;
`;

export const SearchIconWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 15px;
`;

export const SearchInput = styled(InputBase)`
  font-size: 18px;
  padding-left: 10px;
`;
