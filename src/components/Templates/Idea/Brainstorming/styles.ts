import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

export const EmptyWrap = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const CreateVoteButtonWrap = styled("div")`
  width: 130px;
`;

export const BrainstorminIcon = styled("div")`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='197' height='198' viewBox='0 0 197 198' fill='none'%3E%3Cpath d='M50.6422 9.91555C58.8428 3.52859 69.5665 0 80.2213 0C86.5984 0 91.7533 2.18812 95.6663 5.66743C96.7209 6.60379 97.6573 7.619 98.4951 8.66378C99.3329 7.619 100.269 6.60379 101.324 5.66743C105.237 2.18812 110.392 0 116.769 0C127.424 0 138.157 3.52859 146.338 9.91555C152.725 14.8733 157.722 21.7235 159.684 29.993C163.823 30.683 167.5 32.7923 170.476 35.5816C175.207 40.0269 178.588 46.4532 180.707 53.0669C182.866 59.7791 183.94 67.3193 183.615 74.5637C183.447 78.2697 182.905 82.0546 181.87 85.6719L182.511 85.9676C186.158 87.6826 189.115 90.3734 191.333 93.9513C195.522 100.703 197 110.421 197 122.811C197 137.053 191.549 146.722 184.551 152.725C180.906 155.851 176.64 158.169 172.034 159.526C170.362 167.228 166.928 174.438 162 180.589C154.874 189.499 143.795 197.03 128.912 197.03C116.986 197.03 107.593 190.426 101.56 184.118C100.491 182.99 99.4712 181.816 98.5049 180.599C97.5353 181.813 96.5125 182.984 95.4396 184.108C89.4075 190.436 80.0143 197.03 68.0881 197.03C53.195 197.03 42.1164 189.499 35.0001 180.589C30.0648 174.44 26.6234 167.23 24.9466 159.526C20.3437 158.168 16.0808 155.85 12.4388 152.725C5.44074 146.713 0 137.053 0 122.811C0 110.421 1.47846 100.703 5.65758 93.9513C7.87483 90.2754 11.1821 87.3816 15.1197 85.6719C14.1071 82.0499 13.5216 78.3218 13.3751 74.5637C13.0499 67.3193 14.1242 59.7791 16.2828 53.0669C18.4019 46.4631 21.7728 40.0269 26.5137 35.5816C29.4788 32.6915 33.235 30.7465 37.3065 29.993C39.2778 21.7137 44.2651 14.8733 50.6422 9.91555ZM59.7298 21.5757C54.3482 25.7647 51.1942 31.3434 51.1942 37.7697C51.1933 38.9404 50.9144 40.0942 50.3804 41.136C49.8464 42.1778 49.0726 43.0779 48.1227 43.7622C47.1728 44.4465 46.0739 44.8954 44.9166 45.0719C43.7593 45.2485 42.5766 45.1476 41.4659 44.7777C40.1156 44.3243 38.6864 44.4327 36.6363 46.3645C34.3496 48.5034 32.0333 52.3769 30.3577 57.5811C28.6816 62.8528 27.9345 68.3758 28.1499 73.9033C28.3963 79.3835 29.6974 83.9372 31.7475 87.0124C32.0867 87.5219 32.3615 88.0714 32.5656 88.6485H43.2302C50.3265 88.647 57.1604 91.3313 62.3586 96.162C67.5568 100.993 70.7341 107.612 71.252 114.689C75.4979 116.383 79.0231 119.501 81.2241 123.507C83.425 127.514 84.165 132.161 83.3173 136.654C82.4696 141.146 80.0869 145.204 76.5771 148.133C73.0673 151.062 68.6485 152.68 64.0771 152.711C59.5057 152.741 55.0659 151.182 51.5175 148.299C47.9692 145.417 45.5329 141.391 44.6256 136.91C43.7184 132.43 44.3966 127.773 46.5442 123.738C48.6918 119.702 52.1752 116.538 56.3984 114.788C55.9302 111.63 54.3427 108.746 51.9254 106.662C49.5081 104.578 46.4221 103.432 43.2302 103.433H17.3571C15.8787 106.863 14.7846 112.787 14.7846 122.811C14.7846 132.874 18.4413 138.394 22.0685 141.508C26.0406 144.909 30.407 145.796 31.6686 145.796C33.6292 145.796 35.5095 146.575 36.8958 147.961C38.2821 149.347 39.0609 151.228 39.0609 153.188C39.0609 157.328 41.3476 164.848 46.5518 171.354C51.5589 177.632 58.6949 182.245 68.0881 182.245C74.3666 182.245 80.1424 178.716 84.7454 173.906C86.9729 171.561 88.7077 169.126 89.851 167.155C90.2837 166.418 90.6625 165.65 90.9845 164.858L91.0436 164.72V71.3998H82.2123C80.4968 75.6407 77.3597 79.1529 73.3386 81.3345C69.3176 83.516 64.663 84.2312 60.1725 83.3573C55.6821 82.4835 51.6353 80.0751 48.7258 76.5448C45.8163 73.0145 44.2252 68.5822 44.2252 64.0075C44.2252 59.4328 45.8163 55.0005 48.7258 51.4702C51.6353 47.94 55.6821 45.5315 60.1725 44.6577C64.663 43.7838 69.3176 44.499 73.3386 46.6806C77.3597 48.8621 80.4968 52.3743 82.2123 56.6152H91.0436V31.5996L91.0141 31.0378C90.8454 28.0022 90.2481 25.0057 89.2399 22.1375C88.3528 19.772 87.1996 17.9288 85.8394 16.7165C84.6271 15.6323 82.9515 14.7846 80.2213 14.7846C72.6713 14.7846 65.1903 17.3276 59.72 21.5855L59.7298 21.5757ZM105.956 147.787V164.72L106.006 164.858C106.203 165.381 106.577 166.159 107.149 167.155C108.282 169.126 110.017 171.561 112.255 173.906C116.848 178.716 122.633 182.245 128.912 182.245C138.295 182.245 145.431 177.632 150.448 171.354C155.643 164.848 157.939 157.318 157.939 153.188C157.939 151.228 158.718 149.347 160.104 147.961C161.491 146.575 163.371 145.796 165.331 145.796C166.593 145.796 170.95 144.909 174.932 141.508C178.549 138.394 182.206 132.874 182.206 122.811C182.206 110.904 180.648 104.774 178.766 101.748C178.176 100.701 177.283 99.8589 176.203 99.3329C175.208 98.8598 173.709 98.5049 171.393 98.5049C170.055 98.5048 168.742 98.1416 167.595 97.454C166.447 96.7665 165.507 95.7803 164.876 94.6006C164.245 93.421 163.945 92.0922 164.01 90.7558C164.074 89.4194 164.501 88.1256 165.243 87.0124C167.293 83.9273 168.594 79.3835 168.85 73.9033C169.062 68.3752 168.312 62.8523 166.632 57.5811C164.957 52.3769 162.641 48.5132 160.364 46.3645C158.304 44.4327 156.875 44.3243 155.534 44.7777C154.423 45.1495 153.239 45.2519 152.08 45.0762C150.922 44.9006 149.822 44.4521 148.87 43.7676C147.919 43.0831 147.144 42.1823 146.61 41.1394C146.075 40.0966 145.796 38.9416 145.796 37.7697C145.796 31.3434 142.642 25.7647 137.26 21.5757C131.81 17.3276 124.319 14.7748 116.759 14.7748C114.039 14.7748 112.373 15.6323 111.151 16.7066C109.608 18.22 108.446 20.0778 107.76 22.1276C106.655 25.1678 106.046 28.366 105.956 31.5996V133.002H112.225C115.754 133.002 119.139 131.6 121.634 129.105C124.129 126.61 125.531 123.225 125.531 119.696V102.004C121.29 100.288 117.778 97.1513 115.597 93.1303C113.415 89.1093 112.7 84.4547 113.574 79.9642C114.448 75.4737 116.856 71.427 120.386 68.5175C123.917 65.608 128.349 64.0169 132.924 64.0169C137.498 64.0169 141.931 65.608 145.461 68.5175C148.991 71.427 151.399 75.4737 152.273 79.9642C153.147 84.4547 152.432 89.1093 150.25 93.1303C148.069 97.1513 144.557 100.288 140.316 102.004V119.696C140.316 127.146 137.356 134.291 132.088 139.559C126.82 144.827 119.675 147.787 112.225 147.787H105.956ZM63.9287 59.0793C62.6216 59.0793 61.3681 59.5985 60.4439 60.5227C59.5197 61.447 59.0005 62.7005 59.0005 64.0075C59.0005 65.3146 59.5197 66.5681 60.4439 67.4923C61.3681 68.4165 62.6216 68.9357 63.9287 68.9357C65.2357 68.9357 66.4892 68.4165 67.4134 67.4923C68.3376 66.5681 68.8569 65.3146 68.8569 64.0075C68.8569 62.7005 68.3376 61.447 67.4134 60.5227C66.4892 59.5985 65.2357 59.0793 63.9287 59.0793ZM59.0005 133.002C59.0005 134.309 59.5197 135.563 60.4439 136.487C61.3681 137.411 62.6216 137.931 63.9287 137.931C65.2357 137.931 66.4892 137.411 67.4134 136.487C68.3376 135.563 68.8569 134.309 68.8569 133.002C68.8569 131.695 68.3376 130.442 67.4134 129.518C66.4892 128.593 65.2357 128.074 63.9287 128.074C62.6216 128.074 61.3681 128.593 60.4439 129.518C59.5197 130.442 59.0005 131.695 59.0005 133.002ZM127.995 83.7203C127.995 85.0274 128.515 86.2809 129.439 87.2051C130.363 88.1293 131.616 88.6485 132.924 88.6485C134.231 88.6485 135.484 88.1293 136.408 87.2051C137.332 86.2809 137.852 85.0274 137.852 83.7203C137.852 82.4133 137.332 81.1598 136.408 80.2355C135.484 79.3113 134.231 78.7921 132.924 78.7921C131.616 78.7921 130.363 79.3113 129.439 80.2355C128.515 81.1598 127.995 82.4133 127.995 83.7203Z' fill='%23713EDC' fill-opacity='0.1'/%3E%3C/svg%3E");
  background-size: cover;
  width: 197px;
  height: 197px;
`;

