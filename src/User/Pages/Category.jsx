import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";

import NavBarComponent from "../Components/NavBar/index";
import CardComponent from "../Components/Card/index";

export class Category extends Component {
  render() {
    const category = this.props.category;
    return (
      <>
        <NavBarComponent profilePicture="" />

        <Container className="mt-5">
          <Row>
            {!category.isLoading &&
              !category.isError &&
              category.data.length !== 0 &&
              category.data.map((item) => (
                <Col xs={6} sm={6} md={4} lg={3} className="mb-4">
                  <CardComponent
                    storeName="Store Name"
                    productsName={item.name}
                    productsPrice={item.price}
                    productsRatings={item.rating}
                    productsImages={
                      category.imagesPrimary.map((i) =>
                        i.id_product === item.id ? i.URL_image : ""
                      )[0]
                    }
                  />
                </Col>
              ))}
            {category.isLoading &&
              !category.isError &&
              [...Array(8)].map((item) => (
                <Col xs={6} sm={6} md={4} lg={3} className="mb-4">
                  <CardComponent
                    storeName="Loading..."
                    productsName="Loading..."
                    productsPrice="Loading..."
                    productsRatings="Loading..."
                  />
                </Col>
              ))}
            {category.isError && category.alertMsg !== "" && (
              <Col xs={12} sm={12} md={12} lg={12} className="mb-4">
                <div>{category.alertMsg}</div>
              </Col>
            )}
          </Row>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  category: state.productsCategory,
});

export default connect(mapStateToProps, null)(Category);
