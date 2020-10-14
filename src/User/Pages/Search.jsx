import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col } from "reactstrap";

import NavBarComponent from "../Components/NavBar/index";
import CardComponent from "../Components/Card/index";

import HomeActions from "../Redux/actions/home";

export class Search extends Component {
    componentDidMount(){
        
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    search: state.productsSearch
})

const mapDispatchToProps = {
  search: HomeActions.search,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search)
