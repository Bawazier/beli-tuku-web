import React, {useState} from "react";
import styled from 'styled-components';
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

const Navigation = () => {
  const [searchBy, setSearchBy] = useState('Name');
  return (
    <styles.Container fluid>
      <Container className="w-80">
        <Row>
          <Col xs={2} class="border">
            <styles.Logo src={require("../Assets/Images/Logo.png")} alt="" />
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
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search..."
                />
              </styles.SearchCol>
              <styles.SearchCol xs={1}>
                <styles.SearchButton>
                  <FaSearch />
                </styles.SearchButton>
              </styles.SearchCol>
            </styles.ContainerRow>
          </Col>
          <Col xs={4}>
            {true ? (
              <styles.ContainerRow>
                <Col xs={4}></Col>
                <Col xs={2}>
                  <FaShoppingCart className="text-white" />
                </Col>
                <Col xs={2}>
                  <FaBell className="text-white" />
                </Col>
                <Col xs={2}>
                  <FaWeixin className="text-white" />
                </Col>
                <Col xs={2}>
                  <styles.Img
                    src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                    alt="Card image cap"
                  />
                </Col>
              </styles.ContainerRow>
            ) : (
              <styles.ContainerRow>
                <Col xs={4}></Col>
                <Col xs={4}>
                  <Button block color="warning">
                    Login
                  </Button>
                </Col>
                <Col xs={4}>
                  <Button block outline color="warning">
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
    width: 150px;
    height: 50px;
  `,

  Img: styled.img`
    width: 100%;
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
