import { combineReducers } from 'redux';
import { LOG_IN, LOG_OUT } from './actions';
import users from '../components/Login/logindata.json'
//import intersectionWith from 'lodash/intersectionWith';
import isEqual from 'lodash/isEqual';

const userArray=users;

const user = (state ={} , { type, payload }) => {
	switch (type) {
		case LOG_IN:
		let loginUser = Object.assign({}, ...payload)
		let users = Object.values(userArray);
		let userExist=users.filter((user)=>(user.username && user.password) === (loginUser.username&&loginUser.password))
		let userExisted = Object.assign({}, ...userExist)
		let equalityTest= isEqual(userExisted, loginUser)
			return equalityTest? userExisted : equalityTest
		case LOG_OUT:
		console.log(state)
		state = null
			return state
		default:
			return state;
	}
};

export default combineReducers({ data: user });
