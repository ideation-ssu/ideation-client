import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";

export const NotiIcon = styled("div")`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='22' height='25' viewBox='0 0 22 25' fill='none'%3E%3Cpath d='M11 25C11.7569 25.001 12.4953 24.7607 13.1126 24.3127C13.7299 23.8647 14.1953 23.2311 14.4442 22.5H7.55578C7.8047 23.2311 8.27014 23.8647 8.8874 24.3127C9.50466 24.7607 10.2431 25.001 11 25ZM19.5556 15.7325V10C19.5556 5.97875 16.885 2.59125 13.2672 1.5725C12.9091 0.65 12.034 0 11 0C9.966 0 9.09089 0.65 8.73278 1.5725C5.115 2.5925 2.44445 5.97875 2.44445 10V15.7325L0.358112 17.8662C0.244394 17.9821 0.154209 18.1199 0.0927488 18.2715C0.0312891 18.4232 -0.000231549 18.5858 1.28049e-06 18.75V20C1.28049e-06 20.3315 0.128771 20.6495 0.357982 20.8839C0.587193 21.1183 0.89807 21.25 1.22222 21.25H20.7778C21.1019 21.25 21.4128 21.1183 21.642 20.8839C21.8712 20.6495 22 20.3315 22 20V18.75C22.0002 18.5858 21.9687 18.4232 21.9073 18.2715C21.8458 18.1199 21.7556 17.9821 21.6419 17.8662L19.5556 15.7325Z' fill='%23713EDC'/%3E%3C/svg%3E");
  background-size: cover;
  width: 19px;
  height: 22px;
  cursor: pointer;
`;

export const StyledMenu = styled(Menu)`
  .MuiList-root {
    padding: 0;
    height: 310px;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 4px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 2px;
      background: #ccc;
    }
  }

  hr {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
`;

export const StyledMenuItem = styled(MenuItem)<{ read: string }>`
  width: 350px;
  height: 45px;
  background-color: ${(props) =>
    props.read === "true" ? "#fff" : " rgba(113, 62, 220, 0.10)"};
  border-bottom: 0.5px solid var(--Gray6, #eaeaea);
`;

export const Inner = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;

  span {
    font-family: Pretendard, sans-serif;
  }
`;

export const Content = styled("div")<{ color: string }>`
  height: 100%;
  display: flex;
  flex-direction: column;

  .sub-title {
    font-size: 9px;
    color: #6e6e6e;
  }

  .title {
    font-size: 12px;
    .highlight {
      color: ${(props) => props.color};
    }
  }
`;

export const DateWrap = styled("div")`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  span {
    font-size: 8px;
    color: #6e6e6e;
  }
`;

export const IconWrap = styled("div")<{ color: string }>`
  width: 30px;
  min-width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
  border-radius: 30px;
