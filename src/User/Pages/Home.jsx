import React from "react";
import styled from "styled-components";
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Input,
  UncontrolledCarousel,
} from "reactstrap";

//Components
import Navigation from "../Components/Navigation";
import CardProduct from "../Components/CardProduct";

const Home = () => {

  const items = [
    {
      src:
        "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    },
    {
      src:
        "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    },
    {
      src:
        "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    },
  ];

  return (
    <styles.Body>
      <Navigation />
      <styles.Container>
        <styles.ContainerRow>
          <Col xs={3} className="pl-0 ml-0">
            <styles.List>
              <ListGroup>
                <styles.Item action>All Categories</styles.Item>
                <ListGroupItem>T-Shirt</ListGroupItem>
                <ListGroupItem>Short</ListGroupItem>
                <ListGroupItem>Accessories</ListGroupItem>
                <ListGroupItem>Shirt</ListGroupItem>
              </ListGroup>
            </styles.List>
            <styles.SearchInput
              className="border"
              type="text"
              name="search"
              id="search"
              placeholder="Search Categories"
            />
          </Col>
          <Col xs={9}>
            <UncontrolledCarousel items={items} />
          </Col>
        </styles.ContainerRow>
        <styles.SectionRow>
          <Col xs={2} className="pl-0 ml-0">
            <styles.Secion>NEW PRODUCTS</styles.Secion>
          </Col>
          <Col xs={1} className="p-0 m-0">
            <styles.Link src="#">View All</styles.Link>
          </Col>
        </styles.SectionRow>
        <Row>
          {[...Array(10)].map((item) => (
            <Col className="mb-3">
              <CardProduct />
            </Col>
          ))}
        </Row>
        <styles.SectionRow>
          <Col xs={3} className="p-0 m-0">
            <styles.Secion>POPULAR PRODUCTS</styles.Secion>
          </Col>
          <Col xs={1} className="p-0 m-0">
            <styles.Link src="#">View All</styles.Link>
          </Col>
        </styles.SectionRow>
        <Row>
          {[...Array(10)].map((item) => (
            <Col className="mb-3">
              <CardProduct />
            </Col>
          ))}
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
  `,

  ContainerRow: styled(Row)`
    align-items: center;
    margin: 20px 0 0 0;
  `,

  List: styled.div`
    width: 100%;
    height: 350px;
    background-color: #fff;
  `,

  Item: styled(ListGroupItem)`
    background-color: #1bc29b;
    color: #fff;
  `,

  SearchInput: styled(Input)`
    width: 100%;
    border-radius: 0;
    border: 0;
  `,

  SectionRow: styled(Row)`
    width: auto;
    padding: 0;
    margin: 40px 0 10px 0;
    border-bottom: 1px solid #102939;
    justify-content: space-between;
    align-items: center;
  `,

  Secion: styled.div`
    width: auto;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #102939;
    color: #fff;
  `,

  Link: styled.a`
    color: #1bc29b;
    align-self: flex-end;
  `,
};

export default Home;
