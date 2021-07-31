import { GET_USER_EVENTS, VERIFY_QR_CODES, GET_USER } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_USER_EVENTS:
      return {
        ...state,
      };
    case VERIFY_QR_CODES:
      return {
        ...state,
      };
    case GET_USER:
      return {
        ...state,
      };
    default:
      return state;
  }
};
