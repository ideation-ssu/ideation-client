import axios from "axios";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const getTokens = async (email: string, pw: string) => {
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
        accessToken: res.data.accessToken,
        email: res.data.email,
        name: res.data.name,
      })
    );

    return true;
  } catch (error) {
    console.error("로그인 요청 실패:", error);
    return false;
  }
};

export const autoLogin = async () => {
  try {
    const tokens = await getTokenFromLocal();

    if (tokens && tokens.accessToken) {
      // 토큰이 존재하면 자동 로그인 성공
      return true;
    } else {
      // 토큰이 존재하지 않으면 자동 로그인 실패
      return false;
    }
  } catch (error) {
    console.error("자동 로그인 실패:", error);
    return false;
  }
};

const getTokenFromLocal = async () => {
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
