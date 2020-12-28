import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled, { createGlobalStyle } from "styled-components";
import {
  Container,
  Row,
  Col,
  Button,
  Spinner,
  Modal,
  ModalFooter,
  ModalBody,
} from "reactstrap";
import numeral from "numeral";
import StarRatingComponent from "react-star-rating-component";
import { FaPlus, FaMinus } from "react-icons/fa";

//Components
import Navigation from "../Components/Navigation";
import CardProduct from "../Components/CardProduct";

//Actions
import HomeActions from "../Redux/actions/home";
import transactionActions from "../Redux/actions/transaction";

const DetailProduct = () => {
  const { REACT_APP_API_URL } = process.env;
  const { dataProduct, isLoading, isError } = useSelector(
    (state) => state.detailProduct
  );
  const {
    dataReviews,
    isReviewsLoading,
    isReviewsError,
  } = useSelector((state) => state.detailProduct);
  const { dataListCart } = useSelector((state) => state.cart);
  const cart = useSelector((state) => state.cart);
  const catalog = useSelector((state) => state.catalogResults);
  const auth = useSelector((state) => state.auth);
  const [choiceColor, setChoiceColor] = useState({});
  const [choiceSize, setChoiceSize] = useState([]);
  const [addCart, setAddCart] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      history.goBack();
    } else {
      dispatch(HomeActions.detailProduct(id));
      dispatch(HomeActions.detailProductReviews(id));
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    dispatch(
      HomeActions.catalogSearch(
        "",
        (dataProduct.Category && dataProduct.Category.name) || ""
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataProduct]);

  useEffect(() => {
    if (!cart.isLoading && cart.isAddCartError) {
      setError(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart.isAddCartError]);

  const addToCart = async () => {
    if (auth.token.length) {
      setAddCart(!addCart);
      await dispatch(
        transactionActions.addToCart(
          auth.token,
          dataProduct.id,
          quantity,
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
    history.push(`/product/${id_product}`);
    dispatch(HomeActions.detailProduct(id_product));
    dispatch(HomeActions.detailProductReviews(id_product));
  };

  return (
    <>
      <Navigation />
      <styles.GlobalStyle />
      <styles.Container>
        {error ? (
          <Modal isOpen={error} toggle={() => setError(!error)}>
            <ModalBody className="text-danger text-left h5">
              failed to add this product to the bag
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={() => setError(!error)}>
                CLOSE
              </Button>
            </ModalFooter>
          </Modal>
        ) : cart.isLoading ? (
          <styles.Spinner
            type="grow"
          />
        ) : (
          <Modal isOpen={addCart} toggle={() => setAddCart(!addCart)}>
            <ModalBody className="text-success text-left h5">
              Success Add this Product into the Bag
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={() => setAddCart(!addCart)}>
                CLOSE
              </Button>
            </ModalFooter>
          </Modal>
        )}
        <styles.ContainerRow>
          <Col xs={6} className="ml-0 pl-0">
            <Row>
              {!isLoading &&
                !isError &&
                dataProduct.ProductImages &&
                dataProduct.ProductImages.map((item) => (
                  <styles.ImageCol
                    xs={dataProduct.ProductImages.length > 2 ? 6 : 12}
                  >
                    <img
                      src={
                        item.picture
                          ? REACT_APP_API_URL + "/" + item.picture
                          : require("../Assets/Images/Logo.png")
                      }
                      alt="Card image cap"
                      className="w-100 h-100 shadow rounded"
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
                  dataProduct.ProductColors &&
                  dataProduct.ProductColors.map((item) => (
                    <Col xs={2}>
                      <styles.ColorContainer
                        className={
                          choiceSize.size === item.size
                            ? "shadow rounded-circle"
                            : "rounded-circle"
                        }
                        isSelect={choiceColor.id === item.id}
                      >
                        <styles.ColorButton
                          onClick={() => setChoiceColor(item)}
                          className="rounded-circle"
                          bgColor={item.hexa}
                          disabled={item.status !== "available" ? true : false}
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
                  dataProduct.ProductSizes &&
                  dataProduct.ProductSizes.map((item) => (
                    <Col xs={2}>
                      <div>
                        <styles.SizeButton
                          onClick={() => setChoiceSize(item)}
                          isSelect={choiceSize.size === item.size}
                          className={
                            choiceSize.size === item.size ? "shadow" : null
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
                <Col xs={2}>
                  <styles.CounterButton
                    color="success"
                    className="w-100 text-center"
                    onClick={() =>
                      quantity > 1 ? setQuantity(quantity - 1) : quantity
                    }
                  >
                    <FaMinus />
                  </styles.CounterButton>
                </Col>
                <Col xs={2}>
                  <h4 className="w-100 text-center">{quantity}</h4>
                </Col>
                <Col xs={2}>
                  <styles.CounterButton
                    color="success"
                    className="w-100 text-center"
                    onClick={() =>
                      quantity < dataProduct.stock
                        ? setQuantity(quantity + 1)
                        : quantity
                    }
                  >
                    <FaPlus />
                  </styles.CounterButton>
                </Col>
              </Row>
            </styles.Section>
            <styles.Section className="mt-5">
              {!isLoading && !isError && (
                <Row>
                  <Col xs={3}>
                    <Button
                      outline
                      disabled
                      color="warning"
                      className="w-100 font-weight-bold"
                    >
                      Chat
                    </Button>
                  </Col>
                  <Col xs={4}>
                    <Button
                      outline
                      disabled
                      color="warning"
                      className="w-100 font-weight-bold"
                      onClick={buy}
                    >
                      Buy Now
                    </Button>
                  </Col>
                  <Col xs={5}>
                    <Button
                      color="warning"
                      className="w-100 font-weight-bold"
                      onClick={addToCart}
                    >
                      Add Bag
                    </Button>
                  </Col>
                </Row>
              )}
            </styles.Section>
          </Col>
        </styles.ContainerRow>
      </styles.Container>
      <styles.Container>
        <styles.SectionTitle>
          <h4>Product Information</h4>
        </styles.SectionTitle>
        <styles.Section>
          <h5>Condition</h5>
          <h6 className="text-success">
            {(dataProduct.Condition && dataProduct.Condition.status) || ""}
          </h6>
        </styles.Section>
        <styles.Section>
          <h5>Description</h5>
          <p>{dataProduct.description || ""}</p>
        </styles.Section>
        {!isReviewsLoading && !isReviewsError && dataReviews.length && (
          <styles.SectionTitle>
            <h4>Product Reviews</h4>
            <div>
              <h1>{dataReviews[0].rating || 0}</h1>
              <StarRatingComponent
                name="rate2"
                starCount={5}
                starColor="#1bc29b"
                emptyStarColor="#102939"
                value={dataReviews[0].rating || 0}
                editable={false}
              />
            </div>
          </styles.SectionTitle>
        )}
        {!isReviewsLoading && isReviewsError && (
          <styles.SectionTitle>
            <h4>Product Reviews</h4>
            <div>
              <h5 className="text-muted">
                There is no review for this product
              </h5>
            </div>
          </styles.SectionTitle>
        )}
      </styles.Container>
      <styles.Container className="border-top">
        <styles.SectionTitle>
          <h3>You can also like this</h3>
          <div>
            <h6 className="text-muted">You’ve never seen it before!</h6>
          </div>
        </styles.SectionTitle>
        <Row className="mt-3">
          {!catalog.isLoading &&
            !catalog.isError &&
            catalog.data.map((item) => (
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
    color: #102939;
  `,

  ColorContainer: styled.div`
    width: 75%;
    height: 90%;
    border: ${(props) => (props.isSelect ? "1px solid #102939" : "none")};
    padding: 2px;
  `,

  ColorButton: styled(Button)`
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.bgColor};
  `,

  SizeButton: styled(Button)`
    width: 80%;
    height: 90%;
    border: 1px solid #102939;
    background-color: ${(props) =>
      props.isSelect ? "#1bc29b" : "transparent"};
    color: #102939;
    font-weight: bold;
  `,

  Spinner: styled(Spinner)`
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    z-index: 2;
    width: 5rem;
    height: 5rem;
    color: #1bc29b;
  `,
};

export default DetailProduct;
