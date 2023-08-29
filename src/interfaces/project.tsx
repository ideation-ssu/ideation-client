import { User } from "@/interfaces/user";

export interface Project {
  id: number;
  name: string;
  desc: string;
  dueDate: string;
  user: User;
  joiners: Joiner[];
  createdAt: string;
  public: boolean;
  done: boolean;
  dday: number;
}

export interface Joiner {
  userId: number;
  userName: string;
  userEmail: string;
  joinerStatus: string;
  joinerRole: string;
}
