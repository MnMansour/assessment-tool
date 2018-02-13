import { combineReducers } from 'redux';
import { LOG_IN, LOG_OUT } from './actions';
import users from '../components/Login/logindata.json'
//import intersectionWith from 'lodash/intersectionWith';
import isEqual from 'lodash/isEqual';

const userArray=users;

const user = (state ={} , { type, payload }) => {
	switch (type) {
		case LOG_IN:
			let loginUser = Object.assign({}, ...payload) //get the user details from the login form
			let users = Object.values(userArray); //get the values from the array of object of users
			//next line checks if loginuser exists in users array
			let userExist=users.filter((user)=>(user.username && user.password) === (loginUser.username&&loginUser.password))
			let userExisted = Object.assign({}, ...userExist)
			let equalityTest= isEqual(userExisted, loginUser) // test to determine what to return
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
