import axios from "axios";

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

export const login = (email: string, pw: string, auto: boolean) => {
  const data = {
    email: email,
    password: pw,
  };

  axios
    .post(`${process.env.NEXT_PUBLIC_BASEURL}/auth/login`, data)
    .then((res) => {
      if (res.data.error) return false;

      setToken(res.data.data.token);
    });

  return true;
};

export const isLoggedIn = () => {
  return !!getToken();
};

export const logout = () => {
  clearToken();
};
