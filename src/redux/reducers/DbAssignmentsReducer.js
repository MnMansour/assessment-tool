
export default function (state = {}, action) {
  switch (action.type) {
    case 'GET_DB_ASSIGNMENTS':
      return action.payload;
    default:
      return state;
  }
}
