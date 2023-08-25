import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { AuthContextType, User } from "@/interfaces/user";

const AuthContext = createContext<AuthContextType>({
  user: null,
  authLogin: () => {},
  authLogout: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(null);

  const authLogin = (userData: User) => {
    setUser(userData);
    console.log("data:", userData);
  };

  const authLogout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, authLogin, authLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
