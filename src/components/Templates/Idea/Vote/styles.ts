import { css, styled } from "@mui/material/styles";

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

export const VoteIcon = styled("div")`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='197' height='221' viewBox='0 0 197 221' fill='none'%3E%3Cpath d='M164.167 121.556H156.724L134.836 143.655H155.739L175.111 165.753H21.8889L41.37 143.655H63.8061L41.9172 121.556H32.8333L0 154.704V198.901C0 211.056 9.74055 221 21.7794 221H175.111C187.15 221 197 211.166 197 198.901V154.704L164.167 121.556ZM153.222 65.7573L99.0472 120.451L60.3039 81.3368L114.479 26.6428L153.222 65.7573ZM106.818 3.21824L37.1017 73.6023C32.8333 77.9115 32.8333 84.8726 37.1017 89.1818L91.2767 143.876C95.545 148.185 102.44 148.185 106.708 143.876L176.315 73.6023C180.583 69.2931 180.583 62.332 176.315 58.0228L122.14 3.32873C117.981 -1.09099 111.086 -1.09099 106.818 3.21824Z' fill='%23713EDC' fill-opacity='0.1'/%3E%3C/svg%3E");
  background-size: cover;
  width: 197px;
  height: 221px;
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

export const TitleWrap = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    padding-left: 10px;
    font-size: 24px;
    font-weight: 600;
    margin-right: 10px;
  }
`;

export const TitleDueDateText = styled("p")`
  display: block;
  padding: 4px 6px;
  background-color: rgba(123, 64, 242, 0.1);
  color: #7b40f2;
  border-radius: 5px;
`;

export const TitleBar = styled("div")`
  width: 7px;
  height: 32px;
  background: linear-gradient(0deg, #6e72fc 0%, #ad1deb 100%);
`;

export const ConfigWrap = styled("div")`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

export const ConfigIcon = styled("div")`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='35' height='30' viewBox='0 0 35 30' fill='none'%3E%3Cpath d='M25 30L24.5 27.5C24.1667 27.3611 23.8539 27.215 23.5617 27.0617C23.2694 26.9083 22.9711 26.7211 22.6667 26.5L20.25 27.25L18.5833 24.4167L20.5 22.75C20.4444 22.4167 20.4167 22.0556 20.4167 21.6667C20.4167 21.2778 20.4444 20.9167 20.5 20.5833L18.5833 18.9167L20.25 16.0833L22.6667 16.8333C22.9722 16.6111 23.2711 16.4239 23.5633 16.2717C23.8556 16.1194 24.1678 15.9733 24.5 15.8333L25 13.3333H28.3333L28.8333 15.8333C29.1667 15.9722 29.4794 16.1183 29.7717 16.2717C30.0639 16.425 30.3622 16.6122 30.6667 16.8333L33.0833 16.0833L34.75 18.9167L32.8333 20.5833C32.8889 20.9167 32.9167 21.2778 32.9167 21.6667C32.9167 22.0556 32.8889 22.4167 32.8333 22.75L34.75 24.4167L33.0833 27.25L30.6667 26.5C30.3611 26.7222 30.0628 26.91 29.7717 27.0633C29.4806 27.2167 29.1678 27.3622 28.8333 27.5L28.3333 30H25ZM26.6667 25C27.5833 25 28.3683 24.6733 29.0217 24.02C29.675 23.3667 30.0011 22.5822 30 21.6667C30 20.75 29.6733 19.965 29.02 19.3117C28.3667 18.6583 27.5822 18.3322 26.6667 18.3333C25.75 18.3333 24.965 18.66 24.3117 19.3133C23.6583 19.9667 23.3322 20.7511 23.3333 21.6667C23.3333 22.5833 23.66 23.3683 24.3133 24.0217C24.9667 24.675 25.7511 25.0011 26.6667 25ZM3.33334 26.6667C2.41667 26.6667 1.63167 26.34 0.978336 25.6867C0.325003 25.0333 -0.00110828 24.2489 2.82966e-06 23.3333V3.33334C2.82966e-06 2.41667 0.32667 1.63167 0.980003 0.978336C1.63334 0.325003 2.41778 -0.00110828 3.33334 2.82966e-06H13.3333L16.6667 3.33334H30C30.9167 3.33334 31.7017 3.66 32.355 4.31334C33.0083 4.96667 33.3344 5.75111 33.3333 6.66667V12.0833C32.3611 11.3889 31.3056 10.8678 30.1667 10.52C29.0278 10.1722 27.8611 9.99889 26.6667 10C23.4167 10 20.6594 11.1322 18.395 13.3967C16.1306 15.6611 14.9989 18.4178 15 21.6667C15 22.5556 15.0906 23.4167 15.2717 24.25C15.4528 25.0833 15.7372 25.8889 16.125 26.6667H3.33334Z' fill='%236E6E6E'/%3E%3C/svg%3E");
  background-size: cover;
  width: 35px;
  height: 30px;
