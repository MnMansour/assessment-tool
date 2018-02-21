export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const SHOW_STUDENTS = "SHOW_STUDENTS";
export const logIn = user => ({ type: LOG_IN, payload: user });
export const logOut = user => ({ type: LOG_OUT });
export const showStudents = payload => ({ type: SHOW_STUDENTS,payload });
