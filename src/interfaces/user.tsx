import { AxiosInstance } from "axios";

export interface User {
  id: number;
  email: string;
  name: string;
  profileImage: string;
}

export interface AuthContextType {
  user: User;
  authLogin: (email: string, pw: string) => Promise<boolean>;
  authLogout: () => void;
  isLoggedIn: () => boolean;
  axios: AxiosInstance;
}
