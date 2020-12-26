import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Input,
  UncontrolledCarousel,
  Button,
} from "reactstrap";

//Components
import Navigation from "../Components/Navigation";
import CardProduct from "../Components/CardProduct";

//Actions
import HomeActions from '../Redux/actions/home';

const Home = () => {
  const listNewProducts = useSelector((state) => state.listNewProducts);
  const listPopularProducts = useSelector((state) => state.listPopularProducts);
  const listCategories = useSelector((state) => state.listCategories);
  const [ad, setAd] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(HomeActions.newProducts());
    dispatch(HomeActions.popularProducts());
    dispatch(HomeActions.listCategories());
  }, []);

  const detailProduct = async (id_product) => {
    await dispatch(HomeActions.detailProduct(id_product));
    history.push("/product");
    dispatch(HomeActions.detailProductReviews(id_product));
  };

  const viewAll = () => {
    dispatch(HomeActions.catalogSort());
    history.push("/catalog");
  };

  const searchByCategory = (catalog_name = "") => {
    dispatch(HomeActions.catalogSearch("", catalog_name));
    history.push("/catalog");
  };

  const handleSeacrhCategories = (event) => {
    dispatch(HomeActions.listCategories(event.target.value));
  };

  return (
    <>
      <Navigation />
      <styles.GlobalStyle />
      <styles.Container>
        <styles.ContainerRow>
          <Col xs={3} className="pl-0 ml-0">
            <styles.List>
              <styles.ListGroup>
                <styles.Item action onClick={searchByCategory}>
                  All Categories
                </styles.Item>
                {!listCategories.isLoading &&
                  !listCategories.isError &&
                  listCategories.data.map((item) => (
                    <ListGroupItem
                      action
                      onClick={() => searchByCategory(item.name)}
                    >
                      {item.name}
                    </ListGroupItem>
                  ))}
              </styles.ListGroup>
            </styles.List>
            <styles.SearchInput
              onChange={handleSeacrhCategories}
              className="border"
              type="text"
              name="search"
              id="search"
              placeholder="Search Categories"
            />
          </Col>
          <Col xs={9}>
            {/* {!listPopularProducts.isLoading &&
            !listPopularProducts.isError &&
            listPopularProducts.data.map((items, index) => {
              if (index === 0) {
                return items.ProductImages.map((item) => setAd([...{src: item.picture}]));
              }
            })} */}
            <UncontrolledCarousel items={ad} />
          </Col>
        </styles.ContainerRow>
        <styles.SectionRow>
          <Col xs={2} className="pl-0 ml-0">
            <styles.Secion>NEW PRODUCTS</styles.Secion>
          </Col>
          <Col xs={1} className="p-0 m-0">
            <styles.Link color="link" onClick={viewAll}>
              View All
            </styles.Link>
          </Col>
        </styles.SectionRow>
        <Row>
          {!listNewProducts.isLoading &&
            !listNewProducts.isError &&
            listNewProducts.data.map((item) => (
              <Col className="mb-3">
                <CardProduct
                  productDetail={() => detailProduct(item.id)}
                  productImage={item.ProductImages[0].picture}
                  productStore={item.Store.name}
                  productName={item.name || ""}
                  productPrice={item.price}
                  productRating={item.ratings}
                />
              </Col>
            ))}
        </Row>
        <styles.SectionRow>
          <Col xs={3} className="p-0 m-0">
            <styles.Secion>POPULAR PRODUCTS</styles.Secion>
          </Col>
          <Col xs={1} className="p-0 m-0">
            <styles.Link color="link" onClick={viewAll}>
              View All
            </styles.Link>
          </Col>
        </styles.SectionRow>
        <Row>
          {!listPopularProducts.isLoading &&
            !listPopularProducts.isError &&
            listPopularProducts.data.map((item) => (
              <Col className="mb-3">
                <CardProduct
                  productDetail={() => detailProduct(item.id)}
                  productImage={item.ProductImages[0].picture}
                  productStore={item.Store.name}
                  productName={item.name || ""}
                  productPrice={item.price}
                  productRating={item.ratings}
                />
              </Col>
            ))}
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
  `,

  ContainerRow: styled(Row)`
    align-items: center;
    margin: 20px 0 0 0;
  `,

  List: styled.div`
    width: 100%;
    height: 350px;
    background-color: #fff;
    overflow: hidden;
    position: relative;
  `,

  ListGroup: styled(ListGroup)`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: -17px; /* Increase/Decrease this value for cross-browser compatibility */
    overflow-y: scroll;
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

  Link: styled(Button)`
    background: transparent
    color: #1bc29b;
    align-self: flex-end;
  `,
};

export default Home;
