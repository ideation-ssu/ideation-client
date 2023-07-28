import axios from "axios";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const login = async (email: string, pw: string, auto: boolean) => {
  const data = {
    email: email,
    password: pw,
  };

  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASEURL}/auth/login`,
      data
    );

    if (res.data.error) return false;

    // accessToken 로컬에 저장
    await AsyncStorage.setItem(
      "Tokens",
      JSON.stringify({
        accessToken: res.data.data.token,
        email: res.data.data.email,
        name: res.data.data.name,
        auto_login: auto,
      })
    );

    return true;
  } catch (error) {
    console.error("로그인 요청 실패:", error);
    return false;
  }
};

export const isLoggedIn = async () => {
  try {
    const tokens = await getTokenFromLocal();

    if (tokens && tokens.accessToken) return true;
    else return false;
  } catch (error) {
    console.error("자동 로그인 실패:", error);
    return false;
  }
};

export const getTokenFromLocal = async () => {
  try {
    const value = await AsyncStorage.getItem("Tokens");
    if (value !== null) {
      return JSON.parse(value);
    } else {
      return null;
    }
  } catch (error) {
    console.error("토큰 조회 실패:", error);
    return null;
  }
};

export const logout = async () => {
  try {
    await AsyncStorage.removeItem("Tokens");
    return true;
  } catch (error) {
    console.error("로그아웃 실패:", error);
    return false;
  }
};
