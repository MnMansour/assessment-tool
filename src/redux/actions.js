


export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const USER_IN = 'USER_INTO_STATE';



export const logIn = user => ({ type: LOG_IN, payload: user});
export const logOut = () => ({ type: LOG_OUT });
export const userState = (users) => ({ type: USER_IN, payload:users});
