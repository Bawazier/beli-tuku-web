import React from "react";
import styled from "styled-components";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardTitle,
  CardText,
  CardBody,
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
  return (
    <styles.Body>
      <Navigation />
      <styles.Container>
        <Row>
          <Col xs={3}>
            <Row>
              <Col xs={4} className="pr-0 mr-0">
                <styles.Img
                  src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                  alt="Card image cap"
                />
              </Col>
              <Col xs={8}>
                <h5>Johanes Mikael</h5>
                <h6 className="text-muted">
                  <FaEdit /> Edit Profile
                </h6>
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
                  <Col xs={9}>
                    <Button color="link">My Account</Button>
                  </Col>
                </Row>
              </styles.Section>
              <styles.Section>
                <Row>
                  <Col xs={3}>
                    <styles.FaMapMarkerAlt />
                  </Col>
                  <Col xs={9}>
                    <Button color="link">Shipping Address</Button>
                  </Col>
                </Row>
              </styles.Section>
              <styles.Section>
                <Row>
                  <Col xs={3}>
                    <styles.FaWpforms />
                  </Col>
                  <Col xs={9}>
                    <Button color="link">My Order</Button>
                  </Col>
                </Row>
              </styles.Section>
              <styles.Section>
                <Row>
                  <Col xs={3}>
                    <styles.FaRegCreditCard />
                  </Col>
                  <Col xs={9}>
                    <Button color="link">Topup Credit</Button>
                  </Col>
                </Row>
              </styles.Section>
              <styles.Section>
                <Row>
                  <Col xs={3}>
                    <styles.FaSignOutAlt />
                  </Col>
                  <Col xs={9}>
                    <Button color="link">Sign Out</Button>
                  </Col>
                </Row>
              </styles.Section>
            </styles.SectionTitle>
          </Col>
          <Col xs={9}>
            <Card body>
              <CardTitle tag="h5" className="font-weight-bold">
                My Profile
              </CardTitle>
              <CardText className="text-muted border-bottom">
                Manage your profile information
              </CardText>
              <CardBody>
                {/* <FormProfile /> */}
                {/* <styles.ButtonAddress>Add new address</styles.ButtonAddress>
                <CardAddress /> */}
                {/* <FormAddress /> */}
                {/* <CardOrder /> */}
                <CardTopup />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </styles.Container>
    </styles.Body>
  );
};

const styles = {
  Body: styled.body`
    background-color: #c8d1da;
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
    width: 100%;
    height: 100%;
    color: #102939;
  `,

  FaMapMarkerAlt: styled(FaMapMarkerAlt)`
    width: 100%;
    height: 100%;
    color: #102939;
  `,
  FaWpforms: styled(FaWpforms)`
    width: 100%;
    height: 100%;
    color: #102939;
  `,

  FaRegCreditCard: styled(FaRegCreditCard)`
    width: 100%;
    height: 100%;
    color: #102939;
  `,

  FaSignOutAlt: styled(FaSignOutAlt)`
    width: 100%;
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
