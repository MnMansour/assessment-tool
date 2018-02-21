import { combineReducers } from "redux";
import { LOG_IN, LOG_OUT,SHOW_STUDENTS } from "./actions";

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
const studentsList = (state = [], { type, payload }) => {
	switch (type) {
	case SHOW_STUDENTS:
		return payload;
	default:
		return state;
	}
};

export default combineReducers({ user,studentsList });
