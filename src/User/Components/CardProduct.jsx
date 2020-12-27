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

const CardProduct = (props) => {
  const { REACT_APP_API_URL } = process.env;
  return (
    <styles.CardOriginal body className="text-center" onClick={props.productDetail}>
      <styles.CardImg
        src={
          props.productImage
            ? REACT_APP_API_URL + "/" + props.productImage
            : require("../Assets/Images/PrimaryImage.png")
        }
        alt="Card image cap"
      />
      <CardBody>
        <styles.PriceText className="h5">
          Rp.
          {numeral(props.productPrice || 0)
            .format(0, 0)
            .toString()
            .replace(",", ".")}
          ,-
        </styles.PriceText>
        <CardTitle tag="h5">
          {props.productName.length < 20
            ? props.productName
            : props.productName.substring(0, 20).concat("...")}
        </CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          {props.productStore}
        </CardSubtitle>
        <StarRatingComponent
          name="rate1"
          starCount={5}
          starColor="#1bc29b"
          emptyStarColor="#102939"
          value={props.productRating || 0}
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
    border: 0.5px solid #102939;
    border-radius: 10px;
    padding: 0;
    overflow: hidden;
    box-shadow: 0px 0px 14px rgba(173, 173, 173, 0.25);
    &:hover {
      cursor: pointer;
      opacity: 0.5;
    }
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