export const EmptyMessage = styled("div")`
  font-size: 30px;
  color: #6e6e6e;
`;

export const Header = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  &.profile,
  &.add-button {
    justify-content: flex-end;
  }
  &.search,
  &.rate {
    justify-content: space-between;
  }
`;

export const ButtonWrap = styled("div")`
  display: flex;
  flex-direction: row;
  width: 118px;
  gap: 10px;
`;

export const ProfileImg = styled("div")`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64' fill='none'%3E%3Cg clip-path='url(%23clip0_273_3027)'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M32.0006 5.33325C17.2727 5.33325 5.33398 17.2719 5.33398 31.9999C5.33398 46.7279 17.2727 58.6666 32.0006 58.6666C46.7286 58.6666 58.6673 46.7279 58.6673 31.9999C58.6673 17.2719 46.7286 5.33325 32.0006 5.33325ZM22.6673 25.3333C22.6673 24.1076 22.9087 22.8939 23.3778 21.7615C23.8468 20.6292 24.5343 19.6003 25.401 18.7336C26.2677 17.8669 27.2966 17.1794 28.4289 16.7104C29.5613 16.2413 30.775 15.9999 32.0006 15.9999C33.2263 15.9999 34.44 16.2413 35.5724 16.7104C36.7047 17.1794 37.7336 17.8669 38.6003 18.7336C39.467 19.6003 40.1545 20.6292 40.6235 21.7615C41.0926 22.8939 41.334 24.1076 41.334 25.3333C41.334 27.8086 40.3507 30.1826 38.6003 31.9329C36.85 33.6833 34.476 34.6666 32.0006 34.6666C29.5253 34.6666 27.1513 33.6833 25.401 31.9329C23.6506 30.1826 22.6673 27.8086 22.6673 25.3333ZM48.6886 45.2906C46.6925 47.8016 44.1548 49.8291 41.2651 51.2218C38.3754 52.6145 35.2084 53.3362 32.0006 53.3332C28.7929 53.3362 25.6259 52.6145 22.7362 51.2218C19.8465 49.8291 17.3088 47.8016 15.3127 45.2906C19.6353 42.1892 25.534 39.9999 32.0006 39.9999C38.4673 39.9999 44.366 42.1892 48.6886 45.2906Z' fill='%23EAEAEA'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_273_3027'%3E%3Crect width='64' height='64' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
  background-size: 53px;
  width: 53px;
  height: 53px;
