import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";

import NavBarComponent from "../Components/NavBar/index";
import CategoryComponent from "../Components/Category/index";
import CardComponent from "../Components/Card/index";
import ThumbnailsComponent from "../Components/Thumbnails/index";

import CategoryApi from "../API/category.json";
import ProductsActions from "../Redux/actions/home";

export class Home extends Component {
  componentDidMount() {
    this.props.productsNew();
    this.props.productsPopuler();
  }
  render() {
    const {
      isLoading,
      data,
      imagesPrimary,
      isError,
      alertMsg,
    } = this.props.new;
    const populer = this.props.populer;
    return (
      <>
        <NavBarComponent isLogin={false} profilePicture="" />
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
            {!isLoading &&
              !isError &&
              data.length !== 0 &&
              data.map((item) => (
                <Col xs={6} sm={6} md={4} lg={3} className="mb-4">
                  <CardComponent
                    storeName="Store Name"
                    productsName={item.name}
                    productsPrice={item.price}
                    productsRatings={item.rating}
                    productsImages={imagesPrimary.map((i) =>
                      i.id_product === item.id ? i.URL_image : ""
                    )}
                  />
                </Col>
              ))}
            {isLoading &&
              !isError &&
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
            {isError && alertMsg !== "" && (
              <Col xs={12} sm={12} md={12} lg={12} className="mb-4">
                <div>{alertMsg}</div>
              </Col>
            )}
          </Row>
        </Container>

        <Container>
          <ThumbnailsComponent
            header="Populer"
            secondary="Find clothes that are trending recently"
          />
          <Row>
            {!populer.isLoading &&
              !populer.isError &&
              populer.data.length !== 0 &&
              populer.data.map((item) => (
                <Col xs={6} sm={6} md={4} lg={3} className="mb-4">
                  <CardComponent
                    storeName="Store Name"
                    productsName={item.name}
                    productsPrice={item.price}
                    productsRatings={item.rating}
                    productsImages={imagesPrimary.map((i) =>
                      i.id_product === item.id ? i.URL_image : ""
                    )}
                  />
                </Col>
              ))}
          </Row>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  new: state.productsNew,
  populer: state.productsPopuler,
});

const mapDispatchToProps = {
  productsNew: ProductsActions.new,
  productsPopuler: ProductsActions.populer,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