`;

export const SliderWrap = styled("div")<{ isHide?: boolean; isShow?: boolean }>`
  display: flex;
  flex-direction: column;

  span {
    font-size: 8px;
    color: #6e6e6e;
    text-align: right;
    margin-top: 4px;
  }

  &:hover .joiner-box {
    visibility: ${(props) => (props.isHide ? "hidden" : "visible")};
  }

  ${({ isShow }) =>
    isShow &&
    css`
      & .joiner-box {
        visibility: visible;
      }
    `};
`;

export const SliderBackground = styled("div")`
  width: 374px;
  height: 28px;
  background-color: #eaeaea;
  border-radius: 100px;
`;

export const Slider = styled("div")<{ total: number; count: number }>`
  width: ${(props) => `calc(100% / ${props.total} * ${props.count})`};
  height: 100%;
  background-color: #00b18c;
  border-radius: 100px;
`;

export const MessageBox = styled("div")`
  visibility: hidden;
  width: fit-content;
  height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 3px 10px;
  margin-bottom: 7px;
  background-color: #eaeaea;
  color: #6e6e6e;
  border-radius: 4px;
  font-size: 8px;

  ::before {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 45%;
    border-width: 4px;
    border-style: solid;
    border-color: #eaeaea transparent transparent transparent;
  }
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

export const Content = styled("div")`
  width: 73%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 15px;

  span {
    &.name {
      font-size: 20px;
    }

    &.email {
      font-size: 12px;
    }
  }
`;

export const Table = styled("table")`
  width: 100%;
  height: 100%;
`;

export const TableHead = styled("thead")``;

export const TableHeader = styled("th")`
  padding: 10px 5px;
  background-color: #f9f9f9;
  flex: 1;
  font-size: 13px;
  color: #6e6e6e;
  &.assign {
    border-top-left-radius: 100px;
    border-bottom-left-radius: 100px;
  }

  &.vote {
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
    flex: 1.5;
  }
`;

