import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import IdeationLabel from "@/components/Atoms/IdeationLabel";
import Card from "@/components/Molecules/Card";
import AuthCode from "@/components/Templates/SignUp/AuthCode";
import DonePage from "@/components/Templates/SignUp/Done";
import EmailPage from "@/components/Templates/SignUp/Email";
import { InnerContainer } from "@/components/Templates/SignUp/styles";
import UserInfoPage from "@/components/Templates/SignUp/UserInfo";
import { useAuth } from "@/utils/auth";

enum pageState {
  Email, // email 입력받음
  Confirm_Email, // email 인증
  Info, // name & password 입력받음
  Done, // 회원가입 완료
}

function SignUp({
  handleRegisterDone,
}: {
  handleRegisterDone: () => void;
}): React.ReactElement {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  const [page, setPage] = useState(pageState.Email);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [pw, setPw] = useState("");
  const [pwConfirm, setPwConfirm] = useState("");

  useEffect(() => {
    if (page != pageState.Done && isLoggedIn()) {
      router.push("/");
    }

    router.beforePopState(({ as }) => {
      if (page > pageState.Email && as !== router.asPath) {
        window.history.pushState("", "");
        router.push(router.asPath);
        setPage(page - 1);
        return false;
      }
      return true;
    });
  }, [page]);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const getPageElement = () => {
    if (page == pageState.Email) {
      return (
        <EmailPage
          email={email}
          setEmail={setEmail}
          nextPage={handleNextPage}
        />
      );
    } else if (page == pageState.Confirm_Email) {
      return (
        <AuthCode
          email={email}
          code={code}
          setCode={setCode}
          nextPage={handleNextPage}
        />
      );
    } else if (page == pageState.Info) {
      return (
        <UserInfoPage
          email={email}
          name={name}
          setName={setName}
          pw={pw}
          setPw={setPw}
          pwConfirm={pwConfirm}
          setPwConfirm={setPwConfirm}
          nextPage={handleNextPage}
        />
      );
    }
  };

  return (
    <Card titleText={"회원가입"}>
      <InnerContainer>
        {page == pageState.Done ? (
          <DonePage name={name} handleClick={handleRegisterDone} />
        ) : (
          <>
            <IdeationLabel />
            {getPageElement()}
          </>
        )}
      </InnerContainer>
    </Card>
  );
}

export default SignUp;
