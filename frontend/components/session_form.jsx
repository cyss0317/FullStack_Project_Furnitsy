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
    }

    submitHandler(e){
        e.preventDefault();
        this.props.action(this.props.formType);
    }

    changeHandler(field){
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    render() {
        return (
            <div className="session-container">
                <form  className="session-forms"onSubmit={this.submitHandler}>
                    <label >Email:
                        <input className="session-forms-email" type="text" value={this.state.email} onChange={this.changeHandler("email")} />
                    </label>
                    <label  >Passowrd:
                        <input className="session-forms-passowrd" type="password" value={this.state.passowrd} onChange={this.changeHandler("password")} />
                    </label>
                    <label  >First name:
                        <input className="session-forms-first_name" type="text" value={this.state.first_name} onChange={this.changeHandler("first_name")} />
                    </label>
                    <button value={this.props.formType}>{this.props.formType}</button>
                </form>
            </div>
        )
    }

}


export default SessionForm;