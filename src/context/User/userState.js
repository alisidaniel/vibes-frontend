import React, { useEffect, useReducer, useState } from "react";
import UserContext from "./userContext";
import * as Constants from "../../constants/api";
import { api } from "../../constants/api";
import userReducer from "./userReducer";

import { GET_USER_EVENTS, USER_ERROR, VERIFY_QR_CODES } from "../types";

const UserState = (props) => {
  const initialState = {
    events: null,
    loading: true,
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {}, []);

  const getEvents = async () => {
    try {
      await api.get(Constants.CSRF_COOKIE);
      const response = await api.get(Constants.GET_USER_EVENTS);
      dispatch({ type: GET_USER_EVENTS, payload: response.data });
      return response.data;
    } catch (error) {
      dispatch({ type: USER_ERROR, payload: error.response.data.message });
      return error;
    }
  };

  const verifyQR = async (ticket, user_id, event_id) => {
    try {
      await api.get(Constants.CSRF_COOKIE);
      const response = await api.post(Constants.VERIFY_QR_CODES, {
        ticket,
        user_id,
        event_id,
      });
      dispatch({ type: VERIFY_QR_CODES, payload: response.data });
      return response.data;
    } catch (error) {
      dispatch({ type: USER_ERROR, payload: error.response.data.message });
      return error;
    }
  };

  return (
    <UserContext.Provider
      value={{
        loading: state.loading,
        events: state.events,
        getEvents,
        verifyQR,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
