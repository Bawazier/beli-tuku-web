import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";


import AccountComponents from "../Components/FormAccount/";
import NavbarComponents from "../Components/NavBar/";
import SidebarComponents from "../Components/SideBar/";



export class Login extends Component {
  render() {
    return (
      <>
        <NavbarComponents />
        <Container>
          <Row>
            <Col md={4} lg={3} className="mt-5">
              <SidebarComponents picture="" name="Johanes Mikael" />
            </Col>
            <Col
              md={8}
              lg={7}
              className="mt-5 p-5 align-self-center border rounded"
            >
              <AccountComponents token={this.props.login}/>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Login;
