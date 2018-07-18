import { combineReducers } from 'redux';
import { LOG_IN, LOG_OUT } from './actions';
import { reducer as formReducer } from 'redux-form'

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

export default combineReducers({
	 user,
	 form: formReducer
  });
