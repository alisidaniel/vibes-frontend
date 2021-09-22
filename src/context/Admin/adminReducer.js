import {
  ADD_USER,
  ADD_ADMIN,
  GET_ADMINS,
  DELETE_USER,
  DISABLE_ENABLE_SCANNER_USER,
  GET_EVENTS,
  GET_SCANNER_USERS,
  ADMIN_ERROR,
  GET_USERS
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users:  action.payload
      }
    case ADD_USER:
      return {
        ...state,
      };
    case ADD_ADMIN:
      return {
        ...state,
      };
    case DELETE_USER:
      return {
        ...state,
        // admins: action.payload
      };
    case DISABLE_ENABLE_SCANNER_USER:
      return {
        ...state,
      };
    case GET_EVENTS:
      return {
        ...state,
        events: action.payload,
      };
    case GET_SCANNER_USERS:
      return {
        ...state,
      };
    case GET_ADMINS:
      return {
        ...state,
        admins: action.payload,
      };
    case ADMIN_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};
