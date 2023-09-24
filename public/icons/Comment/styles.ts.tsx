import { styled } from "@mui/material/styles";

export const CommentIcon = styled("div")<{ isLiked: boolean }>`
  background-image: ${(props) =>
    props.isLiked
      ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='14' viewBox='0 0 16 14' fill='none'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.4141 0C14.5186 0 15.4141 0.895431 15.4141 2V8.57404C15.4141 9.67861 14.5186 10.574 13.4141 10.574H10.0182V12.7388C10.0182 13.1401 9.56915 13.3779 9.23719 13.1524L5.44272 10.574H1.99697C0.892406 10.574 -0.00302505 9.67861 -0.00302505 8.57404V2C-0.00302505 0.895431 0.892406 0 1.99698 0H13.4141Z' fill='%237B40F2'/%3E%3C/svg%3E")`
      : `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17' height='15' viewBox='0 0 17 15' fill='none'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M14.1094 1C15.2139 1 16.1094 1.89543 16.1094 3V9.57404C16.1094 10.6786 15.2139 11.574 14.1094 11.574H10.8202V13.729C10.8202 14.1325 10.3669 14.3698 10.0353 14.1399L6.33388 11.574H2.99745C1.89288 11.574 0.997445 10.6786 0.997445 9.57404V3C0.997445 1.89543 1.89287 1 2.99744 1H14.1094Z' fill='%23D9D9D9'/%3E%3Cpath d='M10.8202 11.574H10.3202C10.3202 11.2979 10.5441 11.074 10.8202 11.074V11.574ZM10.0353 14.1399L9.75048 14.5509L10.0353 14.1399ZM6.33388 11.574V11.074C6.43569 11.074 6.53507 11.1051 6.61874 11.1631L6.33388 11.574ZM15.6094 3C15.6094 2.17157 14.9378 1.5 14.1094 1.5V0.5C15.4901 0.5 16.6094 1.61929 16.6094 3H15.6094ZM15.6094 9.57404V3H16.6094V9.57404H15.6094ZM14.1094 11.074C14.9378 11.074 15.6094 10.4025 15.6094 9.57404H16.6094C16.6094 10.9547 15.4901 12.074 14.1094 12.074V11.074ZM10.8202 11.074H14.1094V12.074H10.8202V11.074ZM10.3202 13.729V11.574H11.3202V13.729H10.3202ZM10.3202 13.729V13.729H11.3202C11.3202 14.536 10.4137 15.0106 9.75048 14.5509L10.3202 13.729ZM6.61874 11.1631L10.3202 13.729L9.75048 14.5509L6.04902 11.985L6.61874 11.1631ZM2.99745 11.074H6.33388V12.074H2.99745V11.074ZM1.49745 9.57404C1.49745 10.4025 2.16902 11.074 2.99745 11.074V12.074C1.61673 12.074 0.497445 10.9547 0.497445 9.57404H1.49745ZM1.49745 3V9.57404H0.497445V3H1.49745ZM2.99744 1.5C2.16902 1.5 1.49745 2.17157 1.49745 3H0.497445C0.497445 1.61929 1.61673 0.5 2.99744 0.5V1.5ZM14.1094 1.5H2.99744V0.5H14.1094V1.5Z' fill='%23D9D9D9'/%3E%3C/svg%3E")`};
  background-size: cover;
  width: 15px;
  height: 13px;
`;
