import { IIdea } from "@/interfaces/idea";
import { User } from "@/interfaces/user";

export interface IVoteResults {
  idea: IIdea;
  count: number;
  percent: number;
  level: string;
  rank: number;
  voted: boolean;
}

export interface IVoteInfo {
  voteId: number;
  title: string;
  dueDate: string;
  isAnonymous: boolean;
  isMultiple: boolean;
  isDone: boolean;
  projectId: number;
  ideaIds: number[];
}

export interface IVote {
  voteResults: IVoteResults[];
  vote: IVoteInfo;
  totalJoinerCount: number;
  votedUserCount: number;
  votedUsers: User[];
  totalVotedRate: number;
  done: boolean;
}
