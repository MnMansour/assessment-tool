import { combineReducers } from 'redux';
import { LOG_IN, LOG_OUT } from './actions';

const initialState = {
      "001": {
        "id": "001",
        "account": "001",
        "firstName": "John",
        "lastName": "Doe",
        "phoneNumber": "+358458904323"
      },
      "002": {
        "id": "002",
        "account": "002",
        "firstName": "Jacky",
        "lastName": "Brown",
        "phoneNumber": "+358446544323"
      },
      "003": {
        "id": "003",
        "account": "003",
        "firstName": "Alex",
        "lastName": "Smith",
        "phoneNumber": "+358446544323"
      }
		}
const user = (state = initialState, { type, payload }) => {
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
