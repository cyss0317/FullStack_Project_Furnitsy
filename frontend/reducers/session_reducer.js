//takes care of the actions and returns a correspoding value
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";


const _nullUser = Object.freeze({
    id: null
});

const SessionReducer = (oldState = _nullUser, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { id: action.currentUser.id};
        case LOGOUT_CURRENT_USER:
            // const nextState = Object.freeze({ id: null})
            return _nullUser;
        default:
            return oldState;
    }
}

export default SessionReducer;