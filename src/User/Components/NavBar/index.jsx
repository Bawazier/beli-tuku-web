import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Container, Row, Col, NavbarToggler, Collapse } from "reactstrap";
import {
  NavBar,
  NavBarBrand,
  Search,
  SearchInput,
  SearchButton,
  SearchIcon,
  FilterButton,
  FilterIcon,
} from "./NavBarElements";
import BeforeLogin from "./BeforeLogin";
import AfterLogin from "./AfterLogin";

import brandIcon from "../../Images/logo-w-137-h-44.svg";
import searchIcon from "../../Images/Search.svg";
import filterIcon from "../../Images/filter-logo.svg";

import authAction from "../../Redux/actions/auth"
import HomeAction from "../../Redux/actions/home"

export default (props) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    setSearch({
      search: e.target.value,
    });
  };

  const onSearch = (e) => {
    e.preventDefault();
    dispatch(HomeAction.search(search));
    this.props.history.push("/home/search");
  };

  const toggle = () => setIsOpen(!isOpen);
  const logout = (e) => {
    e.preventDefault();
    dispatch(authAction.logout());
  }
  return (
    <>
      <NavBar color="light" light expand="md">
        <Container>
          <Row className="w-100 align-items-center justify-content-between">
            <Col xs={4} sm={2} md={2} lg={2}>
              <NavBarBrand to="/">
                <img src={brandIcon} alt="" />
              </NavBarBrand>
            </Col>
            <Col xs={6} sm={6} md={6} lg={5} className="align-self-center">
              <Search className="input-group align-items-center">
                <SearchInput
                  type="text"
                  className="form-control rounded p-3"
                  id="search"
                  onChange={handleInputChange}
                  value={this.state}
                  placeholder="Search..."
                />
                <div className="input-group-prepend">
                  <SearchButton
                    to="/"
                    onClick={onSearch}
                    className="btn input-group-text rounded p-2"
                  >
                    <SearchIcon src={searchIcon} alt="" />
                  </SearchButton>
                </div>
              </Search>
            </Col>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Col xs={2} sm={2} md={2} lg={1}>
                <FilterButton to="/" className="btn">
                  <FilterIcon src={filterIcon} alt="" />
                </FilterButton>
              </Col>
              <Col xs={2} sm={2} md={2} lg="auto" className="ml-auto">
                <BeforeLogin isLogin={!localStorage.getItem("token")} />
                <AfterLogin
                  isLogin={localStorage.getItem("token")}
                  profilePicture={props.profilePicture}
                  isLogout={logout}
                />
              </Col>
            </Collapse>
          </Row>
        </Container>
      </NavBar>
    </>
  );
};
