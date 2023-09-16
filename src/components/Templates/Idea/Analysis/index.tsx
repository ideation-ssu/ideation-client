import React from "react";

import Avatar from "@/components/Atoms/Avatar";
import DoughnutChart from "@/components/Atoms/DoughnutChart";
import WordCloud from "@/components/Atoms/WordCloud";
import { IStatistics } from "@/interfaces/statistics";

import {
  AnalysisBottom,
  AnalysisTop,
  AnalysisWrap,
  Content,
  GridBox,
  HeartIcon,
  IconWrap,
  IdeaAnalysisWarp,
  IdeaList,
  IdeaListWrap,
  IdeaTitleInfo,
  IdeaWrap,
  Inner,
  LikeCount,
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
                <Content direction={"row"}>
                  {statistics && (
                    <DoughnutChart
                      labels={statistics.statisticsUsers?.map(
                        (user) => user.userName
                      )}
                      percentages={statistics.statisticsUsers?.map(
                        (user) => user.percentage
                      )}
                    />
                  )}
                </Content>
              </IdeaAnalysisWarp>
            </AnalysisTop>
            <AnalysisBottom>
              <SubTitle>{"워드 클라우드"}</SubTitle>
              <Content direction={"row"}>
                <WordCloud
                  words={statistics.wordCloudResponses?.map((wordCloud) => {
                    return {
                      ...wordCloud,
                      value: wordCloud.value * 5,
                    };
                  })}
                />
              </Content>
            </AnalysisBottom>
          </AnalysisWrap>
          <IdeaList>
            <SubTitle>{`생성된 아이디어 | ${statistics.statisticsIdeas.length}개`}</SubTitle>
            <IdeaListWrap>
              {statistics.statisticsIdeas.map((idea, index) => {
                return (
                  <IdeaWrap key={index}>
                    <Avatar src={idea.user.image} width={62} height={62} />
                    <IdeaTitleInfo>
                      <span className="title">{idea.ideaName}</span>
                      <span className="name">{idea.user.name}</span>
                    </IdeaTitleInfo>
                    <IconWrap>
                      <HeartIcon isDark={index > 2} />
                      <LikeCount isDark={index > 2}>{idea.likeCount}</LikeCount>
                    </IconWrap>
                  </IdeaWrap>
                );
              })}
            </IdeaListWrap>
          </IdeaList>
        </Inner>
      </GridBox>
    </>
  );
}

export default Analysis;
