import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import UserReducer from './UserReducer';
import LoadingReducer from './LoadingReducer';
import DbUserReducer from './DbUserReducer';
import DbAllowedUsersReducer from './DbAllowedUsersReducer';

export default combineReducers({
	 form: formReducer,
	 user: UserReducer,
	 loading: LoadingReducer,
	 dbUsers: DbUserReducer,
	 dbAllowedUsers: DbAllowedUsersReducer
  });
