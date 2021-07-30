import {
  REGISTER_SUCCESS,
  USER_LOADED,
  LOGIN_FAIL,
  REGISTER_FAIL,
  AUTH_ERROR,
  LOGOUT,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };
    case USER_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      // console.log('tokenJDKSHHSJDHJDHDJH', action.payload);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        user: action.payload,
        loading: false,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        // loading: false,
      };

    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:

    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
      };

    case GET_USER:
      return {
        ...state,
        // loading:false,
        userData: action.payload,
        error: null,
      };
    case USER_ERROR:
      return {
        ...state,
        // loading:false,
        userData: null,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
