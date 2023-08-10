import OutlinedInput from "@mui/material/OutlinedInput";
import { styled } from "@mui/material/styles";

export const Container = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Input = styled(OutlinedInput)<{ error: boolean }>`
  width: 100%;
  .MuiOutlinedInput-notchedOutline {
    border-color: ${(props) =>
      props.error ? "#f36262" : "#713edc"} !important;
  }

  &.MuiOutlinedInput-root {
    height: 47px;
    font-weight: 400;
    font-size: 10px;
    line-height: 11.93px;
  }
`;

export const PasswordIcon = styled("div")<{ show: boolean }>`
  background-image: ${(props) =>
    props.show
      ? `url("data:image/svg+xml,%0A%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M1.48808 10.1262C2.03612 9.30277 3.0228 8.37559 4.27993 7.62837C5.659 6.80867 7.31476 6.23486 8.98935 6.23486C10.6618 6.23486 12.27 6.80731 13.626 7.62652C14.8479 8.3648 15.8388 9.28776 16.466 10.1262C15.8388 10.9646 14.8479 11.8876 13.626 12.6259C12.27 13.4451 10.6618 14.0175 8.98935 14.0175C7.31476 14.0175 5.659 13.4437 4.27993 12.624C3.0228 11.8768 2.03612 10.9496 1.48808 10.1262ZM0.400391 10.1262C0.400273 10.0418 0.42153 9.9563 0.466403 9.87781C1.0786 8.80696 2.28112 7.65313 3.76898 6.76876C5.26286 5.88081 7.09368 5.23486 8.98935 5.23486C10.8871 5.23486 12.6726 5.88217 14.1431 6.77061C15.6112 7.65758 16.7977 8.80425 17.4942 9.84853C17.5512 9.934 17.5784 10.0306 17.5783 10.1262C17.5784 10.2218 17.5512 10.3184 17.4942 10.4039C16.7977 11.4482 15.6112 12.5948 14.1431 13.4818C12.6726 14.3702 10.8871 15.0175 8.98935 15.0175C7.09368 15.0175 5.26286 14.3716 3.76898 13.4836C2.28112 12.5993 1.0786 11.4454 0.466403 10.3746C0.42153 10.2961 0.400273 10.2106 0.400391 10.1262Z' fill='%236E6E6E'/%3E%3Cpath d='M11.725 10.0495C11.725 11.5603 10.5003 12.7851 8.98946 12.7851C7.47865 12.7851 6.25391 11.5603 6.25391 10.0495C6.25391 8.53871 7.47865 7.31396 8.98946 7.31396C10.5003 7.31396 11.725 8.53871 11.725 10.0495Z' stroke='%236E6E6E'/%3E%3Cpath d='M8.98868 2.5V4.11778M14.9205 4.11778L13.842 5.19629M2.51758 4.11778L3.59609 5.19629' stroke='%236E6E6E' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")`
      : `url("data:image/svg+xml,%0A%3Csvg width='18' height='9' viewBox='0 0 18 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.8046 6.44151C17.7501 6.47319 17.688 6.48964 17.6249 6.48913C17.5617 6.48922 17.4997 6.47266 17.4449 6.44112C17.3902 6.40957 17.3447 6.36415 17.3132 6.30944L15.413 2.98526C14.2835 3.80869 13.0047 4.40463 11.6477 4.73989L12.2343 8.22669C12.2499 8.32069 12.2275 8.41703 12.1721 8.49453C12.1167 8.57202 12.0328 8.62434 11.9388 8.63997C11.9189 8.64355 11.8988 8.64535 11.8786 8.64536C11.7936 8.64525 11.7114 8.61505 11.6466 8.56012C11.5818 8.50518 11.5386 8.42907 11.5246 8.34528L10.9487 4.88633C9.66193 5.10675 8.34705 5.10675 7.06029 4.88633L6.4844 8.34528C6.47024 8.42999 6.42621 8.50683 6.36028 8.56187C6.29436 8.61692 6.2109 8.64654 6.12503 8.64536C6.10484 8.64531 6.0847 8.64351 6.06483 8.63997C5.97084 8.62434 5.88691 8.57202 5.83148 8.49453C5.77605 8.41703 5.75367 8.32069 5.76925 8.22669L6.35143 4.73809C4.9949 4.40327 3.71638 3.80795 2.58701 2.98526L0.686837 6.30944C0.655251 6.36415 0.609801 6.40957 0.555068 6.44112C0.500336 6.47266 0.438255 6.48922 0.375082 6.48913C0.312003 6.48964 0.249946 6.47319 0.195396 6.44151C0.154411 6.41796 0.118475 6.38655 0.0896473 6.34909C0.0608192 6.31163 0.0396653 6.26885 0.0273971 6.22319C0.0151289 6.17754 0.0119877 6.12992 0.0181532 6.08306C0.0243187 6.03619 0.0396699 5.991 0.0633274 5.95007L2.01112 2.54143C1.30811 1.96293 0.666269 1.31386 0.0956707 0.604421C0.0621731 0.568241 0.0364788 0.525556 0.0201864 0.479019C0.00389395 0.432483 -0.00264796 0.383092 0.000967468 0.333919C0.00458289 0.284745 0.0182783 0.236842 0.0412018 0.193189C0.0641254 0.149536 0.0957866 0.111067 0.134216 0.0801757C0.172645 0.0492842 0.217019 0.0266312 0.264579 0.0136256C0.312139 0.000620063 0.361866 -0.00245932 0.410667 0.00457843C0.459468 0.0116162 0.506299 0.0286202 0.548246 0.0545338C0.590193 0.0804474 0.626359 0.114716 0.654494 0.155207C2.1944 2.06077 4.89328 4.3329 9 4.3329C13.1067 4.3329 15.8056 2.06077 17.3455 0.154308C17.3736 0.113817 17.4098 0.0795495 17.4518 0.0536359C17.4937 0.0277222 17.5405 0.0107175 17.5893 0.0036798C17.6381 -0.00335794 17.6879 -0.000278558 17.7354 0.012727C17.783 0.0257326 17.8274 0.0483863 17.8658 0.0792777C17.9042 0.110169 17.9359 0.148638 17.9588 0.192291C17.9817 0.235944 17.9954 0.283847 17.999 0.33302C18.0026 0.382193 17.9961 0.431584 17.9798 0.478121C17.9635 0.524657 17.9378 0.567343 17.9043 0.603523C17.3337 1.31297 16.6919 1.96203 15.9889 2.54054L17.9367 5.95007C17.9603 5.991 17.9757 6.03619 17.9818 6.08306C17.988 6.12992 17.9849 6.17754 17.9726 6.22319C17.9603 6.26885 17.9392 6.31163 17.9104 6.34909C17.8815 6.38655 17.8456 6.41796 17.8046 6.44151Z' fill='%236E6E6E'/%3E%3C/svg%3E%0A");`};
  background-size: 18px;
  background-repeat: no-repeat;
  background-position: center center;
  width: 18px;
  height: 18px;
  padding-right: 20px;
`;
