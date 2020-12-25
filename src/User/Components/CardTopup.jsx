import React from "react";
import { Button, Card } from "reactstrap";
import numeral from "numeral";

const CardTopup = () => {
  return (
    <Card>
        <h1 className="text-success font-weight-bold p-3">
          {numeral(2000000).format(0, 0).toString().replace(",", ".")}
        </h1>
    </Card>
  );
};

export default CardTopup;
