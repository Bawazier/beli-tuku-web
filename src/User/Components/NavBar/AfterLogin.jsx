import React, { useState } from "react";
import {
  CartButton,
  ContainerBeforeLogin,
  Dropdown,
  CircleToggle,
  Picture,
  MenuItem,
  Item,
} from "./NavBarElements";

import cartIcon from "../../Images/shopping-cart-logo.svg";
import bellIcon from "../../Images/bell.svg";
import mailIcon from "../../Images/mail.svg";
import placeholder from "../../Images/placeholder.png";

export default (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);
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
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <CircleToggle>
            <Picture
              src={props.profilePicture ? props.profilePicture : placeholder}
              alt=""
            />
          </CircleToggle>
          <MenuItem>
            <Item to="/profile/account" className="dropdown-item">
              Profile
            </Item>
            <Item to="/" onClick={props.isLogout} className="dropdown-item">
              Logout
            </Item>
          </MenuItem>
        </Dropdown>
        &nbsp;
      </ContainerBeforeLogin>
    </>
  );
};
