import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";

import { AuthContextType, User } from "@/interfaces/user";

const initialUser: User = {
  id: 0,
  email: "",
  name: "",
  profileImage: "",
};

const AuthContext = createContext<AuthContextType | null>({
  user: initialUser,
  setUser: () => {},
  authLogin: async () => false,
  authLogout: () => {},
  isLoggedIn: () => false,
  axios: axios.create(),
  token: "",
  setToken: (string) => {},
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

    const localToken = localStorage.getItem("token");
    setToken(localToken ? localToken : "");
    axios.defaults.headers.common["Authorization"] = `Bearer ${localToken}`;
    setIsLoading(true);

    axios.interceptors.response.use(
      function (res) {
        if (res?.data?.error?.code === "AUTH_ACCESS_DENIED") {
          localStorage.removeItem("user");
          localStorage.removeItem("token");
          window.location.href = "/login";
        }
        return res;
      },
      function (error) {}
    );
  }, [token]);

  const authLogin = async (email: string, pw: string) => {
    const body = {
      email: email,
      password: pw,
    };

    try {
      // 로그인 요청
      const { data: loginData } = await axios.post(
        `${process.env.NEXT_PUBLIC_BASEURL}/auth/login`,
        body
      );
      if (loginData.error) throw Error();
      setToken(loginData.data.token);
      localStorage.setItem("token", loginData.data.token);

      // 로그인이 성공하면 사용자 정보를 가져옴
      const { data: userData } = await axios.get(
        `${process.env.NEXT_PUBLIC_BASEURL}/user/my`,
        {
          headers: {
            Authorization: `Bearer ${loginData.data.token}`,
          },
        }
      );
      if (userData.error) throw Error();

      setUserInfo(userData);

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

  const setUserInfo = (user: User) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  return (
    <AuthContext.Provider
      value={{
        user: user,
        setUser: setUserInfo,
        authLogin: authLogin,
        authLogout: authLogout,
        isLoggedIn: isLoggedIn,
        axios,
        token,
        setToken,
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
