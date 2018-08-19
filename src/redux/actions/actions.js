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
export const EXPERIENCE_DB_STATUS = 'EXPERIENCE_DB_STATUS';
export const GET_DB_EXPERIENCES = 'GET_DB_EXPERIENCES';
export const SKILLS_DB_STATUS = 'SKILLS_DB_STATUS';
export const GET_DB_SKILLS = 'GET_DB_SKILLS';
export const ASSIGNMENTS_DB_STATUS = 'ASSIGNMENTS_DB_STATUS';
export const GET_DB_ASSIGNMENTS = 'GET_DB_ASSIGNMENTS';
export const PROJECTS_DB_STATUS = 'PROJECTS_DB_STATUS';
export const GET_DB_PROJECTS = 'GET_DB_PROJECTS';
export const CLASSES_STATUS = 'CLASSES_STATUS';
export const GET_DB_CLASSES = 'GET_DB_CLASSES';


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

export function getDbExperience() {
  return dispatch => {
    dispatch({
      type: EXPERIENCE_DB_STATUS,
      payload: true
    });
    database.ref('experience').on('value', db => {
      dispatch({
        type: GET_DB_EXPERIENCES,
        payload: db.val()
      });
      dispatch({
        type: EXPERIENCE_DB_STATUS,
        payload: false
      });
    });
  };
}

export function getDbAssignments() {
  return dispatch => {
    dispatch({
      type: ASSIGNMENTS_DB_STATUS,
      payload: true
    });
    database.ref('assignments').on('value', db => {
      dispatch({
        type: GET_DB_ASSIGNMENTS,
        payload: db.val()
      });
      dispatch({
        type: ASSIGNMENTS_DB_STATUS,
        payload: false
      });
    });
  };
}

export function getDbProjects() {
  return dispatch => {
    dispatch({
      type: PROJECTS_DB_STATUS,
      payload: true
    });
    database.ref('projects').on('value', db => {
      dispatch({
        type: GET_DB_PROJECTS,
        payload: db.val()
      });
      dispatch({
        type: PROJECTS_DB_STATUS,
        payload: false
      });
    });
  };
}

export function getDbSkills() {
  return dispatch => {
    dispatch({
      type: SKILLS_DB_STATUS,
      payload: true
    });
    database.ref('skills').on('value', db => {
      dispatch({
        type: GET_DB_SKILLS,
        payload: db.val()
      });
      dispatch({
        type: SKILLS_DB_STATUS,
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

export function getDbClasses() {
  return dispatch => {
    dispatch({
      type: CLASSES_STATUS,
      payload: true
    });
    database.ref('classes').on('value', db => {
      dispatch({
        type: GET_DB_CLASSES,
        payload: db.val()
      });
      dispatch({
        type: CLASSES_STATUS,
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

export function deleteFromDatabase(path, id) {
  return dispatch => database.ref(path).child(id).remove()
}

export function getLocation(location) {
  return dispatch => {
    dispatch({
      type: GET_LOCATION,
      payload: location
    })
  }
}
