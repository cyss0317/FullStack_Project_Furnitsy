import {connect} from "react-redux";
import SessionForm from "./session_form";
import {login} from "../actions/session_actions"
import {openModal, closeModal} from "../actions/modal_actions";

const mSTP = (state, ownProps) => ({    
    errors: state.errors.session,
    formType: "Login"
})

const mDTP = (dispatch) => {
    return {
    action: user => dispatch(login(user)),
    otherForm: (
        <button onClick={() => dispatch(openModal('Sign up'))}>
            Sign Up
        </button>
    ),
    closeModal: () => dispatch(closeModal()),
    login: user => dispatch(login(user))
    }
}


export default connect(mSTP, mDTP)(SessionForm);