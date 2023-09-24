import { styled } from "@mui/material/styles";

export const LikedIcon = styled("div")<{ isLiked: boolean }>`
  background-image: ${(props) =>
    props.isLiked
      ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='15' height='14' viewBox='0 0 15 14' fill='none'%3E%3Cpath d='M7.5 13.7625L6.4125 12.7725C2.55 9.27 0 6.9525 0 4.125C0 1.8075 1.815 0 4.125 0C5.43 0 6.6825 0.6075 7.5 1.56C8.3175 0.6075 9.57 0 10.875 0C13.185 0 15 1.8075 15 4.125C15 6.9525 12.45 9.27 8.5875 12.7725L7.5 13.7625Z' fill='%237B40F2'/%3E%3C/svg%3E")`
      : `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='15' height='14' viewBox='0 0 15 14' fill='none'%3E%3Cpath d='M7.5 13.7625L6.4125 12.7725C2.55 9.27 0 6.9525 0 4.125C0 1.8075 1.815 0 4.125 0C5.43 0 6.6825 0.6075 7.5 1.56C8.3175 0.6075 9.57 0 10.875 0C13.185 0 15 1.8075 15 4.125C15 6.9525 12.45 9.27 8.5875 12.7725L7.5 13.7625Z' fill='%23D9D9D9'/%3E%3C/svg%3E")`};
  background-size: cover;
  width: 15px;
  height: 13px;
`;
