import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import NavBarComponent from "../Components/NavBar/index";
import CategoryComponent from "../Components/Category/index";
import CardComponent from "../Components/Card/index";
import ThumbnailsComponent from "../Components/Thumbnails/index";

import CategoryApi from "../API/category.json";
import ProductsApi from "../API/products.json";

export class Home extends Component {
  render() {
    return (
      <>
        <NavBarComponent />
        <Container>
          <ThumbnailsComponent
            header="Category"
            secondary="What are you currently looking for"
          />
          <Row>
            {CategoryApi.map((item) => (
              <Col xs={6} sm={6} md={4} lg={3} className="mb-4">
                <CategoryComponent
                  colors={item.colors}
                  categoryName={item.name}
                  categoryImage={item.picture}
                />
              </Col>
            ))}
          </Row>
        </Container>

        <Container>
          <ThumbnailsComponent
            header="New"
            secondary="You’ve never seen it before!"
          />
          <Row>
            {ProductsApi.respone.map((item) => (
              <Col xs={6} sm={6} md={4} lg={3} className="mb-4">
                <CardComponent
                  storeName="Store Name"
                  productsName={item.name}
                  productsPrice={item.price}
                  productsRatings={item.rating}
                />
              </Col>
            ))}
          </Row>
        </Container>

        <Container>
          <ThumbnailsComponent
            header="Populer"
            secondary="Find clothes that are trending recently"
          />
          <Row>
            {ProductsApi.respone.map((item) => (
              <Col xs={6} sm={6} md={4} lg={3} className="mb-4">
                <CardComponent
                  storeName="Store Name"
                  productsName={item.name}
                  productsPrice={item.price}
                  productsRatings={item.rating}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default Home;
