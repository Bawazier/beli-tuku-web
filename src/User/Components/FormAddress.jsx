import React from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

const FormAddress = () => {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleAddress">
          Save address as (ex : home address, office address)
        </Label>
        <Input
          type="text"
          name="address"
          id="exampleAddress"
          placeholder="1234 Main St"
        />
      </FormGroup>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">Recipient’s name</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="with a placeholder"
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword">Recipient's telephone number</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="password placeholder"
            />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">Address</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="with a placeholder"
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword">Postal code</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="password placeholder"
            />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">City or Subdistrict</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="with a placeholder"
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup check>
        <Input type="checkbox" name="check" id="exampleCheck" />
        <Label for="exampleCheck" check>
          Make it the primary address
        </Label>
      </FormGroup>
      <Row className="align-items-center justify-content-end">
        <Col xs={2}>
          <Button>Cancel</Button>
        </Col>
        <Col xs={2}>
          <Button>Save</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default FormAddress;
