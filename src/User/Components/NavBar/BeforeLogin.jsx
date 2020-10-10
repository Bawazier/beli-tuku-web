import React from "react";
import {
  CartButton,
  LoginButton,
  SignupButton,
  TextButton,
  ContainerBeforeLogin,
} from "./NavBarElements";

import cartIcon from "../../Images/shopping-cart-logo.svg";

export default (props) => {
  return (
    <>
      <ContainerBeforeLogin isLogin={props.isLogin}>
        <CartButton>
          <img src={cartIcon} alt="" />
        </CartButton>
        &nbsp;
        <LoginButton>
          <TextButton isLogin>Login</TextButton>
        </LoginButton>
        &nbsp;
        <SignupButton>
          <TextButton>Signup</TextButton>
        </SignupButton>
      </ContainerBeforeLogin>
    </>
  );
};