export const TableRow = styled("tr")<{ isFill?: boolean; rank?: number }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 7px;

  &.body {
    background-color: ${(props) =>
      props.isFill ? "rgba(113, 62, 220, 0.05)" : "rgba(113, 62, 220, 0.02)"};
    border-radius: 5px;
    
    ${({ rank }) => {
      if (!rank) {
        return "";
      }

      switch (rank) {
        case 1:
          return css`
            background-color: rgba(123, 64, 242, 0.1) !important;
          `;
        case 2:
          return css`
            background-color: rgba(113, 62, 220, 0.07) !important;
          `;
        case 3:
          return css`
            background-color: rgba(113, 62, 220, 0.05) !important;
          `;
        default:
          return css`
            background-color: #fff !important;
          `;
      }
    }}
`;

export const TableData = styled("td")<{ isTitle?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 5px;
  flex: 1;
  position: relative;

  &.title {
    font-weight: bold;
  }

  &.liked {
    gap: 5px;
    color: #7b40f2;
  }

  &.vote {
    gap: 10px;
    flex: 1.5;
  }

  ${({ isTitle }) =>
    isTitle &&
    css`
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
    `}
`;

export const PercentWrap = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -22px;

  &:hover .count {
    visibility: visible;
`;

export const Category = styled("div")`
  width: 66px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #7b40f2;
  border-radius: 20px;
  font-size: 14px;
`;

export const Percent = styled("div")<{ level: string }>`
  width: 57px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${(props) => {
    if (props.level === "HIGH") {
      return "rgba(220, 76, 100, 0.1);";
    } else if (props.level === "MIDDLE") {
      return " rgba(123, 64, 242, 0.1);";
    } else if (props.level === "LOW") {
      return "rgba(110, 110, 110, 0.1);";
    }
  }};
  color: ${(props) => {
    if (props.level === "HIGH") {
      return "#dc4c64";
    } else if (props.level === "MIDDLE") {
      return "#7b40f2";
    } else if (props.level === "LOW") {
      return "#6e6e6e";
    }
  }};
  }
`;

export const IconWrap = styled("div")<{ isVoted: boolean }>`
  width: 63px;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.isVoted ? "rgba(113, 62, 220, 0.8)" : "rgba(113, 62, 220, 0.1)"};
  border-radius: 100px;
  cursor: pointer;