`;

export const IdeaIcon = styled("div")`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='23' height='23' viewBox='0 0 23 23' fill='none'%3E%3Cpath d='M2.29898 10.35C2.59212 10.3503 2.87408 10.4626 3.08724 10.6638C3.3004 10.865 3.42868 11.14 3.44586 11.4326C3.46303 11.7252 3.36782 12.0133 3.17967 12.2381C2.99152 12.4629 2.72464 12.6073 2.43355 12.6419L2.29898 12.65H1.14885C0.855709 12.6497 0.573753 12.5374 0.360592 12.3362C0.147432 12.135 0.0191579 11.86 0.00197826 11.5674C-0.0152013 11.2748 0.0800106 10.9867 0.26816 10.7619C0.45631 10.5371 0.723196 10.3927 1.01429 10.358L1.14885 10.35H2.29898ZM11.5 0C11.7817 3.71571e-05 12.0536 0.10345 12.2641 0.290623C12.4746 0.477796 12.6091 0.735711 12.6421 1.01545L12.6501 1.15V2.3C12.6498 2.59311 12.5376 2.87504 12.3363 3.08817C12.1351 3.30131 11.86 3.42957 11.5674 3.44675C11.2748 3.46393 10.9866 3.36872 10.7618 3.1806C10.537 2.99247 10.3925 2.72561 10.3579 2.43455L10.3499 2.3V1.15C10.3499 0.845001 10.471 0.552494 10.6867 0.336827C10.9024 0.12116 11.195 0 11.5 0ZM21.8511 10.35C22.1443 10.3503 22.4262 10.4626 22.6394 10.6638C22.8526 10.865 22.9808 11.14 22.998 11.4326C23.0152 11.7252 22.92 12.0133 22.7318 12.2381C22.5437 12.4629 22.2768 12.6073 21.9857 12.6419L21.8511 12.65H20.701C20.4079 12.6497 20.1259 12.5374 19.9128 12.3362C19.6996 12.135 19.5713 11.86 19.5541 11.5674C19.537 11.2748 19.6322 10.9867 19.8203 10.7619C20.0085 10.5371 20.2754 10.3927 20.5665 10.358L20.701 10.35H21.8511ZM3.32604 3.32695C3.52409 3.12895 3.78758 3.01 4.06709 2.99243C4.3466 2.97485 4.62292 3.05986 4.84421 3.2315L4.95232 3.32695L5.75741 4.13195C5.96369 4.3389 6.08344 4.6166 6.09236 4.90864C6.10128 5.20068 5.99869 5.48517 5.80543 5.70432C5.61217 5.92347 5.34273 6.06085 5.05184 6.08856C4.76095 6.11627 4.47041 6.03222 4.23925 5.8535L4.13113 5.75805L3.32604 4.95305C3.11043 4.73739 2.9893 4.44494 2.9893 4.14C2.9893 3.83506 3.11043 3.54261 3.32604 3.32695ZM18.0477 3.32695C18.2547 3.1207 18.5324 3.00096 18.8245 2.99204C19.1165 2.98312 19.401 3.0857 19.6202 3.27894C19.8394 3.47217 19.9768 3.74158 20.0045 4.03245C20.0322 4.32331 19.9482 4.61381 19.7694 4.84495L19.674 4.95305L18.8689 5.75805C18.6619 5.9643 18.3842 6.08404 18.0921 6.09296C17.8 6.10188 17.5155 5.9993 17.2963 5.80606C17.0771 5.61283 16.9398 5.34342 16.912 5.05255C16.8843 4.76169 16.9684 4.47119 17.1471 4.24005L17.2426 4.13195L18.0477 3.32695ZM13.8003 18.4C14.1053 18.4 14.3978 18.5212 14.6135 18.7368C14.8292 18.9525 14.9504 19.245 14.9504 19.55C14.9504 20.465 14.5869 21.3425 13.9398 21.9895C13.2927 22.6365 12.4151 23 11.5 23C10.5849 23 9.70728 22.6365 9.06021 21.9895C8.41314 21.3425 8.04962 20.465 8.04962 19.55C8.04965 19.2683 8.15308 18.9965 8.34027 18.786C8.52747 18.5755 8.78541 18.441 9.06518 18.408L9.19975 18.4H13.8003ZM11.5 4.6C12.9483 4.6 14.36 5.05566 15.5349 5.90243C16.7099 6.7492 17.5886 7.94416 18.0466 9.31803C18.5046 10.6919 18.5187 12.175 18.0869 13.5574C17.655 14.9397 16.7991 16.1511 15.6405 17.02C15.4819 17.1391 15.2953 17.2151 15.0987 17.2408L14.9504 17.25H8.04962C7.80076 17.25 7.55862 17.1693 7.35954 17.02C6.20086 16.1511 5.34498 14.9397 4.91313 13.5574C4.48128 12.175 4.49535 10.6919 4.95336 9.31803C5.41137 7.94416 6.29009 6.7492 7.46505 5.90243C8.64001 5.05566 10.0517 4.6 11.5 4.6Z' fill='white'/%3E%3C/svg%3E");
  background-size: cover;
  width: 23px;
  height: 23px;
`;

export const FeedbackIcon = styled("div")`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='22' height='20' viewBox='0 0 22 20' fill='none'%3E%3Cpath d='M18.7 6.96927C19.5752 6.96927 20.4146 7.3364 21.0335 7.9899C21.6523 8.64339 22 9.52972 22 10.4539V13.9385C22 14.8627 21.6523 15.7491 21.0335 16.4025C20.4146 17.056 19.5752 17.4232 18.7 17.4232V18.5452C18.7 19.7765 17.3404 20.449 16.445 19.6603L13.9018 17.4232H11C10.1248 17.4232 9.28542 17.056 8.66655 16.4025C8.04768 15.7491 7.7 14.8627 7.7 13.9385V10.4539C7.7 9.52972 8.04768 8.64339 8.66655 7.9899C9.28542 7.3364 10.1248 6.96927 11 6.96927H18.7ZM15.4 0C16.2752 0 17.1146 0.36713 17.7335 1.02063C18.3523 1.67412 18.7 2.56045 18.7 3.48464V4.64618H9.9C8.73305 4.64618 7.61389 5.13569 6.78873 6.00701C5.96357 6.87834 5.5 8.06012 5.5 9.29236V13.9385C5.5 15.1512 5.94 16.257 6.6616 17.084L5.5 18.0039C4.5936 18.7218 3.3 18.0388 3.3 16.8424V15.1001C2.42479 15.1001 1.58542 14.733 0.966548 14.0795C0.347678 13.426 0 12.5396 0 11.6154V3.48464C0 2.56045 0.347678 1.67412 0.966548 1.02063C1.58542 0.36713 2.42479 0 3.3 0H15.4Z' fill='white'/%3E%3C/svg%3E");
  background-size: cover;
  width: 22px;
  height: 20px;
