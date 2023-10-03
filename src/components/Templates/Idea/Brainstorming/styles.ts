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

export const CreateVoteButtonWrap = styled("div")`
  width: 150px;
`;

export const BrainstorminIcon = styled("div")`
  background-image: url("data:image/svg+xml,%3Csvg width='223' height='174' viewBox='0 0 223 174' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='111' cy='87' r='61' fill='%237B40F2'/%3E%3Cpath d='M8.50423e-05 87C8.50423e-05 38.9511 49.9202 0 111.5 0C173.08 0 223 38.9511 223 87C223 135.049 173.08 174 111.5 174C92.6406 174 74.8484 170.34 59.2543 163.877L15.2278 173.646C13.1816 174.098 11.0177 174.117 8.95951 173.698C6.90134 173.28 5.02355 172.441 3.52008 171.267C2.01661 170.093 0.941982 168.628 0.407185 167.022C-0.127611 165.415 -0.103185 163.727 0.477942 162.131L12.9978 127.784C4.4414 115.228 -0.0224688 101.221 8.50423e-05 87ZM63.7143 68.3571C63.7143 70.0053 64.5534 71.5859 66.047 72.7513C67.5406 73.9167 69.5664 74.5714 71.6786 74.5714H151.321C153.434 74.5714 155.459 73.9167 156.953 72.7513C158.447 71.5859 159.286 70.0053 159.286 68.3571C159.286 66.709 158.447 65.1284 156.953 63.963C155.459 62.7976 153.434 62.1429 151.321 62.1429H71.6786C69.5664 62.1429 67.5406 62.7976 66.047 63.963C64.5534 65.1284 63.7143 66.709 63.7143 68.3571ZM71.6786 99.4286C69.5664 99.4286 67.5406 100.083 66.047 101.249C64.5534 102.414 63.7143 103.995 63.7143 105.643C63.7143 107.291 64.5534 108.872 66.047 110.037C67.5406 111.202 69.5664 111.857 71.6786 111.857H119.464C121.577 111.857 123.602 111.202 125.096 110.037C126.59 108.872 127.429 107.291 127.429 105.643C127.429 103.995 126.59 102.414 125.096 101.249C123.602 100.083 121.577 99.4286 119.464 99.4286H71.6786Z' fill='%237B40F2'/%3E%3Cpath d='M82.8198 34.8377C87.6485 31.0774 93.963 29 100.237 29C103.992 29 107.027 30.2882 109.331 32.3367C109.952 32.8879 110.504 33.4856 110.997 34.1007C111.49 33.4856 112.042 32.8879 112.663 32.3367C114.967 30.2882 118.002 29 121.757 29C128.031 29 134.351 31.0774 139.169 34.8377C142.929 37.7566 145.872 41.7896 147.027 46.6582C149.465 47.0644 151.629 48.3063 153.382 49.9485C156.168 52.5656 158.159 56.3491 159.406 60.2428C160.677 64.1946 161.31 68.6338 161.118 72.8989C161.02 75.0808 160.701 77.3092 160.091 79.4388L160.468 79.6129C162.616 80.6226 164.357 82.2068 165.663 84.3133C168.129 88.2882 169 94.0099 169 101.304C169 109.689 165.791 115.382 161.67 118.916C159.524 120.756 157.011 122.121 154.299 122.92C153.315 127.455 151.293 131.699 148.391 135.321C144.195 140.567 137.671 145 128.908 145C121.885 145 116.354 141.112 112.802 137.398C112.172 136.734 111.572 136.043 111.003 135.327C110.432 136.041 109.83 136.731 109.198 137.392C105.646 141.118 100.115 145 93.0925 145C84.323 145 77.7995 140.567 73.6092 135.321C70.7031 131.701 68.6767 127.456 67.6893 122.92C64.979 122.121 62.4689 120.756 60.3244 118.916C56.2037 115.376 53 109.689 53 101.304C53 94.0099 53.8706 88.2882 56.3314 84.3133C57.637 82.1491 59.5844 80.4454 61.903 79.4388C61.3067 77.3064 60.9619 75.1115 60.8757 72.8989C60.6842 68.6338 61.3168 64.1946 62.5878 60.2428C63.8356 56.3549 65.8205 52.5656 68.6121 49.9485C70.3581 48.2469 72.5699 47.1018 74.9673 46.6582C76.128 41.7838 79.0647 37.7566 82.8198 34.8377ZM88.1709 41.7026C85.002 44.1688 83.1448 47.4532 83.1448 51.2367C83.1443 51.926 82.98 52.6052 82.6656 53.2186C82.3512 53.832 81.8955 54.3619 81.3362 54.7647C80.7769 55.1676 80.1298 55.4319 79.4484 55.5358C78.7669 55.6398 78.0705 55.5804 77.4165 55.3626C76.6214 55.0956 75.7798 55.1595 74.5726 56.2968C73.2261 57.5561 71.8623 59.8366 70.8756 62.9005C69.8887 66.0042 69.4488 69.2558 69.5756 72.5102C69.7207 75.7366 70.4868 78.4175 71.694 80.228C71.8937 80.528 72.0555 80.8515 72.1757 81.1913H78.4553C82.6339 81.1904 86.6579 82.7708 89.7187 85.6148C92.7796 88.4589 94.6505 92.3558 94.9555 96.5226C97.4556 97.52 99.5314 99.3553 100.827 101.714C102.123 104.073 102.559 106.809 102.06 109.454C101.561 112.099 100.158 114.488 98.0911 116.212C96.0244 117.937 93.4225 118.89 90.7307 118.907C88.0389 118.925 85.4246 118.007 83.3352 116.31C81.2458 114.613 79.8112 112.243 79.277 109.605C78.7428 106.967 79.1422 104.226 80.4067 101.85C81.6713 99.4738 83.7225 97.6111 86.2092 96.5806C85.9335 94.7217 84.9988 93.0238 83.5754 91.7967C82.152 90.5695 80.3348 89.8948 78.4553 89.8956H63.2204C62.3499 91.9151 61.7057 95.4026 61.7057 101.304C61.7057 107.229 63.8589 110.479 65.9946 112.312C68.3336 114.314 70.9046 114.837 71.6475 114.837C72.802 114.837 73.9091 115.295 74.7254 116.111C75.5417 116.927 76.0004 118.034 76.0004 119.189C76.0004 121.626 77.3468 126.054 80.4112 129.883C83.3595 133.58 87.5615 136.296 93.0925 136.296C96.7895 136.296 100.19 134.218 102.901 131.386C104.212 130.005 105.234 128.572 105.907 127.411C106.162 126.977 106.385 126.526 106.575 126.059L106.609 125.978V71.0362H101.409C100.399 73.533 98.5519 75.6008 96.1842 76.8852C93.8165 78.1696 91.0757 78.5906 88.4315 78.0761C85.7874 77.5617 83.4045 76.1437 81.6913 74.0653C79.9781 71.9869 79.0412 69.3774 79.0412 66.684C79.0412 63.9907 79.9781 61.3812 81.6913 59.3028C83.4045 57.2244 85.7874 55.8064 88.4315 55.2919C91.0757 54.7775 93.8165 55.1985 96.1842 56.4829C98.5519 57.7673 100.399 59.8351 101.409 62.3319H106.609V47.6041L106.592 47.2733C106.493 45.4861 106.141 43.722 105.547 42.0333C105.025 40.6406 104.346 39.5555 103.545 38.8417C102.831 38.2034 101.845 37.7044 100.237 37.7044C95.7912 37.7044 91.3862 39.2015 88.1651 41.7084L88.1709 41.7026ZM115.391 116.009V125.978L115.42 126.059C115.536 126.367 115.756 126.825 116.093 127.411C116.76 128.572 117.782 130.005 119.099 131.386C121.804 134.218 125.211 136.296 128.908 136.296C134.433 136.296 138.635 133.58 141.589 129.883C144.647 126.054 146 121.62 146 119.189C146 118.034 146.458 116.927 147.275 116.111C148.091 115.295 149.198 114.837 150.352 114.837C151.095 114.837 153.661 114.314 156.005 112.312C158.135 110.479 160.289 107.229 160.289 101.304C160.289 94.2942 159.372 90.6848 158.263 88.9034C157.916 88.2872 157.39 87.7914 156.754 87.4816C156.168 87.2031 155.286 86.9942 153.922 86.9942C153.134 86.9941 152.361 86.7803 151.685 86.3755C151.009 85.9707 150.456 85.3901 150.084 84.6956C149.713 84.0011 149.536 83.2187 149.574 82.4319C149.612 81.6451 149.863 80.8834 150.3 80.228C151.507 78.4117 152.274 75.7366 152.424 72.5102C152.549 69.2555 152.107 66.0039 151.119 62.9005C150.132 59.8366 148.768 57.5619 147.427 56.2968C146.214 55.1595 145.373 55.0956 144.584 55.3626C143.929 55.5815 143.232 55.6418 142.55 55.5384C141.868 55.435 141.22 55.1709 140.66 54.7679C140.1 54.3649 139.643 53.8346 139.329 53.2206C139.014 52.6066 138.85 51.9266 138.849 51.2367C138.849 47.4532 136.992 44.1688 133.823 41.7026C130.614 39.2015 126.203 37.6985 121.751 37.6985C120.15 37.6985 119.169 38.2034 118.449 38.8359C117.54 39.7269 116.856 40.8207 116.453 42.0275C115.802 43.8174 115.443 45.7003 115.391 47.6041V107.304H119.082C121.16 107.304 123.153 106.479 124.622 105.01C126.091 103.541 126.917 101.548 126.917 99.4704V89.0542C124.42 88.0442 122.352 86.1973 121.067 83.8299C119.782 81.4626 119.361 78.7222 119.876 76.0784C120.39 73.4347 121.809 71.0522 123.887 69.3393C125.966 67.6263 128.576 66.6896 131.27 66.6896C133.963 66.6896 136.573 67.6263 138.652 69.3393C140.731 71.0522 142.149 73.4347 142.663 76.0784C143.178 78.7222 142.757 81.4626 141.472 83.8299C140.188 86.1973 138.12 88.0442 135.623 89.0542V99.4704C135.623 103.857 133.88 108.063 130.778 111.165C127.676 114.266 123.469 116.009 119.082 116.009H115.391ZM90.6433 63.7826C89.8736 63.7826 89.1355 64.0883 88.5913 64.6324C88.0471 65.1765 87.7414 65.9145 87.7414 66.684C87.7414 67.4536 88.0471 68.1916 88.5913 68.7357C89.1355 69.2798 89.8736 69.5855 90.6433 69.5855C91.4129 69.5855 92.151 69.2798 92.6952 68.7357C93.2394 68.1916 93.5452 67.4536 93.5452 66.684C93.5452 65.9145 93.2394 65.1765 92.6952 64.6324C92.151 64.0883 91.4129 63.7826 90.6433 63.7826ZM87.7414 107.304C87.7414 108.074 88.0471 108.812 88.5913 109.356C89.1355 109.9 89.8736 110.206 90.6433 110.206C91.4129 110.206 92.151 109.9 92.6952 109.356C93.2394 108.812 93.5452 108.074 93.5452 107.304C93.5452 106.535 93.2394 105.797 92.6952 105.253C92.151 104.709 91.4129 104.403 90.6433 104.403C89.8736 104.403 89.1355 104.709 88.5913 105.253C88.0471 105.797 87.7414 106.535 87.7414 107.304ZM128.368 78.2898C128.368 79.0594 128.674 79.7974 129.218 80.3415C129.762 80.8856 130.5 81.1913 131.27 81.1913C132.039 81.1913 132.777 80.8856 133.322 80.3415C133.866 79.7974 134.172 79.0594 134.172 78.2898C134.172 77.5203 133.866 76.7823 133.322 76.2382C132.777 75.6941 132.039 75.3884 131.27 75.3884C130.5 75.3884 129.762 75.6941 129.218 76.2382C128.674 76.7823 128.368 77.5203 128.368 78.2898Z' fill='white'/%3E%3C/svg%3E%0A");
  background-size: cover;
  width: 223px;
  height: 174px;
`;

