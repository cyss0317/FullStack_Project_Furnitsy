import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from "../actions/session_actions";

const UsersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  const _nullUser = Object.freeze({});
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, oldState, {
        [action.currentUser.id]: action.currentUser,
      });
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    default:
      return oldState;
  }
};

export default UsersReducer;
