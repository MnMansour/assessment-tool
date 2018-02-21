export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

//classes section
export const CLASS_EDIT = "CLASS_EDIT";
export const CLASS_STORE = "CLASS_STORE";

export const classStore = classes => ({ type: CLASS_STORE, payload: classes });
//end classes section

//User section
export const USER_STORE = "USER_STORE";

export const userStore = classes => ({ type: USER_STORE, payload: classes });

// end user section

export const logIn = user => ({ type: LOG_IN, payload: user });
export const logOut = user => ({ type: LOG_OUT });
