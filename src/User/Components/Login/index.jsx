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

import brandLogo from "../../Images/logo-w-137-h-44.svg";

export default () => {
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
          <RolesButton type="button" isOpen={true} className="rounded-left">
            <TextRoles>Customer</TextRoles>
          </RolesButton>
          <RolesButton type="button" isOpen={false} className="rounded-right">
            <TextRoles>Saller</TextRoles>
          </RolesButton>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6}>
          <Form>
            <FormGroup>
              <Input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Email"
                bsSize="lg"
                required
                autofocus
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="password"
                className="form-control"
                id="exampleFormControlInput1"
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
          <NavLink to="/auth/forgot-password" />
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
          <NavLink to="/auth/register" />
        </Col>
      </Row>
    </Container>
  );
};
