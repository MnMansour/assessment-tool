import { combineReducers } from 'redux';
import { LOG_IN, LOG_OUT, GET_CLASSES } from './actions';
import * as actionsType from './actions';

const user = (state = {}, { type, payload }) => {
	switch (type) {
	case LOG_IN:
		return { ...payload };
	case LOG_OUT:
		return {};
	case actionsType.USER_STORE: {
		const newState = {};
		payload.forEach(user => {
			newState[user.id] = user;
		});
		return newState; }
	default:
		return state;
	}
};

const classes = (state = {}, action) => {
	switch (action.type) {
	case actionsType.CLASS_EDIT: {
		const oldState = { ...state };
		oldState[action.indexToChange].name = action.name;
		oldState[action.indexToChange].isEdit = !oldState[
			action.indexToChange
		].isEdit;
		return oldState; }
        
	case actionsType.CLASS_STORE: {
		const newState = {};
		action.payload.forEach(oneClass => {
			newState[oneClass.id] = oneClass;
		});
		return newState; }
	default:
		return state;
	}
};





// TODO: Merge UserClass to classes
const userClass = (state = [], { type, payload }) => {
	switch (type) {
	case GET_CLASSES:
		return payload;
	default:
		return state;
	}
};

export default combineReducers({ user,classes, userClass });
