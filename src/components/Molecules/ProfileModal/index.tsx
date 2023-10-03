import React, { useCallback, useRef, useState } from "react";

import Avatar from "@/components/Atoms/Avatar";
import Driver from "@/components/Atoms/Driver";
import { useAuth } from "@/utils/auth";

import {
  EditIcon,
  ImageWrap,
  Info,
  InfoWrap,
  InputBox,
  ModalWrap,
  ProfileWrap,
  StyledModal,
  Title,
} from "./styles";

function ProfileModal({
  isEdit = true,
  open,
  handleClose,
}: {
  isEdit?: boolean;
  open: boolean;
  handleClose: () => void;
}): React.ReactElement {
  const { user, setUser, axios } = useAuth();
  const [editMode, setEditMode] = useState<boolean>(false);
  const imgRef = useRef<HTMLInputElement>(null);

  const [name, setName] = useState<string>(user.name ? user.name : "");
  const [status, setStatus] = useState<string>(user.status ? user.status : "");
  const [company, setCompany] = useState<string>(
    user.company ? user.company : ""
  );
  const [duty, setDuty] = useState<string>(user.duty ? user.duty : "");
  const [phone, setPhone] = useState<string>(user.phone ? user.phone : "");

  const setUserInfo = () => {
    const data = {
      name: name,
      phone: phone,
      company: company,
      duty: duty,
      status: status,
    };
    axios.put(`${process.env.NEXT_PUBLIC_BASEURL}/user`, data).then((res) => {
      setUser(res.data);
    });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setEditMode(false);
      setUserInfo();
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    func: (value: string) => void
  ) => {
    func(event.target.value);
  };

  const uploadImage = () => {
    const file = imgRef.current?.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("profileImage", file);

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        axios
          .patch(
            `${process.env.NEXT_PUBLIC_BASEURL}/user/profile-image`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data", // Content-Type을 multipart/form-data로 설정
              },
            }
          )
          .then((res) => {
            setUser(res.data);
          })
          .catch((error) => {
            console.error("Error uploading image:", error);
          });
      };
    }
  };

  const onUploadImageButtonClick = useCallback(() => {
    if (!imgRef.current) {
      return;
    }
    imgRef.current.click();
  }, []);

  return (
    <StyledModal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalWrap>
        <Title>
          <span>{"내 프로필"}</span>
        </Title>
        <Driver />
        <ImageWrap>
          <Avatar
            src={user.profileImage}
            width={97}
            height={97}
            isEditMode={editMode}
            onClick={editMode ? onUploadImageButtonClick : () => {}}
          />
          <input
            type="file"
            accept="image/*"
            name="thumbnail"
            ref={imgRef}
            onChange={uploadImage}
          />
          <EditIcon onClick={() => setEditMode(true)} isShow={isEdit} />
        </ImageWrap>
        <ProfileWrap>
          {editMode ? (
            <InputBox
              className={"name"}
              placeholder={"이름을 변경할 수 있어요."}
              value={name}
              onChange={(event) => handleChange(event, setName)}
              onKeyDown={handleKeyDown}
            />
          ) : (
            <span className="name">{user.name}</span>
          )}
          {editMode ? (
            <InputBox
              placeholder={"상태메세지를 등록할 수 있어요."}
              value={status}
              onChange={(event) => handleChange(event, setStatus)}
              onKeyDown={handleKeyDown}
            />
          ) : (
            <span className="status">
              {user.status ? user.status : "상태메세지가 없습니다."}
            </span>
          )}

          <Driver />
        </ProfileWrap>
        <InfoWrap>
          <span className="title">{"내 정보"}</span>
          <Info>
            <span className="category">{"회사/학교"}</span>
            {editMode ? (
              <InputBox
                className="value"
                placeholder={"회사/학교를 입력해주세요."}
                value={company}
                onChange={(event) => handleChange(event, setCompany)}
                onKeyDown={handleKeyDown}
              />
            ) : (
              <span>{user.company}</span>
            )}
          </Info>
          <Info>
            <span className="category">{"직책"}</span>
            {editMode ? (
              <InputBox
                className="value"
                placeholder={"직책을 입력해주세요."}
                value={duty}
                onChange={(event) => handleChange(event, setDuty)}
                onKeyDown={handleKeyDown}
              />
            ) : (
              <span>{user.duty}</span>
            )}
          </Info>
          <Info>
            <span className="category">{"휴대폰 번호"}</span>
            {editMode ? (
              <InputBox
                className="value"
                placeholder={"휴대폰 번호를 입력해주세요."}
                value={phone}
                onChange={(event) => handleChange(event, setPhone)}
                onKeyDown={handleKeyDown}
              />
            ) : (
              <span>{user.phone}</span>
            )}
          </Info>
          <Info>
            <span className="category">{"이메일"}</span>
            <span>{user.email}</span>
          </Info>
        </InfoWrap>
      </ModalWrap>
    </StyledModal>
  );
}

export default ProfileModal;
