import {
  GET_USER_EVENTS,
  VERIFY_QR_CODES,
  GET_USER,
  USER_ERROR,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_USER_EVENTS:
      return {
        ...state,
        events: action.payload,
      };
    case VERIFY_QR_CODES:
      return {
        ...state,
      };
    case GET_USER:
      return {
        ...state,
      };
    case USER_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};
