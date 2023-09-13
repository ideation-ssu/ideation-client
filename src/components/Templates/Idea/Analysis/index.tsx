import React from "react";

import { IStatistics } from "@/interfaces/statistics";

import {
  AnalysisBottom,
  AnalysisContent,
  AnalysisTop,
  AnalysisWrap,
  Content,
  GridBox,
  IdeaAnalysisWarp,
  IdeaList,
  Inner,
  SubTitle,
  TimerIcon,
  TimerWrap,
} from "./styles";

function Analysis({
  statistics,
}: {
  statistics: IStatistics;
}): React.ReactElement {
  return (
    <>
      <GridBox>
        <Inner>
          <AnalysisWrap>
            <AnalysisTop>
              <TimerWrap>
                <SubTitle>{"진행 시간"}</SubTitle>
                <Content direction={"row"}>
                  <TimerIcon />
                  <span>{`${statistics.progressMinutes} : ${statistics.progressSeconds}`}</span>
                </Content>
              </TimerWrap>
              <IdeaAnalysisWarp>
                <SubTitle>{"참여자별 아이디어"}</SubTitle>
                <Content direction={"row"}></Content>
              </IdeaAnalysisWarp>
            </AnalysisTop>
            <AnalysisBottom>
              <SubTitle>{"워드 클라우드"}</SubTitle>
              <Content direction={"row"}></Content>
            </AnalysisBottom>
          </AnalysisWrap>
          <IdeaList>
            <SubTitle>{`생성된 아이디어 | 22개`}</SubTitle>
            <Content direction={"column"}></Content>
          </IdeaList>
        </Inner>
      </GridBox>
    </>
  );
}

export default Analysis;
