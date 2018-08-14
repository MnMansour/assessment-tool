
export default function (state = {}, action) {
  switch (action.type) {
    case 'GET_DB_USERS':
      return action.payload;
    default:
      return state;
  }
}
