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

import CartService from '../Services/CartService';
import UserService from '../Services/UserService';
import ProductService from '../Services/ProductService';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            id: 0,
            user_id: 0,
            product_id: 0,
            quantity: 1,
            totalPrice: 0,
            dataUserId: [],
            dataProductId: [],
            key: [
                'id',
                'user_id',
                'product_id',
                'quantity',
                'totalPrice',
            ],
            headTable: [
                'ID',
                'ID User',
                'ID Product',
                'Quantity',
                'Total Price',
            ]
        }
        this.getProductId();
        this.getUserId()
    }

    //  Foreign Key
    getUserId = () => {
        UserService.getUser().then(res => {
            this.setState({ dataUserId: res.data.data.map(item => item.id), user_id: res.data.data[0].id })
        });
    }

    getProductId = () => {
        ProductService.getProduct().then(res => {
            this.setState({ dataProductId: res.data.data.map(item => item.id), product_id: res.data.data[0].id })
        });
    }

    setTotalPrice = (event) => {
        ProductService.getProduct().then(res => {
            res.data.data.map(item => {
                if (item.id === this.state.product_id) {
                    this.setState({ totalPrice: item.price * this.state.quantity })
                }
                return this.state.totalPrice;
            });
        })
        return this.changeInput(event);
    }

    resetInput = () => {
        this.setState({
            id: 0,
            quantity: 1,
            totalPrice: 0,
        })
    }

    changeInput = (event) => {
        this.setState({
            [event.target.name]: parseInt(event.target.value)
        })
    }

    getCart = () => {
        CartService.getCart().then(res => {
            this.setState({ data: res.data.data })
        });
    }

    async componentDidMount() {
        await this.getCart();
    }

    getCartById = (id) => {
        CartService.getCartById(id).then(res => {
            this.resetInput();
            this.state.dataProductId.map(item => {
                if (item === res.data.data[0].product_id) {
                    this.state.dataUserId.map(value => {
                        if (value === res.data.data[0].user_id) {
                            this.setState({
                                id: res.data.data[0].id,
                                user_id: res.data.data[0].user_id,
                                product_id: res.data.data[0].product_id,
                                quantity: res.data.data[0].quantity,
                                totalPrice: res.data.data[0].totalPrice,
                            });
                        }
                        return console.log(value === res.data.data[0].user_id)
                    })
                }
                return console.log(item === res.data.data[0].product_id)
            });
        });
    }

    createCart = (event) => {
        event.preventDefault();
        const user_id = parseInt(this.state.user_id);
        const product_id = parseInt(this.state.product_id);
        const quantity = this.state.quantity;
        if (user_id && product_id && quantity) {
            const Cart = {
                user_id,
                product_id,
                quantity,
            }
            CartService.createCart(Cart).then(res => {
                if (!res.ok) {
                    const contentType = res.headers.get('content-type');
                    if (contentType.includes('json')) {
                        return res.json().then(error => Promise.reject(error.message));
                    } else {
                        return res.text().then(message => Promise.reject(message));
                    }
                }
            }).then(() => {
                this.getCart();
                this.resetInput();
            });
        } else {
            console.log('Form not are required!');
        }
    }

    editCart = (event) => {
        event.preventDefault();
        const quantity = this.state.quantity;
        if (quantity) {
            const Cart = {
                quantity,
            }
            CartService.updateCart(this.state.id, Cart).then(res => {
                if (!res.ok) {
                    const contentType = res.headers.get('content-type');
                    if (contentType.includes('json')) {
                        return res.json().then(error => Promise.reject(error.message));
                    } else {
                        return res.text().then(message => Promise.reject(message));
                    }
                }
            }).then(() => {
                this.getCart();
                this.resetInput();
            });
        } else {
            console.log('Form not are required!');
        }
    }

    deleteCart = (id) => {
        CartService.deleteCart(id).then(res => {
            console.log(res);
        }).then(() => {
            this.getCart();
        });
    }

    render() {
        return (
            <>
                <NavBar />
                <Container className="mt-5 p-5 shadow-sm">
                    <Form onSubmit={this.state.id > 0 ? this.editCart : this.createCart} onReset={this.resetInput}>
                        <Row form>
                            <Col md={2}>
                                <FormGroup>
                                    <Label for="id">ID Cart</Label>
                                    <Input onChange={this.changeInput} type="text" name="id" id="id" readOnly value={this.state.id} />
                                </FormGroup>
                            </Col>
                            <Col md={5}>
                                <FormGroup>
                                    <Label for="user_id">ID User</Label>
                                    <Input onChange={this.changeInput} type="select" name="user_id" id="user_id" disabled={this.state.id > 0 ? true : false} autoFocus required value={this.state.user_id}>
                                        {this.state.dataUserId.map(item => {
                                            return (
                                                <option>{item}</option>
                                            )
                                        })}
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md={5}>
                                <FormGroup>
                                    <Label for="product_id">ID Product</Label>
                                    <Input onChange={this.changeInput} type="select" name="product_id" id="product_id" disabled={this.state.id > 0 ? true : false} autoFocus required value={this.state.product_id}>
                                        {this.state.dataProductId.map(item => {
                                            return (
                                                <option>{item}</option>
                                            )
                                        })}
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup row>
                            <Label for="quantity" sm={2}>Quantity</Label>
                            <Col sm={4}>
                                <Input onChange={this.setTotalPrice} type="number" name="quantity" id="quantity" required value={this.state.quantity} />
                            </Col>
                            <Label for="totalPrice" sm={2}>Total Price</Label>
                            <Col sm={4}>
                                <Input onChange={this.changeInput} type="number" name="totalPrice" id="totalPrice" readOnly value={this.state.totalPrice} />
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
                <TableData list={this.state} delete={id => this.deleteCart(id)} edit={id => this.getCartById(id)} />
            </>
        );
    }

}

export default Cart;