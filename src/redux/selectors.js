export const userSelector = state => state.authuser;

export const oneUserSelector = (state) => state.user;
export const accountsSelector = (state) => state.accounts;
export const classesSelector = (state) => state.classes;
export const matchedClassSelector = (state, id) => Object.values(state.classes).find(element =>element.user_ids.includes(id));