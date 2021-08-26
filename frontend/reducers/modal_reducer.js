import { OPEN_MODAL, CLOSE_MODAL} from "../actions/modal_actions";

const ModalReducer= (oldState = null, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState)
    switch (action.type) {
        case OPEN_MODAL:
            // return nextState[action.modal];
            return action.modal
        case CLOSE_MODAL:
            return null;
        default:
            return oldState;
    }
}


export default ModalReducer;