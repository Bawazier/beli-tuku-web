import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import {Container, Row, Col, Button} from 'reactstrap';
import numeral from "numeral";
import StarRatingComponent from "react-star-rating-component";

//Components
import Navigation from "../Components/Navigation";

const DetailProduct = () => {
  return (
    <>
      <Navigation />
      <styles.GlobalStyle />
      <styles.Container>
        <styles.ContainerRow>
          <Col xs={6} className="ml-0 pl-0">
            <Row>
              {[...Array(4)].map((item) => (
                <styles.ImageCol xs={6}>
                  <img
                    src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                    alt="Card image cap"
                    className="w-100 h-100"
                  />
                </styles.ImageCol>
              ))}
            </Row>
          </Col>
          <Col xs={6} className="mr-0 pr-0">
            <h2>Nike CruzrOne (Bright Crimson)</h2>
            <h6 className="text-muted">Nike</h6>
            <StarRatingComponent
              name="rate1"
              starCount={5}
              starColor="#1bc29b"
              emptyStarColor="#102939"
              value={4}
              editable={false}
            />
            <styles.Section>
              <h6 className="text-muted">Price</h6>
              <h4 className="font-weight-bold">
                Rp.
                {numeral(2000000).format(0, 0).toString().replace(",", ".")}
                ,-
              </h4>
            </styles.Section>
            <styles.Section className="w-80">
              <h6 className="text-muted">Color</h6>
              <Row>
                {[...Array(4)].map((item) => (
                  <Col xs={2}>
                    <styles.ColorContainer className="rounded-circle">
                      <styles.ColorButton className="rounded-circle">
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
                {["XS", "S", "M", "L", "XL"].map((item) => (
                  <Col xs={2}>
                    <div>
                      <styles.SizeButton outline>{item}</styles.SizeButton>
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
