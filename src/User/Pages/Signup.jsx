import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import {
  Container,
  Row,
  Col,
  Button,
  ButtonGroup,
  Form,
  Input,
  FormGroup,
} from "reactstrap";

const Signup = () => {
  return (
    <>
      <styles.GlobalStyle />
      <styles.Container
        fluid
        className="d-flex align-items-center justify-content-center"
      >
        <Row className="w-50 align-items-center justify-content-center">
          <Col
            xs={12}
            className="d-flex align-items-center justify-content-center"
          >
            <styles.Logo src={require("../Assets/Images/Logo.png")} alt="" />
          </Col>
          <Col
            xs={12}
            className="m-3 d-flex align-items-center justify-content-center"
          >
            <styles.Message>Please sign up with your account</styles.Message>
          </Col>
          <Col
            xs={12}
            className="m-3 d-flex align-items-center justify-content-center"
          >
            <ButtonGroup>
              <styles.RoleButton>Customer</styles.RoleButton>
              <styles.RoleButton disabled>Seller</styles.RoleButton>
            </ButtonGroup>
          </Col>
          <Col
            xs={12}
            className="m-3 d-flex align-items-center justify-content-center"
          >
            <Form className="w-50">
              <FormGroup>
                <Input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Name"
                  bsSize="lg"
                  required
                  autoFocus
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Email"
                  bsSize="lg"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                  bsSize="lg"
                  required
                />
              </FormGroup>
              <h6 className="text-warning text-right">&nbsp;</h6>
              <styles.Button block>SIGNUP</styles.Button>
            </Form>
          </Col>
          <Col
            xs={12}
            className="m-3 d-flex align-items-center justify-content-center"
          >
            <styles.Message>Already have a Beli Tuku account?</styles.Message>
            &nbsp;
            <styles.Message className="text-warning text-right">
              Login
            </styles.Message>
          </Col>
        </Row>
      </styles.Container>
    </>
  );
};

const styles = {
  GlobalStyle: createGlobalStyle`
    body {
      background-color: #102939;
      margin:0;
      padding:0;
      line-height: 1.5em;
      height: 100%;
      width: 100%;
    }
  `,
  Logo: styled.img`
    width: 150px;
    height: 50px;
  `,

  Container: styled(Container)`
    height: 100vmin;
  `,

  Message: styled.h6`
    color: #1bc29b;
  `,

  Button: styled(Button)`
    background-color: #1bc29b;
    font-weight: bold;
  `,

  RoleButton: styled(Button)`
    background-color: #1bc29b;
    font-weight: bold;
  `,
};

export default Signup;
