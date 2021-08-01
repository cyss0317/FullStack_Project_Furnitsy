//takes care of the actions and returns a correspoding value
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";

const SessionReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { id: action.currentUser.id};
        case LOGOUT_CURRENT_USER:

            const nextState = Object.assign({}, oldState, { [id]: null})
            // const nextState = Object.freeze({ id: null})
            return nextState;
        default:
            return oldState;
    }
}

export default SessionReducer;