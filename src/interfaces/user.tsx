export interface User {
  id: number;
  email: string;
  name: string;
  image: string;
}

export interface AuthContextType {
  user: User | null;
  authLogin: (userData: User) => void;
  authLogout: () => void;
}
