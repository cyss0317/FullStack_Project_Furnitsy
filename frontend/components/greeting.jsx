import React from "react";
import { Link } from "react-router-dom";

const Greeting = (props) => {
    
    const ifLoggedIn = () => (

        <div className="welcome-message-and-logout-button">
            <h3 className='welcome-message'>Welcome, {props.currentUser.first_name}</h3>
            <button className="logout-button" onClick={props.logout} >Logout</button>
        </div>
    )

    const ifLoggedOut = () => (
        <div className="signup-login">
            <Link className="signup"to={`/signup`}>Sign Up</Link>
            &nbsp;or&nbsp;
            <Link className="login" to={`/login`}>Log In</Link>
        </div>
    )

    return props.currentUser ? ifLoggedIn() : ifLoggedOut();

}


export default Greeting;