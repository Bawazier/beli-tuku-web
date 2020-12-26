import React, { useState, useEffect } from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled, { createGlobalStyle } from "styled-components";
import {Container, Row, Col, Button} from 'reactstrap';
import numeral from "numeral";
import StarRatingComponent from "react-star-rating-component";

//Components
import Navigation from "../Components/Navigation";

//Actions
import HomeActions from '../Redux/actions/home';
import transactionActions from '../Redux/actions/transaction';

const DetailProduct = () => {
  const { REACT_APP_API_URL } = process.env;
  const { dataProduct, isLoading, isError } = useSelector(
    (state) => state.detailProduct
  );
  const {
    dataReviews,
    pageInfo,
    isReviewsLoading,
    isReviewsError,
  } = useSelector((state) => state.detailProduct);
  const { dataListCart } = useSelector((state) => state.cart);
  const catalog = useSelector((state) => state.catalogResults);
  const auth = useSelector((state) => state.auth);
  const [choiceColor, setChoiceColor] = useState({});
  const [choiceSize, setChoiceSize] = useState([]);
  const [addCart, setAddCart] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const addToCart = async () => {
    if (auth.token.length) {
      setAddCart(!addCart);
      await dispatch(
        transactionActions.addToCart(
          auth.token,
          dataProduct.id,
          1,
          choiceColor.id || dataProduct.ProductColors[0].id,
          choiceSize.id || dataProduct.ProductSizes[0].id
        )
      );
      dispatch(transactionActions.listCart(auth.token));
    } else {
      history.push("/login");
    }
  };

  const buy = async () => {
    await dispatch(
      transactionActions.addToCart(
        auth.token,
        dataProduct.id,
        1,
        choiceColor.id || dataProduct.ProductColors[0].id,
        choiceSize.id || dataProduct.ProductSizes[0].id
      )
    );
    await dispatch(transactionActions.listCart(auth.token));
    dataListCart.map(async (item) => {
      if (item.detailProductId === dataProduct.id) {
        dispatch(transactionActions.checkoutCart(auth.token, item.id));
      }
    });
    history.push("/checkout");
    dispatch(transactionActions.listCart(auth.token));
  };

  const detailProduct = (id_product) => {
    dispatch(HomeActions.detailProduct(id_product));
    dispatch(HomeActions.detailProductReviews(id_product));
  };

  return (
    <>
      <Navigation />
      <styles.GlobalStyle />
      {!isLoading && !isError && dataProduct.length ? (
        <styles.Container>
          <styles.ContainerRow>
            <Col xs={6} className="ml-0 pl-0">
              <Row>
                {!isLoading &&
                  !isError &&
                  dataProduct &&
                  dataProduct.ProductImages.map((item) => (
                    <styles.ImageCol xs={6}>
                      <img
                        src={
                          item.picture
                            ? REACT_APP_API_URL + "/" + item.picture
                            : require("../Assets/Images/Logo.png")
                        }
                        alt="Card image cap"
                        className="w-100 h-100"
                      />
                    </styles.ImageCol>
                  ))}
              </Row>
            </Col>
            <Col xs={6} className="mr-0 pr-0">
              <h2>{dataProduct.name || "..."}</h2>
              <h6 className="text-muted">
                {(dataProduct.Store && dataProduct.Store.name) || ""}
              </h6>
              <StarRatingComponent
                name="rate1"
                starCount={5}
                starColor="#1bc29b"
                emptyStarColor="#102939"
                value={dataProduct.ratings || 0}
                editable={false}
              />
              <styles.Section>
                <h6 className="text-muted">Price</h6>
                <h4 className="font-weight-bold">
                  Rp.
                  {numeral(dataProduct.price || 0)
                    .format(0, 0)
                    .toString()
                    .replace(",", ".")}
                  ,-
                </h4>
              </styles.Section>
              <styles.Section className="w-80">
                <h6 className="text-muted">Color</h6>
                <Row>
                  {!isLoading &&
                    !isError &&
                    dataProduct &&
                    dataProduct.ProductColors.map((item) => (
                      <Col xs={2}>
                        <styles.ColorContainer className="rounded-circle">
                          <styles.ColorButton
                            onClick={() => setChoiceColor(item)}
                            className="rounded-circle"
                            bgColor={item.hexa}
                            disabled={
                              item.status !== "available" ? true : false
                            }
                          >
                            &nbsp;
                          </styles.ColorButton>
                        </styles.ColorContainer>
                      </Col>
                    ))}
                </Row>
              </styles.Section>
              <styles.Section>
                <h6 className="text-muted">Size</h6>
                <Row>
                  {!isLoading &&
                    !isError &&
                    dataProduct &&
                    dataProduct.ProductSizes.map((item) => (
                      <Col xs={2}>
                        <div>
                          <styles.SizeButton
                            onClick={() => setChoiceSize(item)}
                            outline={
                              choiceSize.size === item.size ? false : true
                            }
                          >
                            {item.size}
                          </styles.SizeButton>
                        </div>
                      </Col>
                    ))}
                </Row>
              </styles.Section>
              <styles.Section>
                <h6 className="text-muted">Quantity</h6>
                <Row className="align-items-center">
                  <Col xs={2} className="pr-0 mr-0">
                    <div>
                      <styles.CounterButton>-</styles.CounterButton>
                    </div>
                  </Col>
                  <Col xs={1} className="p-0 m-0">
                    <h5 className="text-center font-weight-bold">1</h5>
                  </Col>
                  <Col xs={2} className="pl-0 ml-0">
                    <div>
                      <styles.CounterButton>+</styles.CounterButton>
                    </div>
                  </Col>
                </Row>
              </styles.Section>
              <styles.Section className="mt-5">
                <Row>
                  <Col xs={3}>
                    <Button
                      outline
                      color="warning"
                      className="w-100 font-weight-bold"
                    >
                      Chat
                    </Button>
                  </Col>
                  <Col xs={4}>
                    <Button
                      outline
                      color="warning"
                      className="w-100 font-weight-bold"
                    >
                      Add Bag
                    </Button>
                  </Col>
                  <Col xs={5}>
                    <Button color="warning" className="w-100 font-weight-bold">
                      Buy Now
                    </Button>
                  </Col>
                </Row>
              </styles.Section>
            </Col>
          </styles.ContainerRow>
        </styles.Container>
      ) : (
        <Redirect
          to={{
            pathname: "/",
          }}
        />
      )}
      <styles.Container>
        <styles.SectionTitle>
          <h4>Product Information</h4>
        </styles.SectionTitle>
        <styles.Section>
          <h5>Condition</h5>
          <h6 className="text-success">New</h6>
        </styles.Section>
        <styles.Section>
          <h5>Description</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
            magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis
            laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames
            ac ante ipsum primis in faucibus. Praesent sed enim vel turpis
            blandit imperdiet ac ac felis. Etiam tincidunt tristique placerat.
            Pellentesque a consequat mauris, vel suscipit ipsum. Donec ac mauris
            vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl
            at, ornare suscipit magna. Donec non magna rutrum, pellentesque
            augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec
            pharetra quam. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac
            felis. In ultricies rutrum tempus. Mauris vel molestie orci.
          </p>
        </styles.Section>
        <styles.SectionTitle>
          <h4>Product Reviews</h4>
          <div>
            <h1>5.0</h1>
            <StarRatingComponent
              name="rate2"
              starCount={5}
              starColor="#1bc29b"
              emptyStarColor="#102939"
              value={4}
              editable={false}
            />
          </div>
        </styles.SectionTitle>
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
    margin: 20px 0;
  `,

  ImageCol: styled(Col)`
    width: 100%;
    height: 250px;
    margin-bottom: 10px;
  `,

  Section: styled.div`
    margin: 10px 0;
  `,

  SectionTitle: styled.div`
    margin: 20px 0;
  `,

  CounterButton: styled(Button)`
    background-color: #1bc29b;
    width: 80%;
    font-size: 20px;
    font-weight: bold;
    color: #102939;
  `,

  ColorContainer: styled.div`
    width: 80%;
    height: 90%;
    border: 1px solid #102939;
    padding: 5px;
  `,

  ColorButton: styled(Button)`
    width: 100%;
    height: 100%;
    background-color: ${props => props.bgColor}
  `,

  SizeButton: styled(Button)`
    width: 80%;
    height: 90%;
    border: 1px solid #102939;
    background-color: #1bc29b;
    color: #102939;
  `,
};

export default DetailProduct;
