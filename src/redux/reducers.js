import { combineReducers } from 'redux';
import { LOG_IN, LOG_OUT } from './actions';
import users from '../components/Login/logindata.json';



const user = (state =users , { type, payload }) => {
	switch (type) {
		case LOG_IN:
			return alert(payload);
		case LOG_OUT:
			return {};
		default:
			return state;
	}
};

export default combineReducers({ user });
