import React from "react";
import { Button } from "reactstrap";
import numeral from "numeral";

const CardTopup = (props) => {
  return (
    <Button outline color="success" block onClick={props.topup} className="mb-3">
      <h1 className="font-weight-bold p-3">
        {numeral(props.charge).format(0, 0).toString().replace(",", ".")}
      </h1>
    </Button>
  );
};

export default CardTopup;
