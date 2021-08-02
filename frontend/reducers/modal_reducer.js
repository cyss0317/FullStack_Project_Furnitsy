import { OPEN_MODAL, CLOSE_MODAL} from "../actions/modal_actions";

const ModalReducer= (oldState = null, action){
    switch (action.type) {
        case OPEN_MODAL:
            
        case CLOSE_MODAL:
    
        default:
            return oldState;
    }
}


export default ModalReducer;