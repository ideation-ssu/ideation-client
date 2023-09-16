import { User } from "@/interfaces/user";

export interface IStatistics {
  projectId: number;
  brainstormingTitle: string;
  progressMinutes: number;
  progressSeconds: number;
  processMinutes: number;
  statisticsUsers: IStatisticsUsers[];
  statisticsIdeas: IStatisticsIdeas[];
  wordCloudResponses: IWordCloud[];
}

export interface IStatisticsUsers {
  userName: string;
  percentage: number;
}

export interface IStatisticsIdeas {
  ideaName: string;
  user: User;
  likeCount: number;
  rank: number;
}

export interface IWordCloud {
  text: string;
  value: number;
}
