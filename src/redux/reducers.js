import { combineReducers } from "redux";
import { LOG_IN, LOG_OUT, GET_CLASSES } from "./actions";

const user = (state = {}, { type, payload }) => {
  switch (type) {
    case LOG_IN:
      return { ...payload };
    case LOG_OUT:
      return {};
    default:
      return state;
  }
};

const userClass = (state = [], { type, payload }) => {
  switch (type) {
    case GET_CLASSES:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({ user, userClass });