`;

export const GridBox = styled("div")`
  width: 94%;
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: 25px;
  margin-left: 0;
  padding: 30px;
  border-radius: 5px;
  background-color: #fff;
`;

export const StyledGrid = styled(Grid)`
  display: flex;
  width: 315px;
  height: 220px;
  background-color: white;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);

  &.container {
    width: 100%;
    height: 70vh;
    gap: 25px;
    display: flex;
    flex-direction: row;
    margin-left: 0;
    background-color: transparent;
    cursor: auto;
    box-shadow: none;
  }
`;

export const Content = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 10px;
  gap: 9px;

  span {
    &.title {
      font-size: 20px;
    }
    &.desc {
      font-size: 12px;
    }
  }
`;

export const ImageWrap = styled("div")`
  width: 100%;
  height: 120px;
  background-color: yellowgreen;
  border-radius: 5px;
`;

export const ProjectInfoWrap = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  span {
    font-size: 8px;
    color: #9f9f9f;
  }
`;

export const RelatedUser = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;

  span {
    font-size: 13px;
  }
`;

export const PersonIcon = styled("div")`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='16' viewBox='0 0 24 16' fill='none'%3E%3Cg clip-path='url(%23clip0_821_5712)'%3E%3Cpath d='M16.5334 10.2219H8.03197C5.68436 10.2219 3.78125 11.5485 3.78125 13.1849V13.6663C3.78125 14.2186 4.22897 14.6663 4.78125 14.6663H19.7841C20.3364 14.6663 20.7841 14.2186 20.7841 13.6663V13.1849C20.7841 11.5485 18.881 10.2219 16.5334 10.2219Z' fill='%236E6E6E'/%3E%3Cpath d='M12.2827 7.25893C14.6303 7.25893 16.5334 5.93237 16.5334 4.29597C16.5334 2.65957 14.6303 1.33301 12.2827 1.33301C9.93509 1.33301 8.03197 2.65957 8.03197 4.29597C8.03197 5.93237 9.93509 7.25893 12.2827 7.25893Z' fill='%236E6E6E'/%3E%3Cpath d='M16.5334 10.2219H8.03197C5.68436 10.2219 3.78125 11.5485 3.78125 13.1849V13.6663C3.78125 14.2186 4.22897 14.6663 4.78125 14.6663H19.7841C20.3364 14.6663 20.7841 14.2186 20.7841 13.6663V13.1849C20.7841 11.5485 18.881 10.2219 16.5334 10.2219Z' stroke='%236E6E6E' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M12.2827 7.25893C14.6303 7.25893 16.5334 5.93237 16.5334 4.29597C16.5334 2.65957 14.6303 1.33301 12.2827 1.33301C9.93509 1.33301 8.03197 2.65957 8.03197 4.29597C8.03197 5.93237 9.93509 7.25893 12.2827 7.25893Z' stroke='%236E6E6E' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_821_5712'%3E%3Crect x='0.949219' width='22.6705' height='16' rx='5' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
  background-size: cover;
  width: 16px;
  height: 11px;
`;

