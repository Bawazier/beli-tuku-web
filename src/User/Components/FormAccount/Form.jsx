import React from "react";
import { Row, Col, Form, FormGroup, Label, Input } from "reactstrap";

export default () => {
  return (
    <Form>
      <FormGroup row>
        <Label for="name" xs={3}>
          Name
        </Label>
        <Col xs={9}>
          <Input type="text" name="name" id="name" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="email" xs={3}>
          Email
        </Label>
        <Col xs={9}>
          <Input type="email" name="email" id="email" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="phoneNumber" xs={3}>
          Phone Number
        </Label>
        <Col xs={9}>
          <Input type="number" name="phoneNumber" id="phoneNumber" />
        </Col>
      </FormGroup>
      <Row form className="align-items-center">
        <Label for="gender" xs={3}>
          Gender
        </Label>
        <Col xs={4}>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="gender" /> Male
            </Label>
          </FormGroup>
        </Col>
        <Col xs={4}>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="gender" /> Female
            </Label>
          </FormGroup>
        </Col>
      </Row>
      <FormGroup row>
        <Label for="dateOfBirth" xs={3}>
          Date Of Birth
        </Label>
        <Col xs={9}>
          <Input type="date" name="dateOfBirth" id="dateOfBirth" />
        </Col>
      </FormGroup>
    </Form>
  );
};