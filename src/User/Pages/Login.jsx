import React, { Component } from "react";
import { connect } from "react-redux";

import authAction from "../Redux/actions/auth";

import LoginComponents from "../Components/Login/index";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      roles: "customer",
      email: "",
      password: "",
    };
  }
  componentDidUpdate() {
    if (localStorage.getItem("token") && this.props.auth.isLogin) {
      console.log("ok");
      this.props.history.push("/profile/account");
    }
  }

  toggle = () =>
    this.setState({
      isOpen: !this.state.isOpen,
      roles: this.state.isOpen ? "saller" : "customer",
    });

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  login = async (event) => {
    event.preventDefault();
    const { email, password, roles } = this.state;
    console.log(roles);
    if (email && password && roles) {
      let data = {
        email: email,
        password: password,
        roles_id: roles,
      };
      await this.props.authActions(data);
      
    }
  };

  render() {
    return (
      <LoginComponents
        onClick={this.toggle}
        isOpen={this.state.isOpen}
        email={this.state.email}
        emailOnChange={this.handleInputChange}
        passwordOnChange={this.handleInputChange}
        password={this.state.password}
        onSubmit={this.login}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.authUser,
});

const mapDispatchToProps = {
  authActions: authAction.login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
