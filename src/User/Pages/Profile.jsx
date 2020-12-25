import React, {useState} from "react";
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
import {
  FaEdit,
  FaUserCircle,
  FaMapMarkerAlt,
  FaWpforms,
  FaRegCreditCard,
  FaSignOutAlt,
} from "react-icons/fa";

//Components
import FormProfile from "../Components/FormProfile";
import Navigation from "../Components/Navigation";
import CardAddress from "../Components/CardAddress";
import FormAddress from "../Components/FormAddress";
import CardOrder from "../Components/CardOrder";
import CardTopup from "../Components/CardTopup";

const Profile = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(true);
  const [isAddressOpen, setIsAddressOpen] = useState(false);
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [isTopupOpen, setIsTopupOpen] = useState(false);
  const [changeAddressOpen, setChangeAddressOpen] = useState(false);
  const [addAddressOpen, setAddAddressOpen] = useState(false);

  const toggleProfileOpen = async () => {
    await setIsAddressOpen(false);
    await setIsOrderOpen(false);
    await setIsTopupOpen(false);
    setIsProfileOpen(!isProfileOpen);
  };
  const toggleAddressOpen = async () => {
    await setIsProfileOpen(false);
    await setIsOrderOpen(false);
    await setIsTopupOpen(false);
    setIsAddressOpen(!isAddressOpen);
  };
  const toggleOrderOpen = async () => {
    await setIsProfileOpen(false);
    await setIsAddressOpen(false);
    await setIsTopupOpen(false);
    setIsOrderOpen(!isOrderOpen);
  };
  const toggleTopupOpen = async () => {
    await setIsProfileOpen(false);
    await setIsAddressOpen(false);
    await setIsOrderOpen(false);
    setIsTopupOpen(!isTopupOpen);
  };
  const toggleAddAddress = async () => {
    setAddAddressOpen(!addAddressOpen);
  };
  const toggleChangeAddress = async () => {
    setChangeAddressOpen(!changeAddressOpen);
  };
  return (
    <>
      <Navigation />
      <styles.GlobalStyle />
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
          <Col xs={3}>
            <Row>
              <Col xs={4} className="pr-0 mr-0">
                <styles.Img
                  src={require("../Assets/Images/PrimaryImage.png")}
                  alt="Card image cap"
                />
              </Col>
              <Col xs={8}>
                <h5>Johanes Mikael</h5>
                <h6 className="text-muted">
                  Credit: Rp.
                  {numeral(2000000).format(0, 0).toString().replace(",", ".")}
                  ,-
                </h6>
              </Col>
            </Row>
            <styles.SectionTitle>
              <styles.Section>
                <Row>
                  <Col xs={3}>
                    <styles.FaUserCircle />
                  </Col>
                  <Col xs={9} className="p-0 m-0">
                    <Button
                      color="link"
                      disabled={isProfileOpen}
                      onClick={toggleProfileOpen}
                    >
                      My Account
                    </Button>
                  </Col>
                </Row>
              </styles.Section>
              <styles.Section>
                <Row>
                  <Col xs={3}>
                    <styles.FaMapMarkerAlt />
                  </Col>
                  <Col xs={9} className="p-0 m-0">
                    <Button
                      color="link"
                      disabled={isAddressOpen}
                      onClick={toggleAddressOpen}
                    >
                      Shipping Address
                    </Button>
                  </Col>
                </Row>
              </styles.Section>
              <styles.Section>
                <Row>
                  <Col xs={3}>
                    <styles.FaWpforms />
                  </Col>
                  <Col xs={9} className="p-0 m-0">
                    <Button
                      color="link"
                      disabled={isOrderOpen}
                      onClick={toggleOrderOpen}
                    >
                      My Order
                    </Button>
                  </Col>
                </Row>
              </styles.Section>
              <styles.Section>
                <Row>
                  <Col xs={3}>
                    <styles.FaRegCreditCard />
                  </Col>
                  <Col xs={9} className="p-0 m-0">
                    <Button
                      color="link"
                      disabled={isTopupOpen}
                      onClick={toggleTopupOpen}
                    >
                      Topup Credit
                    </Button>
                  </Col>
                </Row>
              </styles.Section>
              <styles.Section>
                <Row>
                  <Col xs={3}>
                    <styles.FaSignOutAlt />
                  </Col>
                  <Col xs={9} className="p-0 m-0">
                    <Button color="link">Sign Out</Button>
                  </Col>
                </Row>
              </styles.Section>
            </styles.SectionTitle>
          </Col>
          <Col xs={9}>
            {isProfileOpen && (
              <Card body>
                <CardTitle tag="h5" className="font-weight-bold">
                  My Profile
                </CardTitle>
                <CardText className="text-muted border-bottom">
                  Manage your profile information
                </CardText>
                <CardBody>
                  <FormProfile />
                </CardBody>
              </Card>
            )}
            {isAddressOpen && (
              <Card body>
                <CardTitle tag="h5" className="font-weight-bold">
                  Choose another address
                </CardTitle>
                <CardText className="text-muted border-bottom">
                  Manage your shipping address
                </CardText>
                <CardBody>
                  <styles.ButtonAddress onClick={toggleAddAddress}>
                    Add new address
                  </styles.ButtonAddress>
                  <CardAddress onChange={toggleChangeAddress} />
                </CardBody>
              </Card>
            )}
            {isOrderOpen && (
              <Card body>
                <CardTitle tag="h5" className="font-weight-bold">
                  My Order
                </CardTitle>
                <CardText className="text-muted border-bottom">&nbsp;</CardText>
                <CardBody>
                  <CardOrder />
                </CardBody>
              </Card>
            )}
            {isTopupOpen && (
              <Card body>
                <CardTitle tag="h5" className="font-weight-bold">
                  Top Up
                </CardTitle>
                <CardText className="text-muted border-bottom">
                  Charge your credit saldo
                </CardText>
                <CardBody>
                  <CardTopup />
                </CardBody>
              </Card>
            )}
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
    margin: 20px 0;
  `,

  SectionTitle: styled.div`
    margin: 40px 0;
  `,

  Img: styled.img`
    width: 100%;
    height: 80px;
    border-radius: 100%;
  `,

  FaUserCircle: styled(FaUserCircle)`
    width: 80%;
    height: 100%;
    color: #102939;
  `,

  FaMapMarkerAlt: styled(FaMapMarkerAlt)`
    width: 80%;
    height: 100%;
    color: #102939;
  `,
  FaWpforms: styled(FaWpforms)`
    width: 80%;
    height: 100%;
    color: #102939;
  `,

  FaRegCreditCard: styled(FaRegCreditCard)`
    width: 80%;
    height: 100%;
    color: #102939;
  `,

  FaSignOutAlt: styled(FaSignOutAlt)`
    width: 80%;
    height: 100%;
    color: #102939;
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

export default Profile;
