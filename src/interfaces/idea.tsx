import { User } from "@/interfaces/user";

export interface IIdea {
  id: number;
  userId: number;
  userName: string;
  user: User;
  relatedUserIds: number[];
  relatedUsers: User[];
  projectId: number;
  title: string;
  category: string;
  content: string;
  hashTags: string[];
  ideaHashtags: IIdeaHashTag[];
  isLiked: boolean;
  likeCount: number;
  commentCount: number;
  status: string;
  createdAt: string;
}

export interface IIdeaHashTag {
  backgroundColor: string;
  color: string;
  hashtag: string;
}

export interface IIdeaByStatus {
  NOT_STARTED: IIdea[];
  IN_PROGRESS: IIdea[];
  DONE: IIdea[];
}

export interface IStatus {
  id: string;
  title: string;
}

export const IdeaStatus: IStatus[] = [
  { id: "NOT_STARTED", title: "시작 전" },
  { id: "IN_PROGRESS", title: "진행 중" },
  { id: "DONE", title: "완료" },
];

export interface Comment {
  id: number;
  comment: string;
  commentType: string;
  userName: string;
  createdAt: string;
  replies: Comment[];
}
