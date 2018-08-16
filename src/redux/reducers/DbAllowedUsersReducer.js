
export default function (state = {}, action) {
  switch (action.type) {
    case 'ALLOWED_USERS':
      return action.payload;
    default:
      return state;
  }
}