export const IdeaIcon = styled("div")`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='26' height='20' viewBox='0 0 26 20' fill='none'%3E%3Cpath d='M13.015 1.66699C11.0634 1.66699 9.19163 2.28157 7.81159 3.37554C6.43155 4.4695 5.65625 5.95323 5.65625 7.50033C5.65625 9.48366 6.90724 11.2253 8.81001 12.2837V14.167C8.81001 14.388 8.92077 14.6 9.11792 14.7562C9.31507 14.9125 9.58246 15.0003 9.86127 15.0003H16.1688C16.4476 15.0003 16.715 14.9125 16.9121 14.7562C17.1093 14.6 17.2201 14.388 17.2201 14.167V12.2837C19.1228 11.2253 20.3738 9.48366 20.3738 7.50033C20.3738 5.95323 19.5985 4.4695 18.2185 3.37554C16.8384 2.28157 14.9667 1.66699 13.015 1.66699ZM9.86127 17.5003C9.86127 17.7213 9.97203 17.9333 10.1692 18.0896C10.3663 18.2459 10.6337 18.3337 10.9125 18.3337H15.1175C15.3964 18.3337 15.6637 18.2459 15.8609 18.0896C16.058 17.9333 16.1688 17.7213 16.1688 17.5003V16.667H9.86127V17.5003Z' fill='%236E6E6E'/%3E%3C/svg%3E");
  background-size: cover;
  width: 25px;
  height: 20px;
`;

