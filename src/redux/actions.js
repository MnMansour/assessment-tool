export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const SORT_CLASSES = 'SORT_CLASSES'

export const logIn = user => ({ type: LOG_IN, payload: user });
export const logOut = user => ({ type: LOG_OUT });
export const sortClasses = classes => ({ type: SORT_CLASSES,classes });
