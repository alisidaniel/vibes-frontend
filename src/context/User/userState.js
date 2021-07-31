import React, { useEffect, useReducer, useState } from "react";
import UserContext from "./userContext";
import * as Constants from "../../constants/api";
import { api } from "../../constants/api";
import userReducer from "./userReducer";

import { GET_USER_EVENTS, VERIFY_QR_CODES } from "../types";

const UserState = (props) => {
  const initialState = {
    events: null,
    loading: true,
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {}, []);

  const getEvents = async () => {
    try {
    } catch (error) {}
  };

  const verifyQR = async () => {
    try {
    } catch (error) {}
  };

  return (
    <UserContext.Provider
      value={{
        loading: state.loading,
        getEvents,
        verifyQR,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
