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
}

export enum NotiType {
  PROJECT_INVITED,
  PROJECT_CREATED,
  PROJECT_DONE,
  VOTE_CREATED,
  VOTE_DONE,
  COMMENT_MENTIONED,
  FEEDBACK_CREATED,
  COMMENT_CREATED,
  IDEA_CREATED,
  IDEA_RELATED,
  BRAINSTORMING_CREATED,
  JOINER_JOINED,
}