`;

export const VotedIcon = styled("div")<{ isVoted: boolean }>`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='47' viewBox='0 0 30 47' fill='none'%3E%3Cpath d='M17.8719 34.0117H11.3449C10.0194 34.0117 8.92872 35.0856 8.9455 36.4111V42.9381C8.9455 44.2636 10.0194 45.3375 11.3449 45.3375H11.761C12.0439 45.8418 12.456 46.2617 12.955 46.5539C13.4539 46.8461 14.0218 47.0002 14.6 47.0002C15.1782 47.0002 15.746 46.8461 16.245 46.5539C16.744 46.2617 17.1561 45.8418 17.439 45.3375H17.8719C19.1974 45.3375 20.2713 44.2636 20.2713 42.9381V36.4111C20.2713 35.0856 19.1974 34.0117 17.8719 34.0117Z' fill='%239B9B9B'/%3E%3Cpath d='M18.7271 35.4539C19.1298 35.4539 19.4486 35.1518 19.4822 34.7659C19.5996 33.3229 20.2205 29.8161 23.6098 26.0577C25.227 24.7842 26.5553 23.1819 27.507 21.3568C28.4586 19.5316 29.0118 17.5251 29.1301 15.4702C29.1636 15.0675 29.1804 14.799 29.1804 14.6312V14.4634C29.0797 6.44311 22.5863 2.10001e-08 14.5827 2.10001e-08C10.7417 -0.000205985 7.05568 1.51524 4.32553 4.21711C1.59539 6.91898 0.0416451 10.589 0.00186423 14.4299C0.00186423 14.4299 -0.0149143 14.8326 0.0522013 15.5037C0.320664 19.7656 2.40125 23.5408 5.57247 26.0409C8.96181 29.8161 9.63297 33.3229 9.75042 34.7659C9.78397 35.1518 10.1028 35.4539 10.5055 35.4539H18.7271Z' fill='%23FCD53F'/%3E%3Cpath d='M14.603 14.5978C17.3212 14.5978 19.536 16.7959 19.5696 19.514V19.6483C19.5696 19.6986 19.5696 19.7657 19.5528 19.8664C19.4689 21.2758 18.7809 22.6014 17.6735 23.4739L17.5561 23.5578L17.4554 23.6584C15.6097 25.7055 15.2238 30.9069 15.1567 33.7593H14.0661C13.9822 30.9069 13.5795 25.7055 11.7338 23.6584L11.6331 23.5578L11.5157 23.4739C10.9615 23.0356 10.5071 22.4841 10.1831 21.8562C9.85901 21.2283 9.67265 20.5385 9.63643 19.8328C9.63643 19.7657 9.61966 19.7154 9.61966 19.6818V19.5308C9.66999 16.8126 11.9016 14.5978 14.603 14.5978ZM14.603 12.9199C13.2223 12.9204 11.876 13.351 10.7513 14.1519C9.62659 14.9528 8.77931 16.0842 8.32722 17.3888C7.87512 18.6934 7.84068 20.1064 8.22867 21.4315C8.61666 22.7566 9.40781 23.9279 10.4922 24.7826C12.5056 27.031 12.405 35.454 12.405 35.454H16.8346C16.8346 35.454 16.7004 27.031 18.7306 24.7994C20.1736 23.6584 21.13 21.9302 21.2474 19.9671C21.2642 19.7825 21.2642 19.665 21.2642 19.5812V19.514C21.2461 17.7592 20.5364 16.0823 19.2891 14.8476C18.0419 13.613 16.358 12.9203 14.603 12.9199Z' fill='%23FFB02E'/%3E%3Cpath d='M20.4102 38.679C20.5199 38.6614 20.6251 38.6222 20.7195 38.5636C20.814 38.505 20.8958 38.4282 20.9604 38.3377C21.0249 38.2472 21.0708 38.1448 21.0954 38.0364C21.12 37.928 21.1229 37.8158 21.1037 37.7064C21.0846 37.5969 21.0439 37.4923 20.984 37.3986C20.9242 37.305 20.8463 37.2242 20.7549 37.1609C20.6635 37.0976 20.5605 37.0532 20.4517 37.0301C20.343 37.0069 20.2308 37.0057 20.1216 37.0263L8.81258 39.0062C8.70395 39.0252 8.60012 39.0653 8.50701 39.1244C8.4139 39.1835 8.33334 39.2603 8.26993 39.3505C8.20651 39.4407 8.16149 39.5426 8.13743 39.6502C8.11336 39.7578 8.11073 39.8691 8.12968 39.9777C8.14863 40.0863 8.18879 40.1902 8.24787 40.2833C8.30694 40.3764 8.38378 40.457 8.474 40.5204C8.56421 40.5838 8.66603 40.6288 8.77364 40.6529C8.88125 40.6769 8.99255 40.6796 9.10118 40.6606L20.4102 38.679ZM20.3263 42.2865C20.5369 42.2395 20.7212 42.1132 20.8411 41.9338C20.961 41.7544 21.0071 41.5358 20.97 41.3232C20.9328 41.1107 20.8152 40.9206 20.6416 40.7926C20.468 40.6645 20.2517 40.6082 20.0377 40.6354L8.8797 42.5986C8.76749 42.6134 8.65945 42.6508 8.56207 42.7085C8.46469 42.7662 8.37999 42.8429 8.31307 42.9342C8.24614 43.0255 8.19838 43.1294 8.17265 43.2396C8.14692 43.3498 8.14376 43.4641 8.16336 43.5756C8.18296 43.687 8.22491 43.7934 8.28669 43.8882C8.34847 43.9831 8.42879 44.0644 8.52284 44.1274C8.61688 44.1904 8.72269 44.2336 8.83391 44.2547C8.94512 44.2757 9.05944 44.274 9.16997 44.2496L20.3263 42.2865Z' fill='%23D3D3D3'/%3E%3Cpath d='M11.3943 5.77257C9.53183 8.99413 10.4714 13.0211 13.4917 14.7493C16.5119 16.4775 20.4549 15.2862 22.3174 12.0647C24.1798 8.84311 23.2402 4.81617 20.22 3.08795C17.1998 1.35972 13.2567 2.55102 11.3943 5.77257Z' fill='%23FFF478'/%3E%3C/svg%3E");
  background-size: cover;
  width: 30px;
  height: 47px;
`;

export const VoteTitle = styled("p")`
  font-weight: bold;
  margin: 0 0 6px 0;
  max-width: 150px;
  width: 150px;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const VoteDate = styled("p")`
  color: #bdbdbd;
  font-size: 10px;
  font-weight: 300;
  margin: 0;
`;

export const VoteMedalIcon = styled("img")`
  position: absolute;
  left: 5px;
  top: 50%;
  transform: translate(0px, -50%);
  width: 30px;
  height: 30px;
`;
