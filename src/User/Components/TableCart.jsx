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
                  src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
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
                <FaPlus />
              </Col>
              <Col xs={2}>
                <h6>1</h6>
              </Col>
              <Col xs={5}>
                <FaMinus />
              </Col>
            </Row>
          </styles.QuantityColumn>
          <styles.PriceColumn>
            Rp.
            {numeral(200000000000).format(0, 0).toString().replace(",", ".")}
            ,-
          </styles.PriceColumn>
          <th className="text-center">
            <Button>
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
