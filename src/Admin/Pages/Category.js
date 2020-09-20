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

import CategoryService from '../Services/CategoryService';

class Category extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            id: 0,
            name: '',
            key: [
                'id',
                'name',
            ],
            headTable: [
                'ID',
                'Name',
            ]
        }
    }

    resetInput = () => {
        this.setState({
            id: 0,
            name: '',
        })
    }

    changeInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    getCategory = () => {
        CategoryService.getCategory().then(res => {
            this.setState({ data: res.data.data })
        });
    }

    async componentDidMount() {
        await this.getCategory()
    }

    getCategoryById = (id) => {
        CategoryService.getCategoryById(id).then(res => {
            this.resetInput();
            this.setState({
                id: res.data.data[0].id,
                name: res.data.data[0].name,
            });
        });
    }

    createCategory = (event) => {
        event.preventDefault();
        const name = this.state.name;
        if (name.trim()) {
            const Category = {
                name
            }
            CategoryService.createCategory(Category).then(res => {
                if (!res.ok) {
                    const contentType = res.headers.get('content-type');
                    if (contentType.includes('json')) {
                        return res.json().then(error => Promise.reject(error.message));
                    } else {
                        return res.text().then(message => Promise.reject(message));
                    }
                }
            }).then(() => {
                this.getCategory();
                this.resetInput();
            });
        } else {
            console.log('Form not are required!');
        }
    }

    editCategory = (event) => {
        event.preventDefault();
        const name = this.state.name;
        if (name.trim()) {
            const Category = {
                name,
            }
            CategoryService.updateCategory(this.state.id, Category).then(res => {
                if (!res.ok) {
                    const contentType = res.headers.get('content-type');
                    if (contentType.includes('json')) {
                        return res.json().then(error => Promise.reject(error.message));
                    } else {
                        return res.text().then(message => Promise.reject(message));
                    }
                }
            }).then(() => {
                this.getCategory();
                this.resetInput();
            });
        } else {
            console.log('Form not are required!');
        }
    }

    deleteCategory = (id) => {
        console.log(id);
        CategoryService.deleteCategory(id).then(res => {
            console.log(res);
        }).then(() => {
            this.getCategory();
        });
    }

    render() {
        return (
            <>
                <NavBar />
                <Container className="mt-5 p-5 shadow-sm">
                    <Form onSubmit={this.state.id > 0 ? this.editCategory : this.createCategory} onReset={this.resetInput}>
                        <Row form>
                            <Col md={2}>
                                <FormGroup>
                                    <Label for="id">ID Category</Label>
                                    <Input onChange={this.changeInput} type="text" name="id" id="id" readOnly value={this.state.id} />
                                </FormGroup>
                            </Col>
                            <Col md={10}>
                                <FormGroup>
                                    <Label for="name">Name Category</Label>
                                    <Input onChange={this.changeInput} type="text" name="name" id="name" autoFocus required value={this.state.name} />
                                </FormGroup>
                            </Col>
                        </Row>
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
                <TableData list={this.state} delete={id => this.deleteCategory(id)} edit={id => this.getCategoryById(id)} />

            </>
        )
    }
}

export default Category;