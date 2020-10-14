import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";

import NavBarComponent from "../Components/NavBar/index";
import CardComponent from "../Components/Card/index";

export class Search extends Component {
  render() {
    const search = this.props.search;
    return (
      <>
        <NavBarComponent profilePicture="" />

        <Container className="mt-5">
          <Row>
            {!search.isLoading &&
              !search.isError &&
              search.data.length !== 0 &&
              search.data.map((item) => (
                <Col xs={6} sm={6} md={4} lg={3} className="mb-4">
                  <CardComponent
                    storeName="Store Name"
                    productsName={item.name}
                    productsPrice={item.price}
                    productsRatings={item.rating}
                    productsImages={
                      search.imagesPrimary.map((i) =>
                        i.id_product === item.id ? i.URL_image : ""
                      )[0]
                    }
                  />
                </Col>
              ))}
            {search.isLoading &&
              !search.isError &&
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
            {search.isError && search.alertMsg !== "" && (
              <Col xs={12} sm={12} md={12} lg={12} className="mb-4">
                <div>{search.alertMsg}</div>
              </Col>
            )}
          </Row>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  search: state.searchProducts,
});

export default connect(mapStateToProps, null)(Search);