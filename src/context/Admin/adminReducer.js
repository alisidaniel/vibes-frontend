import {
  ADD_USER,
  DELETE_USER,
  DISABLE_ENABLE_SCANNER_USER,
  GET_EVENTS,
  GET_SCANNER_USERS,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
      };
    case DELETE_USER:
      return {
        ...state,
      };
    case DISABLE_ENABLE_SCANNER_USER:
      return {
        ...state,
      };
    case GET_EVENTS:
      return {
        ...state,
      };
    case GET_SCANNER_USERS:
      return {
        ...state,
      };
    default:
      return state;
  }
};
