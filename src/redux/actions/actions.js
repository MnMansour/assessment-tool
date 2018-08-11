import {auth} from '../../util/firebase';

export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const USER_STATUS = 'USER_STATUS'
export const GET_USER = 'GET_USER'

export const logIn = user => ({ type: LOG_IN, payload: user });
export const logOut = user => ({ type: LOG_OUT });

export function getUser() {
  return dispatch => {
    dispatch({
      type: USER_STATUS,
      payload: true
    });
    auth.onAuthStateChanged(user => {
      dispatch({
        type: GET_USER,
        payload: user
      });
      dispatch({
        type: USER_STATUS,
        payload: false
      });
    });
  };
}
