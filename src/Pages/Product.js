import React from 'react';
import { default as axios } from 'axios';
// import {useQuery} from 'react-router-dom';
// import { Container } from 'reactstrap';
import TableProduct from '../Components/TableProduct';
import NavBar from '../Components/NavigationBar';
import ModalsProduct from '../Components/ModalsProduct';
import FormInput from '../Components/FormInput';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            key: [
                'id',
                'name',
                'price',
                'created_at',
                'updated_at',
                'category_id',
                'description'
            ],
            headTable: [
                'ID',
                'Name',
                'Price',
                'Created Date',
                'Updated Date',
                'Category',
                'Description'
            ],
            page: 1,
            limit: 12,
            modalOpen: false,
        }
    }

    getData = async () => {
        const { data } = await axios.get(`http://localhost:5000/product?page=${this.state.page}&limit=${this.state.limit}`);
        this.setState({data: data.data});
    }

    deleteUser = async (id)=>{
        await axios.delete(`http://localhost:5000/product/${id}`)
        this.getData()
    }

    async componentDidMount() {
        await this.getData();
    }

    render() {
        return (
            <React.Fragment>
                <NavBar />
                <FormInput />
                <TableProduct list={this.state} deleteUser={id => this.deleteUser(id)} />
                <ModalsProduct />
            </React.Fragment>
        )
    }
}

export default Product;