// src/APIs/auth.ts
import axios from "axios";

export interface SignupRequest {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  phone: string;
  address: string;
  username: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

const api = axios.create({
  baseURL: "https://api.seasidelbs.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const signup = async (data: SignupRequest) => {
  const res = await api.post("/signup/", data);
  return res.data;
};

// LOGIN
export const login = async (data: LoginRequest) => {
  const res = await api.post("/login/", data);
  return res.data;
};

//  LOGOUT
export const logout = async (username: string) => {
  const res = await api.post("/logout/", { username });
  return res.data;
};

// FORGOT PASSWORD
export const forgotPassword = async (email: string) => {
  const res = await api.post("/forgot-password/", { email });
  return res.data;
};

// RESET PASSWORD
export const resetPassword = async (token: string, new_password: string) => {
  const res = await api.post("/reset-password/", { token, new_password });
  return res.data;
};

// CHANGE PASSWORD
export const changePassword = async (
  user_id: number,
  current_password: string,
  new_password: string
) => {
  const res = await api.post("/change-password/", {
    user_id,
    current_password,
    new_password,
  });
  return res.data;
};
