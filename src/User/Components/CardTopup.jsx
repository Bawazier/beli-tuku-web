import React from "react";
import { Button, Card } from "reactstrap";
import numeral from "numeral";

const CardTopup = () => {
  return (
    <Card body>
      <Button>
        <h4 className="text-success">
          Credit: Rp.
          {numeral(2000000).format(0, 0).toString().replace(",", ".")}
          ,-
        </h4>
      </Button>
    </Card>
  );
};

export default CardTopup;
