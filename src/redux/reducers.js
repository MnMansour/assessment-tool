import { combineReducers } from 'redux';
import { LOG_IN, LOG_OUT } from './actions';

const classes =[
	{id:"a1b2c3d",
	location:"Helsinki",
	className:"first class group ",
	participants:"25",
	currentSprint:"12",
	manage:"mange"
	 },
	{id:"a2a2c3d",
	location:"Helsinki",
	className:"second class group ",
	participants:"15",
	currentSprint:"12",
	manage:"mange"},
	{id:"c1b2a3d",
	location:"Tampere",
	className:"third class group ",
	participants:"10",
	currentSprint:"8",
	manage:"mange"},
	{id:"d1b2c3a",
	location:"Stockholm",
	className:"fourth class group ",
	participants:"13",
	currentSprint:"6",
	manage:"mange"},
	{id:"f1b2c3d",
	location:"Helsinki",
	className:"class 2018",
	participants:"19",
	currentSprint:"4",
	manage:"mange"},
	{id:"g1b2c3d",
	location:"Berlin",
	className:"class 2017",
	participants:"17",
	currentSprint:"1",
	manage:"mange"}
]
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

const userClass = (state = classes)=>{
return state;
}

export default combineReducers({ user, userClass});
