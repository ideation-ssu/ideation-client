import axios from "axios";
import jwt_decode from "jwt-decode";

import { User } from "@/interfaces/user";

function setToken(token: string) {
  localStorage.setItem("token", token);
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

function clearToken() {
  localStorage.removeItem("token");
  axios.defaults.headers.common.Authorization = void 0;
}

export function getToken() {
  return localStorage.getItem("token");
}

export const login = (
  email: string,
  pw: string,
  auto: boolean,
  authLogin: (userData: User) => void
) => {
  const data = {
    email: email,
    password: pw,
  };

  axios
    .post(`${process.env.NEXT_PUBLIC_BASEURL}/auth/login`, data, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    })
    .then((res) => {
      if (res.data.error) return false;

      setToken(res.data.data.token);

      const decoded = jwt_decode(res.data.data.token) as { id: number };
      authLogin({
        id: decoded.id,
        email: res.data.data.email,
        name: res.data.data.name,
      });
    });

  return true;
};

export const isLoggedIn = () => {
  return !!getToken();
};

export const logout = (authLogout: () => void) => {
  clearToken();
  authLogout();
};
