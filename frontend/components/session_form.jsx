import React from "react";
import { Link, withRouter } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      first_name: "",
    };
    this.submitHandler = this.submitHandler.bind(this);
    this.demoHandler = this.demoHandler.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.action(user).then(this.props.closeModal);
  }

  demoHandler(e) {
    e.preventDefault();
    const user = Object.assign(
      {},
      { email: "demo_user", password: "password" }
    );
    // this.setState({email:user.email})
    // this.setState({ password:user.password})
    this.props.login(user).then(this.props.closeModal);
  }

  changeHandler(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  renderErrors() {
    const errors = this.props.errors;
    return (
      <div className="errors-container">
        <ul className="errors">
          {errors.map((error) => {
            return <li className="error">- {error}</li>;
          })}
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div className="session-container">
        <div>
          <div onClick={this.props.closeModal} className="x-closing-button">
            &#215;
          </div>
        </div>
        <form className="session-forms" onSubmit={this.submitHandler}>
          <p className="welcome-message">
            <span className="furnitsy-logo">Sign in to continue</span>{" "}
          </p>
          <p className="form-type-message">
            {" "}
            Sign in or register with your email address{" "}
          </p>
          <div>{this.props.errors.length > 0 ? this.renderErrors() : ""}</div>

          <ul className="input-sections">
            <li className="form-row">
              <label className="labels">
                Email address
                <input
                  id="session-forms"
                  className="session-forms-email"
                  type="email"
                  placeholder="Enter Email"
                  value={this.state.email}
                  onChange={this.changeHandler("email")}
                />
              </label>
            </li>
            <li className="form-row">
              <label className="labels">
                Password
                <input
                  id="session-forms"
                  className="session-forms-password"
                  type="password"
                  placeholder="Enter Password"
                  value={this.state.passowrd}
                  onChange={this.changeHandler("password")}
                />
              </label>
            </li>
            <li className="form-row">
              <div>
                {this.props.formType === "Sign up" ? (
                  <label className="labels">
                    First name
                    <input
                      id="session-forms"
                      className="session-forms-first_name"
                      type="text"
                      placeholder="Enter First Name"
                      value={this.state.first_name}
                      onChange={this.changeHandler("first_name")}
                    />
                  </label>
                ) : (
                  ""
                )}
              </div>
            </li>
          </ul>
          <div className="session-form-buttons">
            <button className="session-form-submit">
              {this.props.formType}
            </button>
            <button className="demo-button" onClick={this.demoHandler}>
              Demo-User
            </button>
            {/* <button className="demo-button" onClick={this.props.otherForm}>Sign up</button> */}
            {this.props.otherForm}
          </div>
        </form>

        <section className="modal-screen"></section>
      </div>
    );
  }
}

export default withRouter(SessionForm);
