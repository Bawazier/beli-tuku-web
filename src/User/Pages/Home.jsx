import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";

import NavBarComponent from "../Components/NavBar/index";
import CategoryComponent from "../Components/Category/index";
import CardComponent from "../Components/Card/index";
import ThumbnailsComponent from "../Components/Thumbnails/index";

import HomeActions from "../Redux/actions/home";

export class Home extends Component {

  componentDidMount() {
    this.props.productsNew();
    this.props.productsPopuler();
    this.props.findCategories();
  }
  render() {
    const news = this.props.new;
    const populer = this.props.populer;
    const categories = this.props.categories;
    return (
      <>
        <NavBarComponent
        onClick={this.search}
        onChange={this.handleInputChange}
        search={this.state.search}
          profilePicture=""
        />
        <Container>
          <ThumbnailsComponent
            header="Category"
            secondary="What are you currently looking for"
          />
          <Row>
            {!categories.isLoading &&
              !categories.isError &&
              categories.data.length !== 0 &&
              categories.data.map((item) => (
                <Col xs={6} sm={6} md={4} lg={3} className="mb-4">
                  <CategoryComponent
                    colors={item.color}
                    categoryName={item.name}
                    categoryImage={item.picture !== null ? item.URL_image : ""}
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
            {!news.isLoading &&
              !news.isError &&
              news.data.length !== 0 &&
              news.data.map((item) => (
                <Col xs={6} sm={6} md={4} lg={3} className="mb-4">
                  <CardComponent
                    storeName="Store Name"
                    productsName={item.name}
                    productsPrice={item.price}
                    productsRatings={item.rating}
                    productsImages={news.imagesPrimary.map((i) =>
                      i.id_product === item.id ? i.URL_image : ""
                    )[0]}
                  />
                </Col>
              ))}
            {news.isLoading &&
              !news.isError &&
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
            {news.isError && news.alertMsg !== "" && (
              <Col xs={12} sm={12} md={12} lg={12} className="mb-4">
                <div>{news.alertMsg}</div>
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
                    productsImages={populer.imagesPrimary.map((i) =>
                      i.id_product === item.id ? i.URL_image : ""
                    )[0]}
                  />
                </Col>
              ))}
            {populer.isLoading &&
              !populer.isError &&
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
            {populer.isError && populer.alertMsg !== "" && (
              <Col xs={12} sm={12} md={12} lg={12} className="mb-4">
                <div>{populer.alertMsg}</div>
              </Col>
            )}
          </Row>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  new: state.productsNew,
  populer: state.productsPopuler,
  categories: state.categories,
});

const mapDispatchToProps = {
  productsNew: HomeActions.new,
  productsPopuler: HomeActions.populer,
  findCategories: HomeActions.findCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
