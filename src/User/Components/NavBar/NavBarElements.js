import styled from "styled-components";
import {
  Navbar,
  Input,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";
import { Link } from "react-router-dom"

export const NavBar = styled(Navbar)`
  background: #ffffff;
  box-shadow: 0px 6px 40px rgba(173, 173, 173, 0.25);
`;

export const NavBarBrand = styled(Link)``;

export const Search = styled.div`
  width: auto;
  @media (max-width: 992px) {
    width: 100%;
    display: none;
  }
`;

export const SearchInput = styled(Input)`
  height: 40px;
  background: #ffffff;
  border: 1px solid #8e8e93;
  border-radius: 23px;
`;

export const SearchButton = styled(Link)`
  background: #ffffff;
  border: 1px solid #8e8e93;
`;

export const SearchIcon = styled.img`
  padding: 1px;
`;

export const FilterButton = styled(Link)`
  background: #ffffff;
  border: 1px solid #8e8e93;
  border-radius: 12px;
`;

export const FilterIcon = styled.img``;


// Before Login Elements
export const ContainerBeforeLogin = styled.div`
  display: ${props => props.isLogin ? "flex":"none"};
  justify-content: between;
`;

export const CartButton = styled(Link)`
  background: #ffffff;
  border: none;
  border-radius: 12px;
  &:hover{
    background: #ffffff;
  }
`;

export const LoginButton = styled(Link)`
  width: 100px;
  height: 36px;
  background: #32c33b;
  border: none;
  border-radius: 25px;
  &:hover {
    background: #32c33b;
  }
`;

export const SignupButton = styled(Link)`
  width: 100px;
  height: 36px;
  background: #ffff;
  border: 1px solid #9b9b9b;
  box-sizing: border-box;
  border-radius: 24px;
  &:hover {
    background: #ffff;
  }
`;

export const TextButton = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${(props) => (props.isLogin ? "#FFFFFF" : "#9B9B9B")};
`;

export const Dropdown = styled(ButtonDropdown)``;

export const CircleToggle = styled(DropdownToggle)`
  display: flex;
  justify-content: center;
  width: 24px;
  height: 24px;
  overflow: hidden;
`;

export const Picture = styled.img`
  width: 24px;
  height: 24px;
`;

export const MenuItem = styled(DropdownMenu)``;

export const Item = styled(Link)``;