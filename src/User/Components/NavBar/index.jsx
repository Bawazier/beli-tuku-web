import React, { useState } from "react";
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

export default (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <NavBar color="light" light expand="md">
        <Container>
          <Row className="w-100 align-items-center justify-content-between">
            <Col xs={4} sm={2} md={2} lg={2}>
              <NavBarBrand href="/">
                <img src={brandIcon} alt="" />
              </NavBarBrand>
            </Col>
            <Col xs={6} sm={6} md={6} lg={5} className="align-self-center">
              <Search className="input-group align-items-center">
                <SearchInput
                  type="text"
                  className="form-control rounded p-3"
                  id="search"
                  placeholder="Search..."
                />
                <div className="input-group-prepend">
                  <SearchButton className="input-group-text rounded p-2">
                    <SearchIcon src={searchIcon} alt="" />
                  </SearchButton>
                </div>
              </Search>
            </Col>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Col xs={2} sm={2} md={2} lg={1}>
                <FilterButton>
                  <FilterIcon src={filterIcon} alt="" />
                </FilterButton>
              </Col>
              <Col xs={2} sm={2} md={2} lg="auto" className="ml-auto">
                <BeforeLogin isLogin={true}/>
                <AfterLogin isLogin={false} profilePicture={props.profilePicture}/>
              </Col>
            </Collapse>
          </Row>
        </Container>
      </NavBar>
    </>
  );
};
