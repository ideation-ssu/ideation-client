import { Project } from "@/interfaces/project";

export interface INoti {
  createdAt: string;
  daysAgo: number;
  hoursAgo: number;
  minutesAgo: number;
  secondsAgo: number;
  isRead: boolean;
  notificationId: number;
  type: string;
  typeId: number;
  project: Project;
}

export enum NotiType {
  PROJECT_INVITED = "PROJECT_INVITED",
  PROJECT_CREATED = "PROJECT_CREATED",
  PROJECT_DONE = "PROJECT_DONE",
  VOTE_CREATED = "VOTE_CREATED",
  VOTE_DONE = "VOTE_DONE",
  COMMENT_MENTIONED = "COMMENT_MENTIONED",
  FEEDBACK_CREATED = "FEEDBACK_CREATED",
  COMMENT_CREATED = "COMMENT_CREATED",
  IDEA_CREATED = "IDEA_CREATED",
  IDEA_RELATED = "IDEA_RELATED",
  BRAINSTORMING_CREATED = "BRAINSTORMING_CREATED",
  JOINER_JOINED = "JOINER_JOINED",
}
