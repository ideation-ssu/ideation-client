import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

import { AuthContextType, User } from "@/interfaces/user";

const initialUser: User = {
  id: 0,
  email: "",
  name: "",
  image: "",
};

const AuthContext = createContext<AuthContextType | null>({
  user: initialUser,
  authLogin: async () => false,
  authLogout: () => {},
  isLoggedIn: () => false,
  axios: axios.create(),
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<User>(initialUser);
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    setIsLoading(false);
    const savedUser = localStorage.getItem("user");
    setUser(savedUser ? JSON.parse(savedUser) : initialUser);

    const token = localStorage.getItem("token");
    setToken(token ? token : "");
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    setIsLoading(true);
  }, [token]);

  const authLogin = async (email: string, pw: string) => {
    const body = {
      email: email,
      password: pw,
    };

    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_BASEURL}/auth/login`,
        body
      );
      if (data.error) throw Error();

      const decoded = jwt_decode(data.data.token) as {
        id: number;
        image: string;
      };
      const userData = {
        id: decoded.id,
        email: data.data.email,
        name: data.data.name,
        image: decoded.image,
      };

      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));

      setToken(data.data.token);
      localStorage.setItem("token", data.data.token);
      return true;
    } catch (e) {
      return false;
    }
  };

  const authLogout = () => {
    setUser(initialUser);
    localStorage.removeItem("user");

    setToken("");
    localStorage.removeItem("token");
  };

  const isLoggedIn = () => {
    return !!token;
  };

  if (!isLoading) {
    return <></>;
  }

  return (
    <AuthContext.Provider
      value={{
        user: user,
        authLogin: authLogin,
        authLogout: authLogout,
        isLoggedIn: isLoggedIn,
        axios,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined || context === null) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
