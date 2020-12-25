import React, { useState } from "react";
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
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";
import numeral from "numeral";

//Components
import Navigation from "../Components/Navigation";
import CardAddress from "../Components/CardAddress";
import FormAddress from "../Components/FormAddress";

const Checkout = () => {
  const [addressOpen, setAddressOpen] = useState(false);
  const [changeAddressOpen, setChangeAddressOpen] = useState(false);
  const [addAddressOpen, setAddAddressOpen] = useState(false);

  const toggle = () => setAddressOpen(!addressOpen);
  const toggleAddAddress = async () => {
    await setAddressOpen(!addressOpen);
    setAddAddressOpen(!addAddressOpen);
  };
  const toggleChangeAddress = async () => {
    await setAddressOpen(!addressOpen);
    setChangeAddressOpen(!changeAddressOpen);
  };

  return (
    <>
      <Navigation />
      <styles.GlobalStyle />
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
              <CardAddress onChange={toggleChangeAddress} />
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
              <FormAddress />
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
              <FormAddress />
            </CardBody>
          </Card>
        </ModalBody>
      </Modal>
      <styles.Container>
        <Row>
          <Col xs={8}>
            <styles.SectionTitle>
              <h2>Checkout</h2>
            </styles.SectionTitle>
            <styles.Section>
              <h5>Shipping Address</h5>
              <Card body>
                <CardTitle tag="h5">Andreas Jane</CardTitle>
                <CardText>
                  Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja,
                  Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c
                  16] Sokaraja, Kab. Banyumas, 53181
                </CardText>
                <Button onClick={toggle}>Choose another address</Button>
              </Card>
            </styles.Section>
            <styles.Section>
              <Card body>
                <Row className="align-items-center justify-content-between">
                  <Col xs={8}>
                    <Row>
                      <Col xs={4} className="pr-0 mr-0">
                        <styles.Img
                          src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                          alt="Card image cap"
                        />
                      </Col>
                      <Col xs={8}>
                        <h5>Product Name lorem ipsum bal bla abalbals</h5>
                        <h6 className="text-muted">Store name</h6>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={4}>
                    <h6 className="text-right font-weight-bold">
                      Rp.
                      {numeral(200000000000)
                        .format(0, 0)
                        .toString()
                        .replace(",", ".")}
                      ,-
                    </h6>
                  </Col>
                </Row>
              </Card>
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
                    {numeral(2000000).format(0, 0).toString().replace(",", ".")}
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
                    {numeral(220000).format(0, 0).toString().replace(",", ".")}
                    ,-
                  </h6>
                </Col>
              </Row>
            </styles.Section>
            <styles.Section>
              <Row>
                <Col>
                  <Button>SELECT PAYMENT</Button>
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
                    {numeral(220000).format(0, 0).toString().replace(",", ".")}
                    ,-
                  </h6>
                </Col>
              </Row>
            </styles.SectionTitle>
            <styles.Section>
              <Row>
                <Col>
                  <Button>BUY BY CREDIT</Button>
                </Col>
                <Col>
                  <Button>TOPUP</Button>
                </Col>
              </Row>
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

  Img: styled.img`
    width: 100%;
    height: 100%;
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
};

export default Checkout;
