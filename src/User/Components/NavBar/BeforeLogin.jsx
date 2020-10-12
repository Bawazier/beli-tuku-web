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
        <CartButton to="/" className="btn">
          <img src={cartIcon} alt="" />
        </CartButton>
        &nbsp;
        <LoginButton to="/auth/login" className="btn">
          <TextButton isLogin>Login</TextButton>
        </LoginButton>
        &nbsp;
        <SignupButton to="/auth/signup" className="btn">
          <TextButton>Signup</TextButton>
        </SignupButton>
      </ContainerBeforeLogin>
    </>
  );
};
