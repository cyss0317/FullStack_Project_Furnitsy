import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signup, login } from "../actions/session_actions"

const mSTP = (state, ownProps) => ({
    errors: state.errors.session,
    formType: "Sign up"

})

const mDTP = (dispatch) => ({
    login: user => dispatch(login(user)),
    action: user => dispatch(signup(user))
})


export default connect(mSTP, mDTP)(SessionForm);