export const NotiIcon = styled("div")`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='19' height='16' viewBox='0 0 19 16' fill='none'%3E%3Cpath d='M17.9388 11.0468C17.8632 10.9754 17.789 10.9039 17.7161 10.835C16.7142 9.88464 16.1081 9.31107 16.1081 6.62071C16.1081 5.22786 15.6832 4.085 14.8457 3.22786C14.2282 2.59464 13.3935 2.11429 12.2932 1.75929C12.2664 1.74757 12.2505 1.721 12.2396 1.69382C11.8311 0.677567 10.7608 0 9.55582 0C8.3505 0 7.28046 0.677879 6.87219 1.69349C6.86147 1.72016 6.84565 1.74597 6.81933 1.7575C4.2518 2.58643 3.00401 4.17679 3.00401 6.61964C3.00401 9.31107 2.39878 9.88464 1.396 10.8339C1.32313 10.9029 1.2489 10.9729 1.17331 11.0457C0.978032 11.2304 0.85431 11.4551 0.816782 11.6932C0.779253 11.9313 0.82949 12.1729 0.961546 12.3893C1.24253 12.8536 1.84138 13.1418 2.52493 13.1418H16.5917C17.2721 13.1418 17.8668 12.8539 18.1487 12.3918C18.2813 12.1753 18.3321 11.9336 18.2948 11.6952C18.2576 11.4568 18.1341 11.2318 17.9388 11.0468ZM9.55582 16C10.2139 15.9996 10.8595 15.8595 11.4243 15.5946C11.9891 15.3297 12.4519 14.9498 12.7636 14.4954C12.7783 14.4736 12.7856 14.4492 12.7847 14.4246C12.7838 14.3999 12.7748 14.3759 12.7586 14.3548C12.7424 14.3337 12.7195 14.3162 12.6921 14.3041C12.6647 14.292 12.6338 14.2857 12.6024 14.2857H6.51012C6.47866 14.2856 6.44771 14.2919 6.42028 14.304C6.39285 14.3161 6.36988 14.3335 6.3536 14.3546C6.33733 14.3758 6.32829 14.3998 6.32739 14.4245C6.32649 14.4491 6.33374 14.4735 6.34845 14.4954C6.66018 14.9498 7.12292 15.3296 7.68759 15.5945C8.25227 15.8594 8.89783 15.9995 9.55582 16Z' fill='%236E6E6E'/%3E%3C/svg%3E");
  background-size: cover;
  width: 17.5px;
  height: 16px;
`;
