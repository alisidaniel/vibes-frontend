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
    } catch (error) {}
  };

  const getScannersUsers = async () => {
    try {
    } catch (error) {}
  };

  const addUser = async () => {
    try {
    } catch (error) {}
  };

  const deleteUser = async () => {
    try {
    } catch (error) {}
  };

  const disableEnable = async () => {
    try {
    } catch (error) {}
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
