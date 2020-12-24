import React from "react";
import { Row, Col, Button, Card, CardTitle, CardText } from "reactstrap";
import numeral from "numeral";

const CardOrder = () => {
  return (
    <Card body>
      <Row className="align-items-center justify-content-between">
        <Col xs={8}>
          <CardTitle tag="h5">Order №1947034</CardTitle>
        </Col>
        <Col xs={4}>
          <CardTitle tag="h6" className="text-muted text-right">
            05-12-2019
          </CardTitle>
        </Col>
      </Row>
      <Row>
        <Col xs={3}>
          <CardText className="text-muted">Tracking Number :</CardText>
        </Col>
        <Col xs={3}>
          <CardText>IW3475453455</CardText>
        </Col>
      </Row>
      <Row>
        <Col xs={3}>
          <CardText className="text-muted">Quantity :</CardText>
        </Col>
        <Col xs={3}>
          <CardText>3</CardText>
        </Col>
      </Row>
      <Row>
        <Col xs={3}>
          <CardText className="text-muted">Total Amount: :</CardText>
        </Col>
        <Col xs={3}>
          <CardText>
            Rp.
            {numeral(2000000).format(0, 0).toString().replace(",", ".")}
            ,-
          </CardText>
        </Col>
        <Col>
          <CardText className="text-success text-right">Delivered</CardText>
        </Col>
      </Row>
    </Card>
  );
};

export default CardOrder;
