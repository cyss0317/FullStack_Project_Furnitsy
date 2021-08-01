import React from "react";

const Greeting = (props) => {

    const ifLoggedIn = () => (
        <div className="welcome-message-and-logout-button">
            <h3 className='welcome-message'>Welcom, {props.currentUser.first_name}</h3>
            <button className="logout-button" onClick={props.logout} >Logout</button>
        </div>
    )

    const ifLoggedOut = () => (
        <div className="signup-login">
            <Link to={`/signup`}>Sign Up</Link>
            &nbsp;or&nbsp;
            <Link to={`/login`}>Log In</Link>
        </div>
    )

    return currentUser ? ifLoggedIn() : ifLoggedOut();

}


export default Greeting;