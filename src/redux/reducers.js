import { combineReducers } from 'redux';
import { LOG_IN, LOG_OUT, USER_IN} from './actions';

const user = (state ={} , { type, payload}) => {
	switch (type) {
		case LOG_IN:
			return payload
		case LOG_OUT:
			console.log(state)
			state = null
			state={}
			return state
		default:
			return state;
	}
};

const usersfromapi = (state ={} , { type, payload}) => {
	switch (type) {
		case USER_IN:
			return payload
		default:
			return state;
	}
};

export default combineReducers({ data: user , users: usersfromapi});
