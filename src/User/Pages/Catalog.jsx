import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import {
  Container,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";

//Components
import Navigation from "../Components/Navigation";
import CardProduct from "../Components/CardProduct";

const Catalog = () => {
  const [sortBy, setSortBy] = useState("Name");
  return (
    <>
      <Navigation />
      <styles.GlobalStyle />
      <styles.Container>
        <Row>
          <Col xs={4}>
            <h5>Categories</h5>
          </Col>
          <Col xs={8}>
            <Row className="justify-content-between align-items-center">
              <Col xs={6}>
                <UncontrolledDropdown setActiveFromChild>
                  <styles.ToggleText tag="a" caret>
                    Sort By: {sortBy}
                  </styles.ToggleText>
                  <DropdownMenu right>
                    <DropdownItem onClick={() => setSortBy("Name")}>
                      Name
                    </DropdownItem>
                    <DropdownItem onClick={() => setSortBy("Categories")}>
                      Categories
                    </DropdownItem>
                    <DropdownItem onClick={() => setSortBy("Stores")}>
                      Stores
                    </DropdownItem>
                    <DropdownItem onClick={() => setSortBy("Colors")}>
                      Colors
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Col>
              <Col xs={6}>
                <h6 className="text-muted text-right">
                  Showing 1-12 of 24 results
                </h6>
              </Col>
            </Row>
            <Row className="mt-3">
              {[...Array(12)].map((item) => (
                <Col xs={4} className="mb-3">
                  <CardProduct />
                </Col>
              ))}
            </Row>
            <Row className="justify-content-end">
              <Col xs={12}>
                <Pagination aria-label="Page navigation example">
                  <PaginationItem disabled>
                    <PaginationLink first href="#" />
                  </PaginationItem>
                  <PaginationItem disabled>
                    <PaginationLink previous href="#" />
                  </PaginationItem>
                  <PaginationItem active>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">4</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">5</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink next href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink last href="#" />
                  </PaginationItem>
                </Pagination>
              </Col>
            </Row>
          </Col>
        </Row>
      </styles.Container>
    </>
  );
};

const styles = {
  GlobalStyle: createGlobalStyle`
    body {
      background-color: #c8d1da;
      margin:0;
      padding:0;
      line-height: 1.5em;
      height: 100%;
      width: 100%;
    }
  `,
  Container: styled(Container)`
    width: 80%;
    padding: 40px 0;
  `,
  ToggleText: styled(DropdownToggle)`
    font-size: 18px;
    color: #222;
  `,
};

export default Catalog;
