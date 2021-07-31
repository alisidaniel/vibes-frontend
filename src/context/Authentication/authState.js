import React, { useEffect, useReducer, useState } from "react";
import AuthContext from "./authContext";
import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  LOGIN_SUCCESS,
  GET_USER,
  USER_ERROR,
  CLEAR_ERRORS,
  LOGOUT,
} from "../types";
import * as Constants from "../../constants/api";
import { api } from "../../constants/api";
import authReducer from "./authReducer";
import { Redirect, useHistory } from "react-router-dom";
import setToken from "../../utils/setToken";
import PageLoader from "../../views/Loader";

const AuthState = (props) => {
  const history = useHistory();

  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: false,
    active: false,
    user: null,
    userData: null,
    error: null,
    otpError: null,
    loading: true,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const isTokenValid = async () => {
      try {
        api.get(Constants.CSRF_COOKIE).then(async (res) => {
          const response = await api.get(Constants.TOKEN_VERIFY);
          dispatch({ type: USER_LOADED, payload: response.data });
          console.log("account valid", response);
        });
      } catch (e) {
        dispatch({ type: USER_ERROR, payload: e.response });
      }
    };
    isTokenValid();
  }, []);

  // const userRegistration = async (name, email, phone, password) => {
  //   try {
  //     const response = await api.post(Constants.REGISTER, {
  //       name,
  //       email,
  //       phone,
  //       password,
  //     });
  //     console.log(`response data ${response.data}`);
  //     //   history.push("/dashboard");
  //     dispatch({ type: REGISTER_SUCCESS, payload: response.data });
  //   } catch (e) {
  //     dispatch({
  //       type: REGISTER_FAIL,
  //       payload: e.response.data.message,
  //     });
  //   }
  // };

  const userLogin = async (username, password) => {
    try {
      api.get(Constants.CSRF_COOKIE).then(async (res) => {
        console.log(res, password, username);
        const response = await api.post(Constants.LOGIN, {
          username,
          password,
        });
        dispatch({ type: LOGIN_SUCCESS, payload: response.data.data });
        setToken(response.data.data.token);
        // history.push("/dashboard");
        return response.data;
      });
    } catch (e) {
      dispatch({
        type: LOGIN_FAIL,
        payload: e.response.data.message,
      });

      return e;
    }
  };

  const getUser = async (userId) => {
    try {
      api.get(Constants.CSRF_COOKIE).then(async (res) => {
        const response = await api.get(Constants.FETCH_USER, userId);
        dispatch({ type: GET_USER, payload: response.data });
        return response.data;
      });
    } catch (e) {
      dispatch({ type: USER_ERROR, payload: e.response.data.message });
    }
  };

  const logout = () => {
    dispatch({ type: LOGOUT });
  };

  const resetPassword = async (email, password) => {
    try {
      api.get(Constants.CSRF_COOKIE).then(async (res) => {
        const response = await api.post(Constants.RESET_PASSWORD, {
          email,
          password,
        });
        dispatch({ type: LOGIN_SUCCESS, payload: response.data.message });
      });
    } catch (err) {
      console.log(`reset error :${err.response.data.message}`);
      console.log(err);
      throw Error(err?.response?.data?.message || "Something went wrong");
    }
  };

  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        error: state.error,
        userData: state.userData,
        logout,
        clearErrors,
        userLogin,
        // userRegistration,
        getUser,
        resetPassword,
      }}
    >
      {state.loading ? <PageLoader /> : props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
