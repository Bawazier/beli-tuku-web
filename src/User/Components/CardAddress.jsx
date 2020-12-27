import React from "react";
import { Button, Card, CardTitle, CardText } from "reactstrap";

const CardAddress = (props) => {
  return (
    <Card
      body
      className={props.isPrimary ? "mb-3 border border-success" : "mb-3"}
    >
      <CardTitle tag="h5">{props.name}</CardTitle>
      <CardText>
        {props.address}, {props.region}, {props.postalCode}
      </CardText>
      <Button
        color="warning"
        className="font-weight-bold text-white"
        onClick={props.onChange}
      >
        Change address
      </Button>
    </Card>
  );
};

export default CardAddress;
