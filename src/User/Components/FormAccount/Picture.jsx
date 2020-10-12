import React from "react";
import { Row, Col, Form, FormGroup } from "reactstrap";
import { CirclePicture, Picture, SelectImage, Select } from "./elements";

import placeholder from '../../Images/placeholder.png'

export default (props) => {
  return (
    <Form>
      <Row className="justify-content-center">
        <Col xs={12} className="align-self-center">
          <CirclePicture className="rounded-circle">
            <Picture
              src={props.profilePicture ? props.profilePicture : placeholder}
              alt=""
            />
          </CirclePicture>
        </Col>
        <Col xs={12}>
          <FormGroup>
            <SelectImage for="profilePicture" className="btn text-center">
              Select Image
            </SelectImage>
            <Select type="file" name="file" id="profilePicture" />
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
};
