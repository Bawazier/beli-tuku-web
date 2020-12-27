import React from "react";
import { Row, Col, Card, CardTitle, CardText } from "reactstrap";
import numeral from "numeral";
import { format } from "date-fns";

const CardOrder = (props) => {
  return (
    <Card body className="mb-3">
      <Row className="align-items-center justify-content-between">
        <Col xs={8}>
          <CardTitle tag="h5">
            Order №{props.noOrder.replace(".", "").substring(0, 8)}
          </CardTitle>
        </Col>
        <Col xs={4}>
          <CardTitle tag="h6" className="text-muted text-right">
            {format(new Date(props.createdAt), "yyyy-MM-dd")}
          </CardTitle>
        </Col>
      </Row>
      <Row>
        <Col xs={3}>
          <CardText className="text-muted">Tracking Number :</CardText>
        </Col>
        <Col xs={3}>
          <CardText>{props.noTracking.toUpperCase()}</CardText>
        </Col>
      </Row>
      <Row>
        <Col xs={3}>
          <CardText className="text-muted">Quantity :</CardText>
        </Col>
        <Col xs={3}>
          <CardText>{props.quantity}</CardText>
        </Col>
      </Row>
      <Row>
        <Col xs={3}>
          <CardText className="text-muted">Total Amount: :</CardText>
        </Col>
        <Col xs={3}>
          <CardText>
            Rp.
            {numeral(props.totalAmount)
              .format(0, 0)
              .toString()
              .replace(",", ".")}
            ,-
          </CardText>
        </Col>
        <Col>
          <CardText className="text-success text-right font-weight-bold">
            {props.status.toUpperCase()}
          </CardText>
        </Col>
      </Row>
    </Card>
  );
};

export default CardOrder;
