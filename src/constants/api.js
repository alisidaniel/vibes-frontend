import axios from "axios";

const token = localStorage.getItem("token");

export const api = axios.create({
  baseURL: "https://vibescanner.cloudns.cl",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token ? token : null}`,
    withCredentials: true,
  },
});

//auth token verify
export const TOKEN_VERIFY = "/api/auth/user/verify";
export const CSRF_COOKIE = "/sanctum/csrf-cookie";

// USER
export const FETCH_USER = "/api/profile";
export const LOGIN = "/api/login";
export const RESET_PASSWORD = "/api/password/reset";
export const FORGOT_PASSWORD = "/api/forgot/password";
