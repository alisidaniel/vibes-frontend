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

// AUTHENTICATION
export const LOGIN = "/api/login";
export const RESET_PASSWORD = "/api/password/reset";
export const FORGOT_PASSWORD = "/api/forgot/password";

// USER
export const FETCH_USER = "/api/profile";
export const VERIFY_QR_CODES = "/api/ticket/scanner/verify";
export const GET_USER_EVENTS = "/api/user/event";

// ADMIN
export const ADD_USER = "api/add/user";
export const DELETE_USER = "/api/remove/user";
export const GET_SCANNER_USERS = "/api/scanner/user";
export const GET_EVENTS = "/api/events";
export const DISABLE_ENABLE_SCANNER_USER = "/api/disable/enable/scanner";
