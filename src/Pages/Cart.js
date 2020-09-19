import React from 'react';
import { default as axios } from 'axios';

import CardProduct from '../Components/CardProduct';
import NavBar from '../Components/NavigationBar';
import ModalsProduct from '../Components/ModalsProduct';

class Cart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    getData = async () => {
        const {data} = await axios.get('http://localhost:5000/cart/');
        this.setState({data: data.data})
    }

    async componentDidMount(){
        await this.getData();
    }

    render(){
        return(
            <React.Fragment>
                <NavBar />
                <CardProduct list={this.state} body={['id','user_id', 'product_id', 'quantity', 'totalPrice']}
                header={['ID', 'User ID', 'Product ID', 'Quantity', 'Total Price']} />
                <ModalsProduct />
            </React.Fragment>
        )
    }

}

export default Cart;