import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { Table, Button, Row, Col } from "reactstrap";
import { FaWindowClose, FaPlus, FaMinus } from "react-icons/fa";
import numeral from "numeral";

//Actions
import transactionActions from '../Redux/actions/transaction';

const TableCart = (props) => {
  const { REACT_APP_API_URL } = process.env;
  const {
    dataListCart,
    pageInfo,
    isListCartError,
    isListCartLoading,
  } = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    setData(dataListCart)
  }, [dataListCart]);

  const handleDelete = async (idCart) => {
    await dispatch(transactionActions.deleteCart(auth.token, idCart));
    dispatch(transactionActions.listCart(auth.token));
  };

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
        {!isListCartLoading &&
          !isListCartError &&
          dataListCart.map((item, index) => {
            return (
              <tr>
                <styles.ItemColumn>
                  <Row>
                    <Col xs={4} className="pr-0 mr-0">
                      <styles.Img
                        src={
                          item.DetailProduct.ProductImage.picture
                            ? REACT_APP_API_URL +
                              "/" +
                              item.DetailProduct.ProductImage.picture
                            : require("../Assets/Images/PrimaryImage.png")
                        }
                        alt="Card image cap"
                      />
                    </Col>
                    <Col xs={8}>
                      <h5>{item.DetailProduct.Product.name || ""}</h5>
                    </Col>
                  </Row>
                </styles.ItemColumn>
                <styles.QuantityColumn className="text-center">
                  <Row className="align-items-center justify-content-center">
                    <Col xs={4}>
                      <Button color="danger" className="w-10 text-center">
                        <FaMinus />
                      </Button>
                    </Col>
                    <Col xs={3}>
                      <h4 className="w-100 text-center">
                        {item.quantity}
                      </h4>
                    </Col>
                    <Col xs={4}>
                      <Button color="danger" className="w-100 text-center">
                        <FaPlus />
                      </Button>
                    </Col>
                  </Row>
                </styles.QuantityColumn>
                <styles.PriceColumn>
                  Rp.
                  {numeral(item.totalPrice)
                    .format(0, 0)
                    .toString()
                    .replace(",", ".")}
                  ,-
                </styles.PriceColumn>
                <th className="text-center">
                  <Button color="danger" onClick={() => handleDelete(item.id)}>
                    <FaWindowClose />
                  </Button>
                </th>
              </tr>
            );})}
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
