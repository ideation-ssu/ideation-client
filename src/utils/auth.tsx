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
  authLogin: () => false,
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
  const [user, setUser] = useState<User>(initialUser);
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    setUser(savedUser ? JSON.parse(savedUser) : initialUser);

    const token = localStorage.getItem("token");
    setToken(token ? token : "");
  }, [token]);

  const customAxios = useMemo(() => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return axios.create({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }, [token]);

  const authLogin = (email: string, pw: string) => {
    const data = {
      email: email,
      password: pw,
    };

    customAxios
      .post(`${process.env.NEXT_PUBLIC_BASEURL}/auth/login`, data)
      .then((res) => {
        if (res.data.error) return false;

        const decoded = jwt_decode(res.data.data.token) as {
          id: number;
          image: string;
        };
        const userData = {
          id: decoded.id,
          email: res.data.data.email,
          name: res.data.data.name,
          image: decoded.image,
        };

        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));

        setToken(res.data.data.token);
        localStorage.setItem("token", res.data.data.token);
      });
    return true;
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

  return (
    <AuthContext.Provider
      value={{
        user: user,
        authLogin: authLogin,
        authLogout: authLogout,
        isLoggedIn: isLoggedIn,
        axios: customAxios,
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
