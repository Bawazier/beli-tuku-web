import React from 'react';
import {
    Container,
    Col,
    Row,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

import NavBar from '../Components/NavBar';
import TableData from '../Components/TableData';

import ProductService from '../Services/ProductService';
import CategoryService from '../Services/CategoryService';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            id: 0,
            name: '',
            price: '',
            category: '1',
            description: '',
            dataCategoryId: [],
            key: [
                'id',
                'name',
                'price',
                // 'created_at',
                // 'updated_at',
                'category_id',
                // 'description'
            ],
            headTable: [
                'ID',
                'Name',
                'Price',
                // 'Created At',
                // 'Updated At',
                'Category ID',
                // 'Description'
            ]
        }
    }

    getCategoryId = () => {
        CategoryService.getCategory().then(res => {
            this.setState({dataCategoryId: res.data.data.map(item => item.id)});
        })
    }

    resetInput = () => {
        this.setState({
            id: 0,
            name: '',
            price: '',
            category: '1',
            description: ''
        })
    }

    changeInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    async componentDidMount() {
        await this.getProduct();
        await this.getCategoryId();
    }

    getProduct = () => {
        ProductService.getProduct().then(res => {
            this.setState({ data: res.data.data })
        });
    }

    createProduct = (event) => {
        event.preventDefault();
        const name = this.state.name;
        const price = parseInt(this.state.price);
        const categoryId = parseInt(this.state.category);
        const description = this.state.description;
        if (name.trim() && price && categoryId && description.trim()) {
            const product = {
                name,
                price,
                categoryId,
                description
            }
            ProductService.createProduct(product).then(res => {
                if (!res.ok) {
                    const contentType = res.headers.get('content-type');
                    if (contentType.includes('json')) {
                        return res.json().then(error => Promise.reject(error.message));
                    } else {
                        return res.text().then(message => Promise.reject(message));
                    }
                }
            }).then(() => {
                this.getProduct();
                this.resetInput();
            });
        } else {
            console.log('Form not are required!');
        }
    }

    deleteProduct = (id) => {
        ProductService.deleteProduct(id).then(res => {
            console.log(res);
        }).then(() => {
            this.getProduct();
        });
    }

    getProductById = (id) => {
        ProductService.getProductById(id).then(res => {
            this.resetInput();
            this.setState({
                id: res.data.data[0].id,
                name: res.data.data[0].name,
                price: res.data.data[0].price,
                category: res.data.data[0].categoryId,
                description: res.data.data[0].description
            });
        });
    }

    editProduct = (event) => {
        event.preventDefault();
        const name = this.state.name;
        const price = parseInt(this.state.price);
        const categoryId = parseInt(this.state.category);
        const description = this.state.description;
        console.log(name, price, categoryId, description);
        if (name.trim() && price && categoryId && description.trim()) {
            const product = {
                name,
                price,
                categoryId,
                description
            }
            ProductService.updateProduct(this.state.id, product).then(res => {
                if (!res.ok) {
                    const contentType = res.headers.get('content-type');
                    if (contentType.includes('json')) {
                        return res.json().then(error => Promise.reject(error.message));
                    } else {
                        return res.text().then(message => Promise.reject(message));
                    }
                }
            }).then(() => {
                this.getProduct();
                this.resetInput();
            });
        } else {
            console.log('Form not are required!');
        }
    }

    render() {
        return (
            <>
                <NavBar />
                <Container className="mt-5 p-5 shadow-sm">
                    <Form onSubmit={this.state.id > 0 ? this.editProduct : this.createProduct} onReset={this.resetInput}>
                        <Row form>
                            <Col md={2}>
                                <FormGroup>
                                    <Label for="id">ID Product</Label>
                                    <Input onChange={this.changeInput} type="text" name="id" id="id" readOnly value={this.state.id} />
                                </FormGroup>
                            </Col>
                            <Col md={10}>
                                <FormGroup>
                                    <Label for="name">Name Product</Label>
                                    <Input onChange={this.changeInput} type="text" name="name" id="name" autoFocus required value={this.state.name} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup row>
                            <Label for="description" sm={2}>Description Product</Label>
                            <Col sm={10}>
                                <Input onChange={this.changeInput} type="textarea" name="description" id="description" required value={this.state.description} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="price" sm={2}>Price</Label>
                            <Col md={4}>
                                <Input onChange={this.changeInput} type="text" name="price" id="price" required value={this.state.price} />
                            </Col>
                            <Label for="category" sm={2}>Category</Label>
                            <Col md={4}>
                                <Input onChange={this.changeInput} type="select" name="category" id="category" required value={this.state.category}>
                                    {this.state.dataCategoryId.map(item => {
                                        return(
                                            <option>{item}</option>
                                        )
                                    })}
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={6} className="text-center">
                                <Input type="submit" className="bg-success text-white font-weight-bold" size="lg" value={this.state.id > 0 ? "UPDATE" : "INSERT"} />
                            </Col>
                            <Col md={6} className="text-center">
                                <Input type="reset" className="bg-secondary text-white font-weight-bold" size="lg" value="RESET" disabled={this.state.id > 0 ? false : true} />
                            </Col>
                        </FormGroup>

                    </Form>
                </Container>
                <TableData list={this.state} delete={id => this.deleteProduct(id)} edit={id => this.getProductById(id)} />
            </>
        )
    }
}

export default Product;