import React from "react";
import LoginFormContainer from "./login_form_container";
import SignupFormContainer from "./signup_form_container";


//if state.ui.modal is not null, render modal???
const Modal = ({ modal, closeModal }) => {
    if (!modal) {
        // if modal doesn't exist, it means closeModal
        return null
    }
    let component;
    //question, when does modal gets assign to either login or sign up
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



export default Modal;