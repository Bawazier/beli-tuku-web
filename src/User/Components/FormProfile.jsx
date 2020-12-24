import React from "react";
import styled from 'styled-components';
import { Row, Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

const FormProfile = () => {
  return (
    <Row>
      <Col xs={8}>
        <Form>
          <FormGroup row>
            <Label for="name" sm={3} className="text-muted">
              Name
            </Label>
            <Col sm={9}>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="with a placeholder"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleEmail" sm={3} className="text-muted">
              Email
            </Label>
            <Col sm={9}>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="with a placeholder"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="phoneNumber" sm={3} className="text-muted">
              Phone Number
            </Label>
            <Col sm={9}>
              <Input
                type="number"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="with a placeholder"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="gender" sm={4} className="text-muted">
              Gender
            </Label>
            <Col sm={4}>
              <Input type="radio" name="radio2" /> Male
            </Col>
            <Col sm={4}>
              <Input type="radio" name="radio2" /> Female
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="dateOfBirth" sm={3} className="text-muted">
              Date of Birth
            </Label>
            <Col xs={9}>
              <Input type="date" name="dateOfBirth" id="dateOfBirth" />
            </Col>
          </FormGroup>
        </Form>
      </Col>
      <Col xs={4}>
        <Row className="align-items-center justify-content-center border-left">
          <Col xs={10} className="mb-3">
            <styles.Img
              src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
              alt="Card image cap"
            />
          </Col>
          <Col xs={12}>
            <Button block>Select Image</Button>
          </Col>
        </Row>
      </Col>
      <Col>
        <Button block>Save</Button>
      </Col>
    </Row>
  );
};

const styles = {
  Img: styled.img`
    width: 100%;
    height: 180px;
    border-radius: 100%;
  `,
};

export default FormProfile;
