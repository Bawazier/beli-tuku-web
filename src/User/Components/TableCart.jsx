import React from "react";
import styled from 'styled-components';
import { Table, Button, Row, Col } from "reactstrap";
import { FaWindowClose, FaPlus, FaMinus } from "react-icons/fa";
import numeral from "numeral";

const TableCart = () => {
  return (
    <Table>
      <thead>
        <tr>
          <th className="text-muted">ITEM</th>
          <th className="text-muted">QUANTITY</th>
          <th className="text-muted">FINAL PRICE</th>
          <th className="text-muted">REMOVE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <styles.ItemColumn>
            <Row>
              <Col xs={4} className="pr-0 mr-0">
                <styles.Img
                  src={require("../Assets/Images/PrimaryImage.png")}
                  alt="Card image cap"
                />
              </Col>
              <Col xs={8}>
                <h5>Product Name lorem</h5>
              </Col>
            </Row>
          </styles.ItemColumn>
          <styles.QuantityColumn className="text-center">
            <Row>
              <Col xs={5}>
                <Button color="danger">
                  <FaMinus />
                </Button>
              </Col>
              <Col xs={2}>
                <h4>1</h4>
              </Col>
              <Col xs={5}>
                <Button color="danger">
                  <FaPlus />
                </Button>
              </Col>
            </Row>
          </styles.QuantityColumn>
          <styles.PriceColumn>
            Rp.
            {numeral(200000000000).format(0, 0).toString().replace(",", ".")}
            ,-
          </styles.PriceColumn>
          <th className="text-center">
            <Button color="danger">
              <FaWindowClose />
            </Button>
          </th>
        </tr>
      </tbody>
    </Table>
  );
};

const styles = {
    Img: styled.img`
        width: 100%;
        height: 50px;
    `,

    ItemColumn: styled.th`
        width: 300px;
    `,

    QuantityColumn: styled.td`
        width: 250px;
    `,

    PriceColumn: styled.td`
        width: 150px
    `,
};

export default TableCart;
