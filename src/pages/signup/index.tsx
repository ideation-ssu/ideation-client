import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Driver from "@/components/Atoms/Driver";
import IdeationLabel from "@/components/Atoms/IdeationLabel";
import KakaoButton from "@/components/Atoms/KakaoButton";
import RoundButton from "@/components/Atoms/RoundButton";
import RoundInputBox from "@/components/Atoms/RoundInputBox";
import {
  Circle,
  Container,
  FlexWrap,
  InnerContainer,
  Text,
} from "@/styles/signup/styles";

import Card from "../../components/Templates/Card";

enum pageState {
  Email, // email 입력받음
  Confirm_Email, // email 인증
  Info, // name & password 입력받음
  Done, // 회원가입 완료
}

function SignUp(): React.ReactElement {
  const router = useRouter();

  const [page, setPage] = useState(pageState.Email);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pw, setPw] = useState("");
  const [pwConfirm, setPwConfirm] = useState("");

  useEffect(() => {
    router.beforePopState(({ url, as, options }) => {
      if (page > pageState.Email && as !== router.asPath) {
        window.history.pushState("", "");
        router.push(router.asPath);
        setPage(page - 1);
        return false;
      }
      return true;
    });
  }, [page]);

  const onNextPage = () => {
    setPage(page + 1);
  };

  let Element;
  if (page == pageState.Email) {
    Element = (
      <FlexWrap gap={35}>
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
          <KakaoButton text={"카카오로 시작하기"} />
        </FlexWrap>
        <Text className={"guide"}>
          {
            '위의 “카카오로 시작하기/이메일로 계속하기"를 클릭하면 Ideation의 이용약관 및 개인정보 보호정책을 읽고 이해하였으며 그에 동의하는 것으로 간주됩니다.'
          }
        </Text>
      </FlexWrap>
    );
  } else if (page == pageState.Confirm_Email) {
    Element = (
      <FlexWrap gap={150}>
        <RoundInputBox
          placeHolder={"이메일로 발송된 인증번호를 입력해주세요"}
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

  if (page == pageState.Done) {
    return (
      <Container>
        <Card>
          <InnerContainer className="more-padding">
            <FlexWrap gap={30}>
              <IdeationLabel isColorful={true} />
              <Circle />
              <Text className={"welcome"}>{`환영합니다, 앵셔님!`}</Text>
              <FlexWrap gap={6}>
                <RoundButton isFilled={true} text={"튜토리얼 확인하러 가기"} />
                <RoundButton isFilled={false} text={"바로 프로젝트 생성하기"} />
              </FlexWrap>
            </FlexWrap>
          </InnerContainer>
        </Card>
      </Container>
    );
  } else {
    return (
      <Container>
        <Card titleText={"SIGN UP"}>
          <InnerContainer>
            <IdeationLabel />
            {Element}
          </InnerContainer>
        </Card>
      </Container>
    );
  }
}

export default SignUp;
