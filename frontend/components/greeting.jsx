import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({currentUser, logout, openModal}) => {
    
    const ifLoggedIn = () => (

        <div className="welcome-message-and-logout-button">
            <p className='welcome-message'>Welcome, {currentUser.first_name}</p>
            <button className="logout-button" onClick={logout} >Logout</button>
        </div>
    )

    const ifLoggedOut = () => (
        <div className="signup-login">
                {/* <Link className="signup"to={`/signup`}>Sign Up</Link> */}
            <button className='login' onClick={() => openModal("Login")}>Login</button>
            &nbsp;<span className="or">or</span>&nbsp;
                {/* <Link className="login" to={`/login`}>Log In</Link> */}
            <button className='signup' onClick={() => openModal("Sign Up")}>Sign Up</button>
        </div>
    )

    return currentUser ? ifLoggedIn() : ifLoggedOut();
                    // ifLoggedIn(currentUser, logout)
                    // answered, why do we need to pass these as param

}


export default Greeting;