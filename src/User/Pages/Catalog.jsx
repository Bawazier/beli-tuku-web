import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
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

//Actions
import HomeActions from '../Redux/actions/home';

const Catalog = () => {
  const { data, pageInfo, isLoading, isError } = useSelector(
    (state) => state.catalogResults
  );
  const [dataPerPage, setDataPerPage] = useState(1);
  const [sortBy, setSortBy] = useState("News");
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const number = pageInfo.count / 16 / pageInfo.dataPerPage;
    setDataPerPage(Math.ceil(number));
  }, [pageInfo]);

  const detailProduct = (id_product) => {
    dispatch(HomeActions.detailProduct(id_product));
    history.push("/product");
    dispatch(HomeActions.detailProductReviews(id_product));
  };

  const nextPage = (next) => {
      if (sortBy === 'News') {
        dispatch(
          HomeActions.catalogSort(
            'createdAt',
            'DESC',
            next,
          ),
        );
      } else if (sortBy === 'Popular') {
        dispatch(
          HomeActions.catalogSort(
            'stock',
            'ASC',
            next,
          ),
        );
      } else if (sortBy === 'Price: lowest to high') {
        dispatch(
          HomeActions.catalogSort(
            'price',
            'ASC',
            next,
          ),
        );
      } else if (sortBy === 'Price: highest to low') {
        dispatch(
          HomeActions.catalogSort(
            'price',
            'DESC',
            next,
          ),
        );
      }
  };

  return (
    <>
      <Navigation />
      <styles.GlobalStyle />
      <styles.Container>
        <Row>
          <Col xs={4}>
            <h5>Filters</h5>
          </Col>
          <Col xs={8}>
            <Row className="justify-content-between align-items-center">
              <Col xs={6}>
                <UncontrolledDropdown setActiveFromChild>
                  <styles.ToggleText tag="a" caret>
                    Sort By: {sortBy}
                  </styles.ToggleText>
                  <DropdownMenu right>
                    <DropdownItem
                      onClick={async () => {
                        await setSortBy("News");
                        dispatch(HomeActions.catalogSort("createdAt", "DESC"));
                      }}
                    >
                      News
                    </DropdownItem>
                    <DropdownItem
                      onClick={async () => {
                        await setSortBy("Popular");
                        dispatch(HomeActions.catalogSort("stock", "ASC"));
                      }}
                    >
                      Popular
                    </DropdownItem>
                    <DropdownItem
                      onClick={async () => {
                        await setSortBy("Price: lowest to high");
                        dispatch(HomeActions.catalogSort("price", "ASC"));
                      }}
                    >
                      Price: lowest to high
                    </DropdownItem>
                    <DropdownItem
                      onClick={async () => {
                        await setSortBy("Price: highest to low");
                        dispatch(HomeActions.catalogSort("price", "DESC"));
                      }}
                    >
                      Price: highest to low
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Col>
              <Col xs={6}>
                <h6 className="text-muted text-right">
                  Showing 1-{pageInfo.dataPerPage} of {Math.ceil(pageInfo.count / 16)}{" "}
                  results
                </h6>
              </Col>
            </Row>
            <Row className="mt-3">
              {!isLoading &&
                !isError &&
                data.map((item) => (
                  <Col xs={4} className="mb-3">
                    <CardProduct
                      productDetail={() => detailProduct(item.id)}
                      productImage={item.ProductImages[0].picture}
                      productStore={item.Store.name}
                      productName={item.name || ""}
                      productPrice={item.price}
                      productRating={item.ratings}
                    />
                  </Col>
                ))}
            </Row>
            <Row className="justify-content-end">
              <Col xs={12}>
                {!isLoading && !isError && pageInfo && (
                  <Pagination aria-label="Page navigation example">
                    <PaginationItem disabled={pageInfo.currentPage <= 1}>
                      <PaginationLink
                        first
                        href="#"
                        onClick={() => nextPage(1)}
                      />
                    </PaginationItem>
                    <PaginationItem disabled={pageInfo.currentPage <= 1}>
                      <PaginationLink
                        previous
                        href="#"
                        onClick={() => nextPage(pageInfo.currentPage - 1)}
                      />
                    </PaginationItem>
                    {[...Array(dataPerPage || 1)].map((item, index) => (
                      <PaginationItem
                        active={index + 1 === pageInfo.currentPage}
                      >
                        <PaginationLink
                          href="#"
                          onClick={() => nextPage(index + 1)}
                        >
                          {index + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    <PaginationItem
                      disabled={pageInfo.currentPage >= dataPerPage}
                    >
                      <PaginationLink
                        next
                        href="#"
                        onClick={() => nextPage(pageInfo.currentPage + 1)}
                      />
                    </PaginationItem>
                    <PaginationItem
                      disabled={pageInfo.currentPage >= dataPerPage}
                    >
                      <PaginationLink
                        last
                        href="#"
                        onClick={() => nextPage(dataPerPage)}
                      />
                    </PaginationItem>
                  </Pagination>
                )}
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
