<<<<<<< HEAD
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const SHOW_STUDENTS = "SHOW_STUDENTS";
export const logIn = user => ({ type: LOG_IN, payload: user });
export const logOut = user => ({ type: LOG_OUT });
export const showStudents = payload => ({ type: SHOW_STUDENTS,payload });
=======

//classes section
export const CLASS_EDIT = 'CLASS_EDIT';
export const CLASS_STORE = 'CLASS_STORE';

export const classStore = classes => ({ type: CLASS_STORE, payload: classes });
export const classEdit = (indexToChange, name)=>({type: CLASS_EDIT, indexToChange, name });
//end classes section

//User section
export const USER_STORE = 'USER_STORE';
export const userStore = classes => ({ type: USER_STORE, payload: classes });
// end user section

export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const RESET_STATE = "RESET_STATE";
export const USER_IN = "USER_INTO_STATE";


export const logIn = user => ({ type: LOG_IN, payload: user});
export const logOut = () => ({ type: LOG_OUT });
export const userState = (users) => ({ type: USER_IN, payload:users});
export const resetState = () => ({ type: RESET_STATE, payload:[{flag: "error"}]});
export const GET_CLASSES = "GET_CLASSES";
export const getClasses = payload => ({ type: GET_CLASSES, payload });
>>>>>>> develop
