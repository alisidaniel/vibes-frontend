import React, { useEffect, useReducer, useState } from "react";
import AdminContext from "./adminContect";
import * as Constants from "../../constants/api";
import { api } from "../../constants/api";
import adminReducer from "./adminReducer";

import {
  ADD_USER,
  DELETE_USER,
  GET_EVENTS,
  DISABLE_ENABLE_SCANNER_USER,
  GET_SCANNER_USERS,
  ADMIN_ERROR,
} from "../types";

const AdminState = (props) => {
  const initialState = {
    events: null,
    scanners: null,
    loading: true,
  };

  const [state, dispatch] = useReducer(adminReducer, initialState);

  useEffect(() => {}, []);

  const getEvents = async () => {
    try {
      const response = await api.get(Constants.GET_EVENTS);
      dispatch({ type: GET_EVENTS, payload: response.data });
      return response.data;
    } catch (error) {
      dispatch({ type: ADMIN_ERROR, payload: error.response.data.message });
      return error;
    }
  };

  const getScannersUsers = async () => {
    try {
      const response = await api.get(Constants.GET_SCANNER_USERS);
      dispatch({ type: GET_SCANNER_USERS, payload: response.data });
      return response.data;
    } catch (error) {
      dispatch({ type: ADMIN_ERROR, payload: error.response.data.message });
      return error;
    }
  };

  const addUser = async (name, email, password, username, event_id) => {
    try {
      const response = await api.post(Constants.ADD_USER, {
        name,
        email,
        password,
        username,
        event_id,
      });
      dispatch({ type: ADD_USER, payload: response.data });
      return response.data;
    } catch (error) {
      dispatch({ type: ADMIN_ERROR, payload: error.response.data.message });
      return error;
    }
  };

  const deleteUser = async (user_id) => {
    try {
      const response = await api.post(Constants.DELETE_USER, { user_id });
      dispatch({ type: DELETE_USER, payload: response.data });
      return response.data;
    } catch (error) {
      dispatch({ type: ADMIN_ERROR, payload: error.response.data.message });
      return error;
    }
  };

  const disableEnable = async (user_id, active) => {
    try {
      const response = await api.post(Constants.DISABLE_ENABLE_SCANNER_USER, {
        user_id,
        active,
      });
      dispatch({ type: DISABLE_ENABLE_SCANNER_USER, payload: response.data });
      return response.data;
    } catch (error) {
      dispatch({ type: ADMIN_ERROR, payload: error.response.data.message });
      return error;
    }
  };

  return (
    <AdminContext.Provider
      value={{
        loading: state.loading,
        events: state.events,
        scanners: state.scanners,
        addUser,
        deleteUser,
        getEvents,
        getScannersUsers,
        disableEnable,
      }}
    >
      {props.children}
    </AdminContext.Provider>
  );
};
export default AdminState;
