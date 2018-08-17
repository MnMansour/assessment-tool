import {auth, database, githubProvider} from '../../util/firebase';

export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const USER_STATUS = 'USER_STATUS';
export const GET_USER = 'GET_USER';
export const USER_DB_STATUS = 'USER_DB_STATUS';
export const GET_DB_USERS = 'GET_DB_USERS';
export const ALLOWED_STATUS = 'ALLOWED_STATUS';
export const ALLOWED_USERS = 'ALLOWED_USERS';
export const GET_LOCATION = 'GET_LOCATION';
export const EDUCATION_DB_STATUS = 'EDUCATION_DB_STATUS';
export const GET_DB_EDUCATIONS = 'GET_DB_EDUCATIONS';


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

export function getDbUsers() {
  return dispatch => {
    dispatch({
      type: USER_DB_STATUS,
      payload: true
    });
    database.ref('users').on('value', db => {
      dispatch({
        type: GET_DB_USERS,
        payload: db.val()
      });
      dispatch({
        type: USER_DB_STATUS,
        payload: false
      });
    });
  };
}

export function getDbEducation() {
  return dispatch => {
    dispatch({
      type: EDUCATION_DB_STATUS,
      payload: true
    });
    database.ref('education').on('value', db => {
      dispatch({
        type: GET_DB_EDUCATIONS,
        payload: db.val()
      });
      dispatch({
        type: EDUCATION_DB_STATUS,
        payload: false
      });
    });
  };
}

export function getDbAllowedUsers() {
  return dispatch => {
    dispatch({
      type: ALLOWED_STATUS,
      payload: true
    });
    database.ref('allowedEmails').on('value', db => {
      dispatch({
        type: ALLOWED_USERS,
        payload: db.val()
      });
      dispatch({
        type: ALLOWED_STATUS,
        payload: false
      });
    });
  };
}

export function loginWithGithub() {
  return dispatch => {
    auth.signInWithPopup(githubProvider)
  }
}

export function login(email, password) {
  return dispatch => auth.signInWithEmailAndPassword(email, password);
}

export function logout() {
  return dispatch => auth.signOut();
}

export function sendPasswordResetEmail(email) {
  return dispatch =>  auth.sendPasswordResetEmail(email);
}

export function writeToDatabase(path, data) {
  return dispatch => database.ref(path).update(data)
}

export function getLocation(location) {
  return dispatch => {
    dispatch({
      type: GET_LOCATION,
      payload: location
    })
  }
}
