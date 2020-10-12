import React from "react";
import { Container, Row, Col, Form, Input, FormGroup } from "reactstrap";
import {
  BrandLogo,
  Message,
  RolesButton,
  TextRoles,
  TextLink,
  NavLink,
  ButtonSubmit,
} from "./LoginElements";

import brandLogo from "../../Images/logo-w-156-h-50.svg";

export default (props) => {
  return (
    <Container className="text-center p-5">
      <Row className="mb-4 justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6}>
          <BrandLogo src={brandLogo} alt="Shop.Id" />
        </Col>
      </Row>
      <Row className="mb-4 justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6}>
          <Message>Please login with your account</Message>
        </Col>
      </Row>
      <Row className="mb-4 justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6}>
          <RolesButton
            type="button"
            onClick={props.onClick}
            isOpen={!props.isOpen}
            className="rounded-left"
          >
            <TextRoles>Customer</TextRoles>
          </RolesButton>
          <RolesButton
            type="button"
            onClick={props.onClick}
            isOpen={props.isOpen}
            className="rounded-right"
          >
            <TextRoles>Saller</TextRoles>
          </RolesButton>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6}>
          <Form onSubmit={props.onSubmit}>
            <FormGroup>
              <Input
                value={props.email}
                onChange={props.emailOnChange}
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                bsSize="lg"
                required
                autoFocus
              />
            </FormGroup>
            <FormGroup>
              <Input
                value={props.password}
                onChange={props.passwordOnChange}
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                bsSize="lg"
                required
              />
            </FormGroup>
          </Form>
        </Col>
      </Row>
      <Row className="mb-4 justify-content-center text-right">
        <Col xs={12} sm={10} md={8} lg={6}>
          <NavLink to="/auth/forgot-password">Forgot Password</NavLink>
        </Col>
      </Row>
      <Row className="mb-4 justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6}>
          <ButtonSubmit type="submit" className="btn btn-lg btn-block shadow">
            Submit{" "}
          </ButtonSubmit>
        </Col>
      </Row>
      <Row className="mb-4 justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6}>
          <TextLink>Don't have a Shoppe.id account?</TextLink>&nbsp;
          <NavLink to="/auth/signup">Register</NavLink>
        </Col>
      </Row>
    </Container>
  );
};