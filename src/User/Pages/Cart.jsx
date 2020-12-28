import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled, {createGlobalStyle} from "styled-components";
import { Container, Row, Col, Button } from "reactstrap";
import numeral from "numeral";

//Components
import TableCart from "../Components/TableCart";
import Navigation from "../Components/Navigation";

//Actions
import transactionActions from '../Redux/actions/transaction';

const Cart = () => {
  const {
    dataListCart,
    isListCartError,
    isListCartLoading,
  } = useSelector((state) => state.cart);
  const quantityCounter = useSelector((state) => state.quantityCounter);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(transactionActions.listCart(auth.token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkout = async () => {
      await dataListCart.map(async (item) => {
        dispatch(
          transactionActions.checkoutCart(
            auth.token,
            item.id,
            item.quantity
          )
        );
      });
    dispatch(transactionActions.parsingDataCart());
    history.push("/checkout");
    dispatch(transactionActions.listCart(auth.token));
  };
  return (
    <>
      <Navigation />
      <styles.GlobalStyle />
      <styles.Container>
        <Row>
          <Col xs={8}>
            <styles.SectionTitle>
              <h2>Items in my cart</h2>
            </styles.SectionTitle>
            <styles.Section>
              <TableCart />
            </styles.Section>
          </Col>
          <Col xs={4}>
            <styles.SectionTitle>
              <h2>Summary</h2>
            </styles.SectionTitle>
            <styles.Section>
              <Row className="align-items-center justify-content-between">
                <Col>
                  <h6 className="text-muted">SUBTOTAL</h6>
                </Col>
                <Col>
                  <h6>
                    Rp.
                    {numeral(quantityCounter.totalAmount)
                      .format(0, 0)
                      .toString()
                      .replace(",", ".")}
                    ,-
                  </h6>
                </Col>
              </Row>
              <Row className="align-items-center justify-content-between">
                <Col>
                  <h6 className="text-muted">SHIPPING EST</h6>
                </Col>
                <Col>
                  <h6>
                    Rp.
                    {numeral(20000).format(0, 0).toString().replace(",", ".")}
                    ,-
                  </h6>
                </Col>
              </Row>
            </styles.Section>
            <styles.Section>
              <Row className="align-items-center justify-content-between">
                <Col>
                  <h6 className="text-muted">TOTAL PRICE</h6>
                </Col>
                <Col>
                  <h6>
                    Rp.
                    {numeral(quantityCounter.totalAmount + 20000)
                      .format(0, 0)
                      .toString()
                      .replace(",", ".")}
                    ,-
                  </h6>
                </Col>
              </Row>
            </styles.Section>
            <styles.Section>
              {!isListCartLoading && (
                <Button
                  color="warning"
                  disabled={isListCartError}
                  className="font-weight-bold text-white"
                  onClick={checkout}
                >
                  PROCEED TO CHECKOUT
                </Button>
              )}
            </styles.Section>
          </Col>
        </Row>
      </styles.Container>
    </>
  );
};

const styles = {
  GlobalStyle: createGlobalStyle`
    body {
      background-color: #c8d1da;
      margin:0;
      padding:0;
      line-height: 1.5em;
      height: 100%;
      width: 100%;
    }
  `,

  Container: styled(Container)`
    width: 80%;
    padding: 40px 0;
  `,
  Section: styled.div`
    margin: 10px 0;
  `,

  SectionTitle: styled.div`
    margin: 20px 0;
  `,
};

export default Cart;
