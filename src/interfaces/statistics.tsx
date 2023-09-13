import { User } from "@/interfaces/user";

export interface IStatistics {
  brainstormingTitle: string;
  progressMinutes: number;
  progressSeconds: number;
  processMinutes: number;
  statisticsUsers: IStatisticsUsers[];
  statisticsIdeas: IStatisticsIdeas[];
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
