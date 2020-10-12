import React from "react";
import { Row, Col, Button } from "reactstrap";

import Form from "./Form";
import Picture from "./Picture";
import styled from "styled-components";

const ButtonSave = styled(Button)`
  background: #db3022;
  border-radius: 25px;
`;
const ButtonText = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;

export default () => {
  return (
    <>
      <Row>
        <Col xs={12} sm={12} md={8} lg={8}>
          <Form />
        </Col>
        <Col xs={12} sm={12} md={4} lg={4}>
          <Picture />
        </Col>
        <Col xs={12}>
          <ButtonSave>
            <ButtonText>Save</ButtonText>
          </ButtonSave>
        </Col>
      </Row>
    </>
  );
};
