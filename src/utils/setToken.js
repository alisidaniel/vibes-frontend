import { api } from "../constants/api";

const setToken = async (token) => {
  try {
    if (token !== null) {
      api.defaults.headers.common["authorization"] = token;
    } else {
      delete api.defaults.headers.common["authorization"];
    }
  } catch (e) {
    console.log(e);
  }
};

export default setToken;
