import React from "react";

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
            <ul className="errors">
                {
                errors.map((error) => {
                    <li className="error" >
                        {error}
                    </li>
                })
                }
            </ul>
        )
    }


    render() {

        return (
            <div className="session-container">

                <form  className="session-forms"onSubmit={this.submitHandler}>
                    <br />
                    Welcome to Furnitsy!
                    <br />
                    Please {this.props.formType}
                    {this.renderErrors()}
                    <br />
                    <label >Email:
                        <input className="session-forms-email" type="text" placeholder="ex)furnitsy@google.com" value={this.state.email} onChange={this.changeHandler("email")} />
                    </label>
                    <br />
                    <label  >Passowrd:
                        <input className="session-forms-passowrd" type="password" placeholder="Enter Password" value={this.state.passowrd} onChange={this.changeHandler("password")} />
                    </label>
                    <br />
                    <div>
                        {  this.props.formType === "Sign up" ? (
                                <label  >First name:
                                <input className="session-forms-first_name" type="text" placeholder="Enter First Name" value={this.state.first_name} onChange={this.changeHandler("first_name")} />
                                </label>
                        ) : ("")
                        }     
                    </div>
                    <br />
                    <div className="submit-buttons">
                        <input type="submit" className="session-form-submit" value={this.props.formType}></input>
                        <button className="demo-button" onClick={this.demoHandler}>Demo-User</button>
                    </div>
                </form>
            </div>
        )
    }

}


export default SessionForm;