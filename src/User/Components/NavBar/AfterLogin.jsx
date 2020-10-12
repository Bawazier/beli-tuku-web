import React from "react";
import {
  CartButton,
  ContainerBeforeLogin,
  CircleButton,
  Picture
} from "./NavBarElements";

import cartIcon from "../../Images/shopping-cart-logo.svg";
import bellIcon from "../../Images/bell.svg";
import mailIcon from "../../Images/mail.svg";
import placeholder from "../../Images/placeholder.png"

export default (props) => {
  return (
    <>
      <ContainerBeforeLogin isLogin={props.isLogin}>
        <CartButton to="/" className="btn">
          <img src={cartIcon} alt="" />
        </CartButton>
        &nbsp;
        <CartButton to="/" className="btn">
          <img src={bellIcon} alt="" />
        </CartButton>
        &nbsp;
        <CartButton to="/" className="btn">
          <img src={mailIcon} alt="" />
        </CartButton>
        &nbsp;
        <CircleButton to="/" className="btn rounded-circle text-center">
          <Picture src={props.profilePicture ? props.profilePicture : placeholder} alt="" />
        </CircleButton>
        &nbsp;
      </ContainerBeforeLogin>
    </>
  );
};
