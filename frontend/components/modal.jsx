import { connect } from "react-redux";
import { closeModal } from "../actions/modal_actions";
import React from "react";
import LoginFormContainer from "./login_form_container";
import SignupFormContainer from "./signup_form_container";

//answered: why container and presentational have to be in the same file.
            //it didn't render the session form when they were not in the same file
    //answered 4: why do we need to put "React from 'react'" signup and login container now, 
    //              when we didn't need that when we used to render in app <Link component=signupFormContainer> 

//if state.ui.modal is not null, render modal???
const Modal = ({ modal, closeModal }) => {
    if (!modal) {
        // if modal doesn't exist, it means closeModal
        return null
    }
    let component;
    //answered, when does modal gets assign to either login or sign up
        //inside of greeting.jsx, i assign it through onclick
    switch(modal){
        case "Login":
            component = <LoginFormContainer/>;
            break;
        case "Sign Up":
            component = <SignupFormContainer/>;
            break;
        default:
            return null;    
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            {/* stopPropagation prevents parent's event(stop bubbling event)  */}
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );

}


const mSTP = state => ({
    modal: state.ui.modal
})

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(Modal);


