import React, { Component } from "react";

import LoginComponents from "../Components/Login/index";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      roles: "",
    };
  }
  toggle = () =>
    this.setState({
      isOpen: !this.state.isOpen,
      roles: this.state.isOpen ? "Saller" : "Customer",
    });
  render() {
    return (
      <LoginComponents
        onClick={this.toggle}
        isOpen={this.state.isOpen}
        email=""
        emailOnChange=""
        passwordOnChange=""
        password=""
        onSubmit={this.state.roles}
      />
    );
  }
}

export default Login;
