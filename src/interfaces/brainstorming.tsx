import { User } from "@/interfaces/user";

export interface ISession {
  brainstormingId: number;
  title: string;
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

export interface IMessage {
  onlineSessions: ISessionInfo[];
  offlineSessions: ISessionInfo[];
}
