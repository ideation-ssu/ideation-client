import React, { useState } from "react";

import Driver from "@/components/Atoms/Driver";
import IdeationLabel from "@/components/Atoms/IdeationLabel";
import RoundButton from "@/components/Atoms/RoundButton";
import RoundInputBox from "@/components/Atoms/RoundInputBox";
import TitleCard from "@/components/Templates/TitleCard";

import { Container, FlexWrap, GuideText, InnerContainer } from "./styles";

enum pageState {
  Email, // email 입력받음
  Confirm_Email, // email 인증
  Info, // name & password 입력받음
  Done, // 회원가입 완료
}

function SignUp(): React.ReactElement {
  const [page, setPage] = useState(pageState.Email);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pw, setPw] = useState("");
  const [pwConfirm, setPwConfirm] = useState("");

  const onNextPage = () => {
    setPage(page + 1);
  };

  let Element;
  if (page == pageState.Email) {
    Element = (
      <FlexWrap gap={20}>
        <FlexWrap gap={10}>
          <RoundInputBox
            placeHolder={"이메일 주소를 입력하세요"}
            text={email}
            setText={setEmail}
          />
          <RoundButton
            isFilled={true}
            text={"이메일로 계속하기"}
            onClick={onNextPage}
          />
        </FlexWrap>
        <Driver />
        <FlexWrap gap={5}>
          <RoundButton isKakao={true} text={"카카오로 시작하기"} />
        </FlexWrap>
        <GuideText>
          {
            '위의 “카카오로 시작하기/이메일로 계속하기"를 클릭하면 Ideation의 이용약관 및 개인정보 보호정책을 읽고 이해하였으며 그에 동의하는 것으로 간주됩니다.'
          }
        </GuideText>
      </FlexWrap>
    );
  } else if (page == pageState.Confirm_Email) {
    Element = (
      <FlexWrap gap={150}>
        <RoundInputBox
          placeHolder={"이메일 주소를 입력하세요"}
          text={email}
          setText={setEmail}
        />
        <RoundButton
          isFilled={true}
          text={"이메일로 계속하기"}
          onClick={onNextPage}
        />
      </FlexWrap>
    );
  } else if (page == pageState.Info) {
    Element = (
      <FlexWrap gap={20}>
        <RoundInputBox
          placeHolder={"이름을 입력해주세요"}
          text={name}
          setText={setName}
        />
        <RoundInputBox
          placeHolder={"비밀번호를 입력해주세요"}
          text={pw}
          setText={setPw}
        />
        <RoundInputBox
          placeHolder={"비밀번호를 확인해주세요"}
          text={pwConfirm}
          setText={setPwConfirm}
        />
        <RoundButton isFilled={true} text={"다음"} onClick={onNextPage} />
      </FlexWrap>
    );
  }

  return (
    <Container>
      <TitleCard titleText={"SIGN UP"}>
        <InnerContainer>
          <IdeationLabel />
          {Element}
        </InnerContainer>
      </TitleCard>
    </Container>
  );
}

export default SignUp;
