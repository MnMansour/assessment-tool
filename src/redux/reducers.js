import { combineReducers } from "redux";
import { LOG_IN, LOG_OUT } from "./actions";

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

export default combineReducers({ user });
