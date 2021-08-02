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
        const user = Object.assign({}, this.state)
        this.props.action(user);
    }

    changeHandler(field){
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    render() {
        return (
            <div className="session-container">
                <form  className="session-forms"onSubmit={this.submitHandler}>
                    Welcome to Furnitsy!
                    <br />
                    Please {this.props.formType}
                    <label >Email:
                        <input className="session-forms-email" type="text" value={this.state.email} onChange={this.changeHandler("email")} />
                    </label>
                    <label  >Passowrd:
                        <input className="session-forms-passowrd" type="password" value={this.state.passowrd} onChange={this.changeHandler("password")} />
                    </label>
                    <label  >First name:
                        <input className="session-forms-first_name" type="text" value={this.state.first_name} onChange={this.changeHandler("first_name")} />
                    </label>
                    <input type="submit" className="session-form-submit"value={this.props.formType}></input>
                </form>
            </div>
        )
    }

}


export default SessionForm;