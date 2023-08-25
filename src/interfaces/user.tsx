export interface User {
  id: number;
  email: string;
  name: string;
}

export interface AuthContextType {
  user: User | null;
  authLogin: (userData: User) => void;
  authLogout: () => void;
}
