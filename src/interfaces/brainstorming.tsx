import { User } from "@/interfaces/user";

export interface ISession {
  brainstormingId: number;
  title: string;
  description: string;
  processMinutes: number;
  projectId: number;
  userId: number;
  userIds: number[];
  users: User[];
  isStarted: boolean;
}

export interface ISessionInfo {
  sessionId: string;
  branstormingId: number;
  user: User;
}

export interface ITopic {
  onlineSessions: ISessionInfo[];
  offlineSessions: ISessionInfo[];
}

export interface IStatus {
  brainstormingId: number;
  status: string;
}

export interface ISend {
  userId: number;
  brainstormingId: number;
  ideaName: string;
  freeJsonString: string;
}
