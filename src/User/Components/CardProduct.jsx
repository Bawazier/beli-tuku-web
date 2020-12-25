import React from "react";
import styled from 'styled-components';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import numeral from "numeral";
import StarRatingComponent from "react-star-rating-component";

const CardProduct = () => {
  return (
    <styles.CardOriginal body className="text-center">
      <styles.CardImg
        src={require("../Assets/Images/PrimaryImage.png")}
        alt="Card image cap"
      />
      <CardBody>
        <styles.PriceText className="h5">
          Rp.
          {numeral(2000000).format(0, 0).toString().replace(",", ".")}
          ,-
        </styles.PriceText>
        <CardTitle tag="h5">Product Name</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          Store Name
        </CardSubtitle>
        <StarRatingComponent
          name="rate1"
          starCount={5}
          starColor="#1bc29b"
          emptyStarColor="#102939"
          value={4}
          editable={false}
        />
      </CardBody>
      {/* <CardBody></CardBody> */}
    </styles.CardOriginal>
  );
};

const styles = {
  CardOriginal: styled(Card)`
    width: 100%;
    height: auto;
    background: transparent;
    border: 2px solid #102939;
    padding: 0;
    overflow: hidden;
  `,

  CardImg: styled(CardImg)`
    width: 100%;
    height: 200px;
  `,

  PriceText: styled(CardTitle)`
    color: #1bc29b;
    font-weight: bold;
  `,
};

export default CardProduct;