`;

export const MetionIcon = styled("div")`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 22 22' fill='none'%3E%3Cpath d='M3 10.9968C3 8.87511 3.84286 6.84028 5.34315 5.33999C6.84344 3.8397 8.87827 2.99684 11 2.99684C13.1217 2.99684 15.1566 3.8397 16.6569 5.33999C18.1571 6.84028 19 8.87511 19 10.9968C19 13.3448 17.822 13.9368 17.416 13.9588C17.2 13.9708 16.912 13.8948 16.628 13.5228C16.324 13.1268 16 12.3468 16 10.9968V6.49684C15.9997 6.1659 15.89 5.84435 15.6879 5.58227C15.4858 5.32018 15.2027 5.13229 14.8828 5.04784C14.5628 4.96339 14.2238 4.98714 13.9188 5.11537C13.6137 5.24361 13.3596 5.46915 13.196 5.75684C12.3858 5.25715 11.4519 4.99391 10.5 4.99684C7.3 4.99684 5 7.85484 5 10.9968C5 14.1388 7.3 16.9968 10.5 16.9968C12 16.9968 13.306 16.3668 14.266 15.3748C15.106 16.4548 16.31 17.0268 17.586 16.9548C20.176 16.8088 22 14.2568 22 10.9968C21.9993 8.69626 21.2774 6.45378 19.9357 4.58492C18.594 2.71607 16.7002 1.31492 14.5206 0.578607C12.341 -0.157704 9.98544 -0.192111 7.78529 0.480227C5.58514 1.15257 3.65116 2.49781 2.25548 4.32668C0.859788 6.15554 0.0726409 8.37598 0.00478751 10.6756C-0.0630658 12.9752 0.59179 15.2381 1.87722 17.1461C3.16264 19.0541 5.01393 20.511 7.17061 21.3119C9.32729 22.1128 11.6808 22.2174 13.9 21.6108C14.284 21.5063 14.6108 21.2536 14.8085 20.9081C15.0062 20.5627 15.0585 20.1529 14.954 19.7688C14.8495 19.3848 14.5967 19.058 14.2513 18.8604C13.9058 18.6627 13.496 18.6103 13.112 18.7148C11.9249 19.0373 10.6796 19.082 9.47242 18.8456C8.26527 18.6093 7.12875 18.0981 6.15095 17.3518C5.17314 16.6055 4.38031 15.6441 3.83389 14.542C3.28747 13.44 3.00213 12.2269 3 10.9968ZM13 10.9968C13 12.8248 11.72 13.9968 10.5 13.9968C9.28 13.9968 8 12.8248 8 10.9968C8 9.16884 9.28 7.99684 10.5 7.99684C11.72 7.99684 13 9.16884 13 10.9968Z' fill='white'/%3E%3C/svg%3E");
  background-size: cover;
  width: 22px;
  height: 22px;
`;

export const VoteIcon = styled("div")`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='19' height='21' viewBox='0 0 19 21' fill='none'%3E%3Cpath d='M15.8333 11.5506H15.1156L13.0044 13.6505H15.0206L16.8889 15.7503H2.11111L3.99 13.6505H6.15389L4.04278 11.5506H3.16667L0 14.7004V18.9001C0 20.0551 0.939444 21 2.10056 21H16.8889C18.05 21 19 20.0656 19 18.9001V14.7004L15.8333 11.5506ZM14.7778 6.24843L9.55278 11.4456L5.81611 7.72884L11.0411 2.53166L14.7778 6.24843ZM10.3022 0.305806L3.57833 6.99388C3.16667 7.40336 3.16667 8.06481 3.57833 8.47429L8.80333 13.6715C9.215 14.0809 9.88 14.0809 10.2917 13.6715L17.005 6.99388C17.4167 6.58441 17.4167 5.92295 17.005 5.51348L11.78 0.316305C11.3789 -0.103668 10.7139 -0.103668 10.3022 0.305806Z' fill='white'/%3E%3C/svg%3E");
  background-size: cover;
  width: 19px;
  height: 21px;
`;

export const ProjectIcon = styled("div")`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='22' viewBox='0 0 20 22' fill='none'%3E%3Cpath d='M10 22C10.6881 22.0009 11.3594 21.7895 11.9205 21.3952C12.4817 21.0009 12.9048 20.4433 13.1311 19.8H6.86889C7.09518 20.4433 7.51831 21.0009 8.07946 21.3952C8.6406 21.7895 9.31189 22.0009 10 22ZM17.7778 13.8446V8.8C17.7778 5.2613 15.35 2.2803 12.0611 1.3838C11.7356 0.572 10.94 0 10 0C9.06 0 8.26445 0.572 7.93889 1.3838C4.65 2.2814 2.22222 5.2613 2.22222 8.8V13.8446L0.325557 15.7223C0.222176 15.8243 0.14019 15.9455 0.0843171 16.079C0.0284446 16.2124 -0.000210499 16.3555 1.16408e-06 16.5V17.6C1.16408e-06 17.8917 0.117064 18.1715 0.325438 18.3778C0.533812 18.5841 0.816427 18.7 1.11111 18.7H18.8889C19.1836 18.7 19.4662 18.5841 19.6746 18.3778C19.8829 18.1715 20 17.8917 20 17.6V16.5C20.0002 16.3555 19.9716 16.2124 19.9157 16.079C19.8598 15.9455 19.7778 15.8243 19.6744 15.7223L17.7778 13.8446Z' fill='white'/%3E%3C/svg%3E");
  background-size: cover;
  width: 20px;
  height: 22px;
`;
