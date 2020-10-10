import React from "react";
import {
  CardOriginal,
  BodyCard,
  ImgCard,
  TitleCard,
  SubtitleCard,
  TextCard,
  CountRatings,
  Ratings,
} from "./CardElements";
import numeral from "numeral";

import StarRatings from "../Ratings/index";

import placeholder from "../../Images/placeholder.png";

export default (props) => {
  return (
    <CardOriginal>
      <ImgCard
        top
        width="100%"
        src={props.productsImages ? props.productsImages : placeholder}
        alt="item"
      />
      <BodyCard>
        <TitleCard className="h6">{props.productsName}</TitleCard>
        <SubtitleCard className="h5 text-danger">
          Rp.
          {numeral(props.productsPrice)
            .format(0, 0)
            .toString()
            .replace(",", ".")}
          ,-
        </SubtitleCard>
        <TextCard className="text-muted h6 mt-2">{props.storeName}</TextCard>
        <Ratings>
          <StarRatings number={props.productsRatings} />
          <CountRatings>({props.productsRatings})</CountRatings>
        </Ratings>
      </BodyCard>
    </CardOriginal>
  );
};
