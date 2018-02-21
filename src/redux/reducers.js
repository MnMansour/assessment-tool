import { combineReducers } from "redux";
import { LOG_IN, LOG_OUT, USER_STORE, ACCOUNT_STORE } from "./actions";

const user = (state = {}, { type, payload }) => {
    switch (type) {
    case LOG_IN:
        return { ...payload };
    case LOG_OUT:
        return {};
  	case USER_STORE:
        const newState = {};
        payload.forEach(user => {
      	newState[user.id] = user;
        });
        return newState;
  	default:
        return state;
    }
};

const accounts = (state = {}, { type, payload }) => {
    switch (type) {
    case ACCOUNT_STORE:
        const newState = {};
        payload.forEach(account => {
            newState[account.id] = account;
        });
        return newState;
    default:
        return state;
    }
};

export default combineReducers({ user, accounts });
