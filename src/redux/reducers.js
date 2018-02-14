import { combineReducers } from 'redux';
import { LOG_IN, LOG_OUT } from './actions';
import * as actionsType from './actions';



const user = (state = [], { type, payload }) => {
	switch (type) {
		case LOG_IN:
			return { ...payload };
		case LOG_OUT:
			return {};
    case actionsType.USER_STORE:
    return {...payload}
		default:
			return state;
	}
};


const classes = ((state= {}, action)=>{
  switch (action.type) {
    case actionsType.CLASS_EDIT:
    return Object.values(state).map((item, index)=>{
      if (index === action.indexToChange) {
        return {...item, isEdit:  !item.isEdit, name: action.name}
      }
      return {...item}
    })
		case actionsType.CLASS_STORE:
		return {...action.payload}
    default:
      return state
  }
})

export default combineReducers({ user, classes });
