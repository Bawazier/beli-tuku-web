import React, { Component } from "react";
import { connect } from "react-redux";

import SignupComponents from "../Components/Signup/index";

import SignupActions from "../Redux/actions/signup";

export class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      roles: "customer",
      name: "",
      email: "",
      password: "",
    };
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
  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.signup(
      this.state.name,
      this.state.email,
      this.state.password
    );
    console.log(this.state);
  };
  render() {
    return (
      <SignupComponents
        onClick={this.toggle}
        isOpen={this.state.isOpen}
        name={this.state.name}
        nameOnChange={this.handleInputChange}
        email={this.state.email}
        emailOnChange={this.handleInputChange}
        password={this.state.password}
        passwordOnChange={this.handleInputChange}
        onSubmit={this.handleOnSubmit}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  customer: state.customer,
});

const mapDispatchToProps = {
  signup: SignupActions.signup,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
