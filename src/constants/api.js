import axios from "axios";

const token = localStorage.getItem("token");

export const api = axios.create({
  baseURL: "http://localhost:7000/api/v1",

  headers: {
    "Content-Type": "application/json",
    Authorization: token ? token : null,
  },
});

//auth token verify
export const TOKEN_VERIFY = "/auth/verifyuser";
