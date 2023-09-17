import { AxiosInstance } from "axios";

export interface User {
  id: number;
  email: string;
  name: string;
  profileImage: string;
  company?: string;
  duty?: string;
  phone?: string;
  status?: string;
}

export interface AuthContextType {
  user: User;
  setUser: (user: User) => void;
  authLogin: (email: string, pw: string) => Promise<boolean>;
  authLogout: () => void;
  isLoggedIn: () => boolean;
  axios: AxiosInstance;
}
