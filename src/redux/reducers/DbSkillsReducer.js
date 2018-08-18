
export default function (state = {}, action) {
  switch (action.type) {
    case 'GET_DB_SKILLS':
      return action.payload;
    default:
      return state;
  }
}
