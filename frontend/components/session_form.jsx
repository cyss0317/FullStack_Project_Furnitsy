import React from "react";
import {Link} from "react-router-dom"; 

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            first_name: ""
        };
        this.submitHandler = this.submitHandler.bind(this);
        this.demoHandler = this.demoHandler.bind(this);
    }

    submitHandler(e){

        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.action(user);
    }

    demoHandler(e){
        e.preventDefault();
        const user = Object.assign({}, {id: 4, email: "demo_user", password: "password"})
        this.props.login(user);
    }

    changeHandler(field){
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    renderErrors(){
        const errors = this.props.errors;
        return(
            <div className="errors-container">
                <ul className="errors">
                    {
                    errors.map((error) => {
                        return(
                        <li className="error" >
                            {error}
                        </li>
                        )
                    })
                    }
                </ul>
            </div>
        )
    }

    closingButton(){
        <Link to='/'></Link>
    }


    render() {

        return (
            <div className="session-container">
                
                <div>
                    <span className="x-closing-button" onClick={this.closingButton}>&#215;</span>
                    <a href="/3000"></a>
                </div>
                    <form  className="session-forms"onSubmit={this.submitHandler}>
                        <p className="welcome-message"> Welcome to <span className="furnitsy-logo">Furnitsy</span>! </p>
                        <p className="form-type-message"> Please {this.props.formType} </p>
                        <div>
                            { 
                            this.props.errors.length > 0 ?(
                                this.renderErrors()
                            ) : ("")
                            }
                        </div>

                        <ul className="input-sections">
                            <li className="form-row">
                                <label className="labels" >Email:    
                                    <input className="session-forms-email" type="text" placeholder="ex)furnitsy@google.com" value={this.state.email} onChange={this.changeHandler("email")} />
                                </label>
                            </li>
                            <li className="form-row">
                                <label className="labels">Password:
                                    <input className="session-forms-password" type="password" placeholder="Enter Password" value={this.state.passowrd} onChange={this.changeHandler("password")} />
                                </label>
                            </li>
                            <li className="form-row">
                                <div>
                                    {  this.props.formType === "Sign up" ? (
                                        <label className="labels" >First name:
                                            <input className="session-forms-first_name" type="text" placeholder="Enter First Name" value={this.state.first_name} onChange={this.changeHandler("first_name")} />
                                            </label>
                                    ) : ("")
                                    }     
                                </div>
                            </li>
                        </ul>
                        <div className="buttons">
                            <button className="session-form-submit" >{this.props.formType}</button>
                            <button className="demo-button" onClick={this.demoHandler}>Demo-User</button>
                        </div>
                    </form>

                <section className="modal-screen"></section>
            </div>
        )
    }

}


export default SessionForm;