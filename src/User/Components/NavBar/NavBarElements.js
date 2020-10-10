import styled from "styled-components";
import { Navbar, NavbarBrand, Button, Input } from "reactstrap";

export const NavBar = styled(Navbar)`
  background: #ffffff;
  box-shadow: 0px 6px 40px rgba(173, 173, 173, 0.25);
`;

export const NavBarBrand = styled(NavbarBrand)``;

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

export const SearchButton = styled(Button)`
  background: #ffffff;
  border: 1px solid #8e8e93;
`;

export const SearchIcon = styled.img`
  padding: 1px;
`;

export const FilterButton = styled(Button)`
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

export const CartButton = styled(Button)`
  background: #ffffff;
  border: none;
  border-radius: 12px;
  &:hover{
    background: #ffffff;
  }
`;

export const LoginButton = styled(Button)`
  width: 100px;
  height: 36px;
  background: #32c33b;
  border: none;
  border-radius: 25px;
  &:hover {
    background: #32c33b;
  }
`;

export const SignupButton = styled(Button)`
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
