import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { Table, Button, Row, Col } from "reactstrap";
import { FaWindowClose, FaPlus, FaMinus } from "react-icons/fa";
import numeral from "numeral";

//Actions
import transactionActions from '../Redux/actions/transaction';

const TableCart = (props) => {
  const {
    dataListCart,
    isListCartError,
    isListCartLoading,
  } = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleDelete = async (idCart) => {
    await dispatch(transactionActions.deleteCart(auth.token, idCart));
    await dispatch(transactionActions.deleteDataCart(idCart));
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
          dataListCart.map((item, index) => (
            <BodyTable
              index={index}
              idCart={item.id}
              picture={item.DetailProduct.ProductImage.picture}
              name={item.DetailProduct.Product.name}
              price={item.DetailProduct.Product.price}
              quantity={item.quantity}
              totalPrice={item.totalPrice}
              handleDelete={() => handleDelete(item.id)}
              stock={item.DetailProduct.Product.stock}
            />
          ))}
      </tbody>
    </Table>
  );
};

const BodyTable = (props) => {
  const { REACT_APP_API_URL } = process.env;
  const quantityCounter = useSelector((state) => state.quantityCounter);
  const [quantity, setQuantity] = useState(props.quantity);
  const dispatch = useDispatch();
  const price = props.price * quantity;

  useEffect(() => {
    console.log(props.index);
    if(props.index === 0){
      dispatch(transactionActions.returnDataCart());
    }
    dispatch(
      transactionActions.dataCart(props.idCart, {
        id: props.idCart,
        content: {
          quantity: props.quantity,
          price: props.price * props.quantity,
        },
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const increment = async () => {
    if (quantity < props.stock) {
      await setQuantity(quantity + 1);
      dispatch(
        transactionActions.increment(props.idCart, {
          content: {
            quantity: quantityCounter.data[props.idCart].content.quantity + 1,
            price: props.price + quantityCounter.data[props.idCart].content.price,
          },
        })
      );
    }
  };

  const decrement = async () => {
    if (quantity > 1) {
      await setQuantity(quantity - 1);
      console.log(props.totalPrice)
      dispatch(
        transactionActions.decrement(props.idCart, {
          content: {
            quantity: quantityCounter.data[props.idCart].content.quantity - 1,
            price: quantityCounter.data[props.idCart].content.price - props.price,
          },
        })
      );
    }
  };

  return (
    <tr>
      <styles.ItemColumn>
        <Row>
          <Col xs={4} className="pr-0 mr-0">
            <styles.Img
              src={
                props.picture
                  ? REACT_APP_API_URL + "/" + props.picture
                  : require("../Assets/Images/PrimaryImage.png")
              }
              alt="Card image cap"
            />
          </Col>
          <Col xs={8}>
            <h5>{props.name || ""}</h5>
          </Col>
        </Row>
      </styles.ItemColumn>
      <styles.QuantityColumn className="text-center">
        <Row className="align-items-center justify-content-center">
          <Col xs={4}>
            <Button
              color="danger"
              className="w-10 text-center"
              onClick={decrement}
            >
              <FaMinus />
            </Button>
          </Col>
          <Col xs={3}>
            <h4 className="w-100 text-center">
              {quantityCounter.data &&
                quantityCounter.data[props.idCart] &&
                quantityCounter.data[props.idCart].content.quantity}
            </h4>
          </Col>
          <Col xs={4}>
            <Button
              color="danger"
              className="w-100 text-center"
              onClick={increment}
            >
              <FaPlus />
            </Button>
          </Col>
        </Row>
      </styles.QuantityColumn>
      <styles.PriceColumn>
        Rp.
        {numeral(quantityCounter.data &&
            quantityCounter.data[props.idCart] &&
            quantityCounter.data[props.idCart].content.price)
          .format(0, 0)
          .toString()
          .replace(",", ".")}
        ,-
      </styles.PriceColumn>
      <th className="text-center">
        <Button color="danger" onClick={props.handleDelete}>
          <FaWindowClose />
        </Button>
      </th>
    </tr>
  );
}

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