export const EmptyMessage = styled("div")`
  font-size: 20px;
  text-align: center;
  font-weight: bold;

  span {
    white-space: break-spaces;
    color: #7b40f2;
  }
`;

export const Header = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  &.profile {
    justify-content: flex-end;
  }

  &.search,
  &.rate,
  &.add-button {
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
  padding: 20px;
  border-radius: 5px;
  background-color: #fff;
`;

export const Card = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const StyledGrid = styled(Grid)`
  display: flex;
  width: 351px;
  height: 175px;
  padding: 10px;
  background-color: white;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  cursor: pointer;
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.1), -2px -2px 4px rgba(0, 0, 0, 0.1),
    3px -3px 4px rgba(0, 0, 0, 0.1);
  position: relative;

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
    overflow-y: auto;
  }
`;

export const Status = styled("div")<{ enable: boolean }>`
  width: 15px;
  height: 15px;
  border-radius: 15px;
  position: absolute;
  right: 13px;
  background-color: ${(props) => (props.enable ? "#00b18c" : "#f36262")};
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
  justify-content: flex-start;
  align-items: center;
  gap: 5px;

  span {
    font-size: 8px;
    color: #9f9f9f;
  }
`;

export const ProfileWrap = styled("div")`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

export const TimeIcon = styled("div")`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='13' height='13' viewBox='0 0 13 13' fill='none'%3E%3Cg clip-path='url(%23clip0_1886_6010)'%3E%3Cpath d='M6.5 2.84375C6.5 2.73601 6.4572 2.63267 6.38101 2.55649C6.30483 2.4803 6.20149 2.4375 6.09375 2.4375C5.98601 2.4375 5.88267 2.4803 5.80649 2.55649C5.7303 2.63267 5.6875 2.73601 5.6875 2.84375V7.3125C5.68752 7.38411 5.70647 7.45444 5.74243 7.51636C5.77839 7.57829 5.83007 7.62961 5.89225 7.66512L8.736 9.29012C8.82932 9.34056 8.93867 9.35249 9.04067 9.32337C9.14268 9.29425 9.22925 9.22639 9.28188 9.13429C9.33451 9.04218 9.34902 8.93315 9.32233 8.83048C9.29563 8.72782 9.22983 8.63967 9.139 8.58488L6.5 7.07688V2.84375Z' fill='%236E6E6E'/%3E%3Cpath d='M6.5 13C8.22391 13 9.87721 12.3152 11.0962 11.0962C12.3152 9.87721 13 8.22391 13 6.5C13 4.77609 12.3152 3.12279 11.0962 1.90381C9.87721 0.68482 8.22391 0 6.5 0C4.77609 0 3.12279 0.68482 1.90381 1.90381C0.68482 3.12279 0 4.77609 0 6.5C0 8.22391 0.68482 9.87721 1.90381 11.0962C3.12279 12.3152 4.77609 13 6.5 13ZM12.1875 6.5C12.1875 8.00842 11.5883 9.45506 10.5217 10.5217C9.45506 11.5883 8.00842 12.1875 6.5 12.1875C4.99158 12.1875 3.54494 11.5883 2.47833 10.5217C1.41172 9.45506 0.8125 8.00842 0.8125 6.5C0.8125 4.99158 1.41172 3.54494 2.47833 2.47833C3.54494 1.41172 4.99158 0.8125 6.5 0.8125C8.00842 0.8125 9.45506 1.41172 10.5217 2.47833C11.5883 3.54494 12.1875 4.99158 12.1875 6.5Z' fill='%236E6E6E'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_1886_6010'%3E%3Crect width='13' height='13' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
  background-size: cover;
  width: 13px;
  height: 13px;
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
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='19' height='19' viewBox='0 0 19 19' fill='none'%3E%3Cpath d='M12.6641 8.70801C13.9782 8.70801 15.0311 7.64717 15.0311 6.33301C15.0311 5.01884 13.9782 3.95801 12.6641 3.95801C11.3499 3.95801 10.2891 5.01884 10.2891 6.33301C10.2891 7.64717 11.3499 8.70801 12.6641 8.70801ZM6.33073 8.70801C7.6449 8.70801 8.69781 7.64717 8.69781 6.33301C8.69781 5.01884 7.6449 3.95801 6.33073 3.95801C5.01656 3.95801 3.95573 5.01884 3.95573 6.33301C3.95573 7.64717 5.01656 8.70801 6.33073 8.70801ZM6.33073 10.2913C4.48615 10.2913 0.789062 11.2176 0.789062 13.0622V14.2497C0.789062 14.6851 1.14531 15.0413 1.58073 15.0413H11.0807C11.5161 15.0413 11.8724 14.6851 11.8724 14.2497V13.0622C11.8724 11.2176 8.17531 10.2913 6.33073 10.2913ZM12.6641 10.2913C12.4345 10.2913 12.1732 10.3072 11.8961 10.3309C11.912 10.3388 11.9199 10.3547 11.9278 10.3626C12.8303 11.0197 13.4557 11.8984 13.4557 13.0622V14.2497C13.4557 14.5268 13.4003 14.7959 13.3132 15.0413H17.4141C17.8495 15.0413 18.2057 14.6851 18.2057 14.2497V13.0622C18.2057 11.2176 14.5086 10.2913 12.6641 10.2913Z' fill='%236E6E6E'/%3E%3C/svg%3E");
  background-size: cover;
  width: 19px;
  height: 19px;
`;

export const BottomColorBar = styled("div")`
  height: 15px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  background-color: #ad1deb;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;
