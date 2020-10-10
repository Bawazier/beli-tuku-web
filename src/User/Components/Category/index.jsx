import React from "react";
import {
  TextCategory,
  ImagesCategory,
  BackgroundColors,
} from "./CategoryElements";

export default (props) => {
  return (
    <>
      
          <BackgroundColors colors={props.colors} className="d-flex align-items-center justify-content-center bg-thumbnail">
            <ImagesCategory src={props.categoryImage} alt="" />
            <TextCategory class="text-thumbnail">
              {props.categoryName}
            </TextCategory>
          </BackgroundColors>
    </>
  );
};
