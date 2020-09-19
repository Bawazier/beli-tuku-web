import React from 'react';
import { default as axios } from 'axios';

import CardProduct from '../Components/CardProduct';
import NavBar from '../Components/NavigationBar';
import ModalsProduct from '../Components/ModalsProduct';

class Category extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    getData = async () => {
        const {data} = await axios.get('http://localhost:5000/category/');
        this.setState({data: data.data})
    }

    async componentDidMount(){
        await this.getData();
    }

    render(){
        return(
            <React.Fragment>
                <NavBar />
                <CardProduct list={this.state} body={['id','name']}
                header={['ID', 'Name']} />
                <ModalsProduct />
            </React.Fragment>
        )
    }

}

export default Category;