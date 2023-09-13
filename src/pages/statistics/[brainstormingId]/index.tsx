import React, { useEffect, useState } from "react";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";

import Profile from "@/components/Atoms/Profile";
import RoundButton from "@/components/Atoms/RoundButton";
import Analysis from "@/components/Templates/Idea/Analysis";
import { IStatistics } from "@/interfaces/statistics";
import {
  AvatarWrap,
  ButtonWrap,
  Container,
  Content,
  Header,
  LogoWrap,
  RightHeaderWrap,
  TitleBar,
  TitleWrap,
} from "@/styles/main/styles";
import { useAuth } from "@/utils/auth";

import { LogoIcon } from "../../../../public/icons/Logo/styles.ts";

interface BrainstormingProps {
  brainstormingId: number;
}
const Statistics: NextPage<BrainstormingProps> = ({
  brainstormingId,
}: BrainstormingProps) => {
  const { user, axios } = useAuth();
  const router = useRouter();

  const [statistics, setStatistics] = useState<IStatistics>();

  useEffect(() => {
    getStatistics();
  }, []);

  const getStatistics = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASEURL}/statistics/${brainstormingId}`)
      .then((res) => {
        console.log(res.data);
        setStatistics(res.data);
      });
  };

  const goBrainstorming = () => {
    router.push("/brainstorming?tab=3");
  };

  return (
    <Container>
      <Header>
        <LogoWrap>
          <LogoIcon />
        </LogoWrap>
        {user && (
          <AvatarWrap>
            <Profile />
          </AvatarWrap>
        )}
      </Header>
      <Content>
        <Header className={"title"}>
          <TitleWrap>
            <TitleBar />
            <span>{statistics?.brainstormingTitle}</span>
          </TitleWrap>
          <RightHeaderWrap>
            <ButtonWrap>
              <RoundButton
                isFilled={false}
                text={"브레인스토밍 돌아가기"}
                isMainClr={false}
                onClick={goBrainstorming}
              />
            </ButtonWrap>
          </RightHeaderWrap>
        </Header>
        {statistics && <Analysis statistics={statistics} />}
      </Content>
    </Container>
  );
};

export default Statistics;

export const getServerSideProps: GetServerSideProps<
  BrainstormingProps
> = async (context) => {
  const { query } = context;
  const brainstormingId: number =
    typeof query.brainstormingId === "string"
      ? parseInt(query.brainstormingId)
      : -1;

  return {
    props: {
      brainstormingId,
    },
  };
};
