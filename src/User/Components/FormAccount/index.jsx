import React, {Component} from "react";
import { Row, Col } from "reactstrap";
import { connect } from "react-redux";

import Form from "./Form";
import Picture from "./Picture";

import ProfileActions from "../../Redux/actions/profile";

export class FormAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      gender: "",
      dateOfBirth: "",
    };
  }
  componentDidMount(){
    console.log(this.props.auth.token);
    this.props.findAccount(this.props.auth.token);
  }
  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  updateAccount = async (event) => {
    event.preventDefault();
    const data = this.state
    await this.props.updateAccount(this.props.auth.token, data);
    this.props.findAccount();
  }
  render() {
    const {isLoading, isError, alertMsg, data} = this.props.account
    return (
      <>
        {isLoading && !isError && <div>Loading....</div>}
        {!isLoading && isError && alertMsg !== "" && <div>{alertMsg}</div>}
        {!isLoading && !isError && data.length && (
          <Row>
            <Col xs={12} sm={12} md={8} lg={8}>
              <Form
                onSubmit={this.updateAccount}
                onChange={this.handleInputChange}
                nameValue={data.name}
                emailValue={data.email}
                phoneValue={data.phone}
                genderChecked={data.gender}
                dateOfBirthValue={data.dateOfBirth}
              />
            </Col>
            <Col xs={12} sm={12} md={4} lg={4}>
              <Picture
                profilePicture={data.picture !== null ? data.URL_image : ""}
              />
            </Col>
          </Row>
        )}
      </>
    );
  }
};

const mapStateToProps = (state) => ({
  account: state.account,
  auth: state.authUser
});

const mapDispatchToProps = {
  findAccount: ProfileActions.findAccount,
  updateAccount: ProfileActions.updateAccount,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormAccount);