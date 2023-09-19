import { User } from "@/interfaces/user";

export interface Project {
  id: number;
  name: string;
  desc: string;
  dueDate: string;
  color: string;
  user: User;
  joiners: Joiner[];
  createdAt: string;
  public: boolean;
  done: boolean;
  dday: number;
  ideaCount: number;
}

export interface Joiner {
  id: number;
  projectId: number;
  userDto: User;
  role: string;
  status: string;
  color: string;
  createdAt: string;
}
