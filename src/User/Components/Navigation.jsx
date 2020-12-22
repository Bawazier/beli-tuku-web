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

import { FaSearch } from "react-icons/fa";

const Navigation = () => {
  const [searchBy, setSearchBy] = useState('Name');
  return (
    <styles.Container fluid>
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
              <styles.SearchButton><FaSearch /></styles.SearchButton>
            </styles.SearchCol>
          </styles.ContainerRow>
        </Col>
        <Col xs={3}>
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
        </Col>
      </Row>
    </styles.Container>
  );
};

const styles = {
  Container: styled(Container)`
    background-color: #102939;
    padding-top: 10px;
    padding-bottom: 10px;
  `,
  Logo: styled.img`
    width: 150px;
    height: 50px;
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
