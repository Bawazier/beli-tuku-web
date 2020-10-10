import React from "react";
import {
  CartButton,
  ContainerBeforeLogin,
} from "./NavBarElements";

import cartIcon from "../../Images/shopping-cart-logo.svg";
import bellIcon from "../../Images/bell.svg";
import mailIcon from "../../Images/mail.svg";

export default (props) => {
  return (
    <>
      <ContainerBeforeLogin isLogin={props.isLogin}>
        <CartButton>
          <img src={cartIcon} alt="" />
        </CartButton>
        &nbsp;
        <CartButton>
          <img src={bellIcon} alt="" />
        </CartButton>
        &nbsp;
        <CartButton>
          <img src={mailIcon} alt="" />
        </CartButton>
        &nbsp;
        <CartButton>
          <img src={props.profilePicture} alt="" />
        </CartButton>
        &nbsp;
      </ContainerBeforeLogin>
    </>
  );
};
