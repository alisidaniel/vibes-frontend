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
    isAuthenticated: null,
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
        const response = await api.get(Constants.TOKEN_VERIFY);
        // console.log("hello got into the verify", response);
        dispatch({ type: USER_LOADED, payload: response.data });
      } catch (e) {
        console.log("Error logged:", e);
        dispatch({ type: USER_ERROR, payload: e.response });
      }
    };
    isTokenValid();
  }, []);

  const userRegistration = async (name, email, phone, password) => {
    try {
      const response = await api.post(Constants.REGISTER, {
        name,
        email,
        phone,
        password,
      });
      console.log(`response data ${response.data}`);
      //   history.push("/dashboard");
      dispatch({ type: REGISTER_SUCCESS, payload: response.data });
    } catch (e) {
      dispatch({
        type: REGISTER_FAIL,
        payload: e.response.data.message,
      });
    }
  };

  const userLogin = async (email, password) => {
    try {
      const response = await api.post(Constants.LOGIN, { email, password });
      dispatch({ type: LOGIN_SUCCESS, payload: response.data });
      setToken(response.data.token);
      //   history.push("/dashboard");
      return response;
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
      const response = await api.get(Constants.FETCH_USER, userId);
      dispatch({ type: GET_USER, payload: response.data });
      return response.data;
    } catch (e) {
      dispatch({ type: USER_ERROR, payload: e.response.data.message });
    }
  };

  const logout = () => {
    dispatch({ type: LOGOUT });
  };

  const resetPassword = async (email, password) => {
    try {
      const res = await api.post(Constants.RESET_PASSWORD, { email, password });
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.message });
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
        userRegistration,
        getUser,
        resetPassword,
      }}
    >
      {props.children}
      {/* {state.loading ? <PageLoader /> : props.children} */}
    </AuthContext.Provider>
  );
};

export default AuthState;
