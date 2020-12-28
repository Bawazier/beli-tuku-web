import React, {useState} from "react";
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Input,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import { FaSearch, FaShoppingCart, FaBell, FaWeixin } from "react-icons/fa";

//Actions
import HomeActions from '../Redux/actions/home';

const Navigation = () => {
  const { REACT_APP_API_URL } = process.env;
  const auth = useSelector((state) => state.auth);
  const { data } = useSelector((state) => state.account);
  const [searchBy, setSearchBy] = useState('Name');
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handlingSearch = async () => {
    if (searchBy === "Name") await dispatch(HomeActions.catalogSearch(searchValue));
    if (searchBy === "Categories") await dispatch(HomeActions.catalogSearch("", searchValue));
    if (searchBy === "Colors") await dispatch(HomeActions.catalogSearch("", "", searchValue));
    if (searchBy === "Stores") await dispatch(HomeActions.catalogSearch("", "", "", "", searchValue));
    history.push("/catalog");
  }

  return (
    <styles.Container fluid>
      <Container className="w-80">
        <Row>
          <Col xs={2} class="border">
            <Link to="/">
              <styles.Logo src={require("../Assets/Images/Logo.png")} alt="" />
            </Link>
          </Col>
          <Col xs={6}>
            <styles.ContainerRow>
              <styles.SearchCol xs={3}>
                <styles.SearchDropdown>
                  <UncontrolledDropdown setActiveFromChild>
                    <styles.SearchDropdownToggle tag="a" caret>
                      Search By {searchBy}
                    </styles.SearchDropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem onClick={() => setSearchBy("Name")}>
                        Name
                      </DropdownItem>
                      <DropdownItem onClick={() => setSearchBy("Categories")}>
                        Categories
                      </DropdownItem>
                      <DropdownItem onClick={() => setSearchBy("Stores")}>
                        Stores
                      </DropdownItem>
                      <DropdownItem onClick={() => setSearchBy("Colors")}>
                        Colors
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </styles.SearchDropdown>
              </styles.SearchCol>
              <styles.SearchCol xs={8}>
                <styles.SearchInput
                  onChange={(event) => setSearchValue(event.target.value)}
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search..."
                />
              </styles.SearchCol>
              <styles.SearchCol xs={1}>
                <styles.SearchButton onClick={handlingSearch}>
                  <FaSearch />
                </styles.SearchButton>
              </styles.SearchCol>
            </styles.ContainerRow>
          </Col>
          <Col xs={4}>
            {auth.token.length ? (
              <styles.ContainerRow>
                <Col xs={4}></Col>
                <Col xs={2}>
                  <Link to="/bag">
                    <FaShoppingCart className="w-100 text-white" />
                  </Link>
                </Col>
                <Col xs={2}>
                  <FaBell className="w-100 text-muted" />
                </Col>
                <Col xs={2}>
                  <FaWeixin className="w-100 text-muted" />
                </Col>
                <Col xs={2}>
                  <Link to="/profile">
                    <styles.Img
                      src={data.picture ? REACT_APP_API_URL + '/' + data.picture : require("../Assets/Images/PrimaryImage.png")}
                      alt="Card image cap"
                    />
                  </Link>
                  
                </Col>
              </styles.ContainerRow>
            ) : (
              <styles.ContainerRow>
                <Col xs={4}></Col>
                <Col xs={4}>
                  <Button block color="warning" onClick={() => history.push('/login')}>
                    Login
                  </Button>
                </Col>
                <Col xs={4}>
                  <Button block outline color="warning" onClick={() => history.push('/signup')}>
                    Signup
                  </Button>
                </Col>
              </styles.ContainerRow>
            )}
          </Col>
        </Row>
      </Container>
    </styles.Container>
  );
};

const styles = {
  Container: styled(Container)`
    background-color: #102939;
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  Logo: styled.img`
    width: 120px;
    height: 50px;
  `,

  Img: styled.img`
    width: 95%;
    height: 25px;
    border-radius: 100%;
  `,

  ContainerRow: styled(Row)`
    align-items: center;
    height: 100%;
  `,

  SearchCol: styled(Col)`
    width: 100%;
    height: 90%;
    padding: 0;
    margin: 0;
  `,

  SearchInput: styled(Input)`
    width: 100%;
    height: 100%;
    border-radius: 0;
  `,

  SearchButton: styled(Button)`
    width: 100%;
    height: 100%;
    border-radius: 0;
    background-color: #1bc29b;
  `,

  SearchDropdown: styled.div`
    width: 100%;
    height: 100%;
    padding: 0 10px;
    background-color: #1bc29b;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  `,

  SearchDropdownToggle: styled(DropdownToggle)`
    color: #102939;
    font-size: 14px;
    font-weight: 600;
  `,
};

export default Navigation;
