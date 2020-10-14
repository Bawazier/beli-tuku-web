import React from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";

export default (props) => {
  return (
    <Form onSubmit={props.onSubmit}>
      <FormGroup row>
        <Label for="name" xs={3}>
          Name
        </Label>
        <Col xs={9}>
          <Input
            type="text"
            name="name"
            id="name"
            onChange={props.onChange}
            value={props.nameValue}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="email" xs={3}>
          Email
        </Label>
        <Col xs={9}>
          <Input
            type="email"
            name="email"
            id="email"
            onChange={props.onChange}
            value={props.emailValue}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="phoneNumber" xs={3}>
          Phone Number
        </Label>
        <Col xs={9}>
          <Input
            type="number"
            name="phone"
            id="phoneNumber"
            onChange={props.onChange}
            value={props.phoneValue}
          />
        </Col>
      </FormGroup>
      <Row form className="align-items-center">
        <Label for="gender" xs={3}>
          Gender
        </Label>
        <Col xs={4}>
          {["Male", "Female"].map((item, index) => (
            <FormGroup check>
              <Label check className={index === 0 ? "ml-1" : "ml-5"}>
                <Input
                  type="radio"
                  name="gender"
                  onChange={props.onChange}
                  checked={item === props.genderChecked}
                />{" "}
                <span>{item}</span>
              </Label>
            </FormGroup>
          ))}
        </Col>
      </Row>
      <FormGroup row>
        <Label for="dateOfBirth" xs={3}>
          Date Of Birth
        </Label>
        <Col xs={9}>
          <Input
            type="date"
            name="dateOfBirth"
            id="dateOfBirth"
            onChange={props.onChange}
            value={props.dateOfBirthValue}
          />
        </Col>
      </FormGroup>
      <Row>
        <Col xs={{ size: 9, offset: 3 }}>
          <Button type="submit" color="success" size="lg" block>
            Save
          </Button>
        </Col>
      </Row>
    </Form>
  );
};