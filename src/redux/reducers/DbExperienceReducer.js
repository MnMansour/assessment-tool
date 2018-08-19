
export default function (state = {}, action) {
  switch (action.type) {
    case 'GET_DB_EXPERIENCES':
      return action.payload;
    default:
      return state;
  }
}
