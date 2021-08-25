import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from "../actions/session_actions";
import { CLOSE_MODAL } from "../actions/modal_actions";

const SessionErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            // return Object.assign({}, oldState, {[errors]: []})
            return [];
        case RECEIVE_SESSION_ERRORS:
            // return Object.assign({}, oldState, {[errors]: action.errors} )
            return action.errors;
        case CLOSE_MODAL:
            return [];
        default:
            return oldState;
    }
}


export default SessionErrorsReducer;