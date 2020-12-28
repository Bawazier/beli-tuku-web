import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardTitle,
  CardText,
  CardBody,
  Spinner,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from "reactstrap";
import numeral from "numeral";

//Components
import Navigation from "../Components/Navigation";
import CardAddress from "../Components/CardAddress";
import FormAddress from "../Components/FormAddress";
import CardTopup from "../Components/CardTopup";

//Actions
import transactionActions from "../Redux/actions/transaction";
import addressActions from "../Redux/actions/address";
import accountActions from "../Redux/actions/account";

const Checkout = () => {
  const { REACT_APP_API_URL } = process.env;
  const [addressOpen, setAddressOpen] = useState(false);
  const [changeAddressOpen, setChangeAddressOpen] = useState(false);
  const [addAddressOpen, setAddAddressOpen] = useState(false);
  const [isTopupOpen, setIsTopupOpen] = useState(false);
  const auth = useSelector((state) => state.auth);
  const {
    dataListCartOut,
    isCheckoutError,
    isCheckoutLoading,
    totalAmount,
  } = useSelector((state) => state.cart);
  const orders = useSelector((state) => state.order);
  const address = useSelector(
    (state) => state.address
  );
  const {
    dataList,
    isLoading,
    isTopupCreditLoading,
    isListTopupError,
    isTopupCreditError,
  } = useSelector((state) => state.topup);
  const { data } = useSelector((state) => state.account);
  const [order, setOrder] = useState(false);
  const [success, setSuccess] = useState(false);
  const quantityCounter = useSelector((state) => state.quantityCounter);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(accountActions.getAccount(auth.token));
    dispatch(addressActions.listAddress(auth.token));
    dispatch(transactionActions.listCheckoutCart(auth.token));
    dispatch(transactionActions.listTopup(auth.token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const discardCheckout = async () => {
    setOrder(false);
    await dispatch(transactionActions.discardCheckoutCart(auth.token));
    await dispatch(transactionActions.returnDataCart());
    history.goBack();
  };

  const submitOrder = async () => {
    if (data.Credit.saldo >= quantityCounter.exTotalAmount + 20000) {
      await dispatch(transactionActions.orderByCredit(auth.token));
      setSuccess(!success);
      dispatch(transactionActions.clearDataCart());
    } else {
      setOrder(!order);
    }
  };

  const topup = async (id) => {
    await dispatch(transactionActions.topupCredit(auth.token, id));
    dispatch(accountActions.getAccount(auth.token));
    toggleTopupOpen();
  };

  const toggle = () => setAddressOpen(!addressOpen);
  const toggleAddAddress = async () => {
    await setAddressOpen(!addressOpen);
    setAddAddressOpen(!addAddressOpen);
  };
  const toggleChangeAddress = async () => {
    await setAddressOpen(!addressOpen);
    setChangeAddressOpen(!changeAddressOpen);
  };
  const toggleTopupOpen = () => setIsTopupOpen(!isTopupOpen);

  return (
    <>
      <Navigation />
      <styles.GlobalStyle />
      <Modal isOpen={isTopupOpen} toggle={toggleTopupOpen} size="lg">
        <ModalBody>
          <Card body>
            <ModalHeader toggle={toggleTopupOpen}>
              <CardTitle tag="h5" className="font-weight-bold text-center">
                Top Up
              </CardTitle>
            </ModalHeader>
            <CardBody>
              <Row>
                {!isLoading &&
                  !isListTopupError &&
                  dataList.map((item) => (
                    <Col xs={12}>
                      <CardTopup
                        charge={item.charge}
                        topup={() => topup(item.id)}
                      />
                    </Col>
                  ))}
              </Row>
            </CardBody>
          </Card>
        </ModalBody>
      </Modal>
      <Modal isOpen={addressOpen} toggle={toggle} size="lg">
        <ModalBody>
          <Card body>
            <ModalHeader toggle={toggle}>
              <CardTitle tag="h5" className="font-weight-bold text-center">
                Choose another address
              </CardTitle>
            </ModalHeader>
            <CardBody>
              <styles.ButtonAddress onClick={toggleAddAddress}>
                Add new address
              </styles.ButtonAddress>
              {!address.isLoading &&
                !address.isListError &&
                address.dataList.map((item) => (
                  <CardAddress
                    onChange={async () => {
                      await dispatch(
                        addressActions.getAddress(auth.token, item.id)
                      );
                      toggleChangeAddress();
                    }}
                    name={item.name}
                    address={item.address}
                    region={item.region}
                    postalCode={item.postalCode}
                    isPrimary={item.isPrimary}
                  />
                ))}
            </CardBody>
          </Card>
        </ModalBody>
      </Modal>
      <Modal isOpen={addAddressOpen} toggle={toggleAddAddress} size="lg">
        <ModalBody>
          <Card body>
            <ModalHeader toggle={toggleAddAddress}>
              <CardTitle tag="h5" className="font-weight-bold text-center">
                Add new address
              </CardTitle>
            </ModalHeader>
            <CardBody>
              <FormAddress close={toggleAddAddress} />
            </CardBody>
          </Card>
        </ModalBody>
      </Modal>
      <Modal isOpen={changeAddressOpen} toggle={toggleChangeAddress} size="lg">
        <ModalBody>
          <Card body>
            <ModalHeader toggle={toggleChangeAddress}>
              <CardTitle tag="h5" className="font-weight-bold text-center">
                Change address
              </CardTitle>
            </ModalHeader>
            <CardBody>
              <FormAddress isUpdate={true} close={toggleChangeAddress} />
            </CardBody>
          </Card>
        </ModalBody>
      </Modal>
      <Modal isOpen={order} onClick={() => setOrder(!order)}>
        <ModalBody className="text-danger font-weight-bold text-center h5">
          Sorry you can't make a transaction because your balance is insufficient, please do a top up first
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => setOrder(!order)}>
            CLOSE
          </Button>
        </ModalFooter>
      </Modal>
        {orders.isLoading ? (
          <styles.Spinner
            style={{ top: '50%' }}
            type="grow"
          />
        ) : success ? (
          <Modal isOpen={success} toggle={() => setSuccess(!success)}>
            <ModalBody className="text-success font-weight-bold text-center h6">
              Your order will be delivered soon.
              Thank you for choosing our app!
          </ModalBody>
              <ModalFooter>
              <Button color="success" onClick={() => history.push("/")}>
                Continue shopping
            </Button>
              </ModalFooter>
            </Modal>
        ) : (
            <styles.Container>
              <Row>
                <Col xs={8}>
                  <styles.SectionTitle>
                    <h2>Checkout</h2>
                  </styles.SectionTitle>
                  <styles.Section>
                    <h5>Shipping Address</h5>
                    {!address.isLoading &&
                      !address.isListError &&
                      address.dataList.map((item) => {
                        if (item.isPrimary) {
                          return (
                            <Card body>
                              <CardTitle tag="h5">{item.name}</CardTitle>
                              <CardText>
                                {item.address}, {item.region}, {item.postalCode}
                              </CardText>
                              <Button
                                color="warning"
                                className="font-weight-bold text-white"
                                onClick={toggle}
                              >
                                Choose another address
                        </Button>
                            </Card>
                          );
                        }
                      })}
                    {!address.isLoading && address.isListError && (
                      <Card body>
                        <Button
                          color="danger"
                          className="font-weight-bold text-white"
                          onClick={toggle}
                        >
                          Choose another address
                  </Button>
                      </Card>
                    )}
                  </styles.Section>
                  <styles.Section>
                    {!isCheckoutLoading &&
                      !isCheckoutError &&
                      dataListCartOut.map((item, index) => (
                        <Card body className="mb-2">
                          <Row className="align-items-center justify-content-between">
                            <Col xs={8}>
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
                            </Col>
                            <Col xs={4}>
                              <h6 className="text-right font-weight-bold">
                                Rp.
                          {numeral(item.totalPrice * item.quantity)
                                  .format(0, 0)
                                  .toString()
                                  .replace(",", ".")}
                          ,-
                        </h6>
                            </Col>
                          </Row>
                        </Card>
                      ))}
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
                    {numeral(quantityCounter.exTotalAmount)
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
                    {numeral(quantityCounter.exTotalAmount + 20000)
                            .format(0, 0)
                            .toString()
                            .replace(",", ".")}
                    ,-
                  </h6>
                      </Col>
                    </Row>
                  </styles.Section>
                  <styles.Section>
                    <Row>
                      <Col>
                        <Button disabled>SELECT PAYMENT</Button>
                      </Col>
                    </Row>
                  </styles.Section>
                  <styles.SectionTitle>
                    <h5>Credit</h5>
                    <Row className="align-items-center justify-content-between">
                      <Col>
                        <h6 className="text-muted">TOTAL CREDIT</h6>
                      </Col>
                      <Col>
                        <h6>
                          Rp.
                    {numeral((data.Credit && data.Credit.saldo) || 0)
                            .format(0, 0)
                            .toString()
                            .replace(",", ".")}
                    ,-
                  </h6>
                      </Col>
                    </Row>
                  </styles.SectionTitle>
                  {!isCheckoutLoading && !isCheckoutError && (
                    <styles.Section>
                      <Row>
                        <Col>
                          <Button
                            block
                            outline
                            color="warning"
                            className="font-weight-bold"
                            onClick={toggleTopupOpen}
                          >
                            TOPUP
                    </Button>
                        </Col>
                        <Col>
                          <Button
                            block
                            outline
                            color="warning"
                            onClick={discardCheckout}
                            className="font-weight-bold"
                          >
                            DISCARD
                    </Button>
                        </Col>
                      </Row>
                      <Row className="mt-2">
                        <Col xs={12}>
                          <Button
                            block
                            color="warning"
                            className="font-weight-bold text-white"
                            onClick={submitOrder}
                          >
                            SUBMIT ORDER
                    </Button>
                        </Col>
                      </Row>
                    </styles.Section>
                  )}
                </Col>
              </Row>
      </styles.Container>
        )}
        
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

  Img: styled.img`
    width: 100%;
    height: 80px;
  `,
  ButtonAddress: styled(Button)`
    width: 100%;
    padding: 20px;
    margin-bottom: 10px;
    background-color: transparent;
    border: 1px dashed black;
    color: gray;
    font-size: 24px;
  `,

  Spinner: styled(Spinner)`
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    z-index: 2;
    width: 5rem;
    height: 5rem;
    color: #1bc29b;
  `,
};

export default Checkout;
