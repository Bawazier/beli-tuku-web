import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  TextCategory,
  ImagesCategory,
  BackgroundColors,
  LinkCard,
} from "./CategoryElements";

import HomeActions from "../../Redux/actions/home";

export default (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [id, setId] = useState(0);

  const onClickCategory = async (e) => {
    setId(e.target.value)
    await dispatch(HomeActions.byCategory(id));
    history.push("/products/category");
  };

  return (
    <>
      <LinkCard to="/products/category" onClick={onClickCategory}>
        <input type="text" value={props.id} className="d-none" />
        <BackgroundColors
          colors={props.colors}
          className="d-flex align-items-center justify-content-center bg-thumbnail"
        >
          <ImagesCategory src={props.categoryImage} alt="" />
          <TextCategory class="text-thumbnail">
            {props.categoryName}
          </TextCategory>
        </BackgroundColors>
      </LinkCard>
    </>
  );
};
