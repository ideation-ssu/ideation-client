import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";

export const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrap = styled("div")`
  width: 472px;
  height: 479px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
  border-radius: 16px;
`;

export const Title = styled("div")`
  width: 100%;
  height: 66px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 20px;
    color: #7b40f2;
  }
`;

export const ImageWrap = styled("div")`
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px;
  position: relative;

  input {
    display: none;
  }
`;

export const EditIcon = styled("div")`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='19' viewBox='0 0 20 19' fill='none'%3E%3Cpath d='M9 1.5H3C1.89543 1.5 1 2.39543 1 3.5V16C1 17.1046 1.89543 18 3 18H16C17.1046 18 18 17.1046 18 16V10' stroke='%236E6E6E' stroke-linecap='round'/%3E%3Cpath d='M13.8376 2.47487L14.8983 1.41421C15.6793 0.633165 16.9457 0.633165 17.7267 1.41421V1.41421C18.5078 2.19526 18.5078 3.46159 17.7267 4.24264L16.6661 5.3033M13.8376 2.47487L7.33421 8.97829C7.19461 9.11789 7.09945 9.29569 7.06073 9.48928L6.56009 11.9925C6.49012 12.3423 6.79858 12.6508 7.14844 12.5808L9.65164 12.0802C9.84523 12.0415 10.023 11.9463 10.1626 11.8067L16.6661 5.3033M13.8376 2.47487L16.6661 5.3033' stroke='%236E6E6E' stroke-linecap='round'/%3E%3C/svg%3E");
  background-size: cover;
  width: 18px;
  height: 18px;
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 15px;
`;

export const ProfileWrap = styled("div")`
  width: 387px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  span.name {
    font-size: 20px;
  }
  span.status {
    font-size: 15px;
    color: #6e6e6e;
  }

  :last-child.hr {
    margin-bottom: 5px;
  }
`;

export const InfoWrap = styled("div")`
  width: 367px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 15px;

  span.title {
    font-size: 20px;
  }
`;

export const Info = styled("div")`
  display: flex;
  flex-direction: row;

  span {
    font-size: 16px;
  }

  span.category {
    width: 100px;
  }
`;

export const InputBox = styled("input")`
  width: 100%;
  border: none;
  outline: none;
  text-align: center;
  font-size: 15px;
  color: #6e6e6e;

  &.name {
    font-size: 20px;
  }

  &.value {
    width: auto;
    flex: 1;
    text-align: left;
    font-size: 16px;
  }
`;
