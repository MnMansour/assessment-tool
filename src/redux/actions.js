export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

//User section
export const USER_STORE = "USER_STORE";
export const userStore = users => ({ type: USER_STORE, payload: users });
// end user section

//accounts section
export const ACCOUNT_STORE = "ACCOUNT_STORE";
export const accountStore = accounts => ({ type: ACCOUNT_STORE, payload: accounts });
//end accounts section

//classes section
export const CLASS_STORE = "CLASS_STORE";
export const classStore = classes => ({ type: CLASS_STORE, payload: classes });
//end classes section

export const logIn = user => ({ type: LOG_IN, payload: user });
export const logOut = user => ({ type: LOG_OUT });