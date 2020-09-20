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

import UserService from '../Services/UserService';

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            id: 0,
            name: '',
            email: '',
            password: '',
            phone: '',
            gender: 'MALE',
            dateOfBirth: '',
            key: [
                'id',
                'name',
                'email',
                'password',
                'phone',
                'gender',
                'dateOfBirth',
            ],
            headTable: [
                'ID',
                'Name',
                'Email',
                'Password',
                'Phone',
                'Gender',
                'dateOfBirth'
            ]
        }
    }

    resetInput = () => {
        this.setState({
            id: 0,
            name: '',
            email: '',
            password: '',
            phone: '',
            dateOfBirth: '',
        })
    }

    changeInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    getUser = () => {
        UserService.getUser().then(res => {
            this.setState({ data: res.data.data })
        });
    }

    async componentDidMount() {
        await this.getUser()
    }

    getUserById = (id) => {
        UserService.getUserById(id).then(res => {
            this.resetInput();
            this.setState({
                id: res.data.data[0].id,
                name: res.data.data[0].name,
                email: res.data.data[0].email,
                password: res.data.data[0].password,
                phone: res.data.data[0].phone,
                gender: res.data.data[0].gender,
                dateOfBirth: res.data.data[0].dateOfBirth,
            });
        });
    }

    createUser = (event) => {
        event.preventDefault();
        const name = this.state.name;
        const email = this.state.email;
        const password = this.state.password;
        const phone = this.state.phone;
        const gender = this.state.gender;
        const dateOfBirth = this.state.dateOfBirth;
        if (name.trim() && email.trim() && password.trim() && phone.trim() && gender.trim()) {
            const User = {
                name,
                email,
                password,
                phone,
                gender,
                dateOfBirth
            }
            UserService.createUser(User).then(res => {
                if (!res.ok) {
                    const contentType = res.headers.get('content-type');
                    if (contentType.includes('json')) {
                        return res.json().then(error => Promise.reject(error.message));
                    } else {
                        return res.text().then(message => Promise.reject(message));
                    }
                }
            }).then(() => {
                this.getUser();
                this.resetInput();
            });
        } else {
            console.log('Form not are required!');
        }
    }

    editUser = (event) => {
        event.preventDefault();
        const name = this.state.name;
        const email = this.state.email;
        const password = this.state.password;
        const phone = this.state.phone;
        const gender = this.state.gender;
        const dateOfBirth = this.state.dateOfBirth;
        if (name.trim() && email.trim() && password.trim() && phone.trim() && gender.trim() && dateOfBirth.trim()) {
            const User = {
                name,
                email,
                password,
                phone,
                gender,
                dateOfBirth
            }
            UserService.updateUser(this.state.id, User).then(res => {
                if (!res.ok) {
                    const contentType = res.headers.get('content-type');
                    if (contentType.includes('json')) {
                        return res.json().then(error => Promise.reject(error.message));
                    } else {
                        return res.text().then(message => Promise.reject(message));
                    }
                }
            }).then(() => {
                this.getUser();
                this.resetInput();
            });
        } else {
            console.log('Form not are required!');
        }
    }

    deleteUser = (id) => {
        UserService.deleteUser(id).then(res => {
            console.log(res);
        }).then(() => {
            this.getUser();
        });
    }

    render() {
        return (
            <>
                <NavBar />
                <Container className="mt-5 p-5 shadow-sm">
                    <Form onSubmit={this.state.id > 0 ? this.editUser : this.createUser} onReset={this.resetInput}>
                        <Row form>
                            <Col md={2}>
                                <FormGroup>
                                    <Label for="id">ID User</Label>
                                    <Input onChange={this.changeInput} type="text" name="id" id="id" readOnly value={this.state.id} />
                                </FormGroup>
                            </Col>
                            <Col md={10}>
                                <FormGroup>
                                    <Label for="name">Name User</Label>
                                    <Input onChange={this.changeInput} type="text" name="name" id="name" autoFocus required value={this.state.name} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup row>
                            <Label for="email" sm={2}>Email</Label>
                            <Col sm={10}>
                                <Input onChange={this.changeInput} type="email" name="email" id="email" required value={this.state.email} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="password" sm={2}>Password</Label>
                            <Col sm={10}>
                                <Input onChange={this.changeInput} type="password" name="password" id="password" required value={this.state.password} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="phone" sm={2}>Phone</Label>
                            <Col sm={10}>
                                <Input onChange={this.changeInput} type="tel" name="phone" id="phone" required value={this.state.phone} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="gender" sm={2}>Gender</Label>
                            <Col sm={4}>
                                <Input onChange={this.changeInput} type="select" name="gender" id="gender" value={this.state.gender}>
                                    <option>MALE</option>
                                    <option>FEMALE</option>
                                </Input>
                            </Col>
                            <Label for="dateOfBirth" sm={2}>Date Of Birth</Label>
                            <Col sm={4}>
                                <Input onChange={this.changeInput} type="date" name="dateOfBirth" id="dateOfBirth" max='2017-12-31' required value={this.state.dateOfBirth} />
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
                <TableData list={this.state} delete={id => this.deleteUser(id)} edit={id => this.getUserById(id)} />
            </>
        );
    }
}

export default User;