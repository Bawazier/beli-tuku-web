import React from 'react';
import NavBar from '../Components/NavBar';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            modalOpen: false,
            id: '',
            name: '',
            email: ''
        }
    }

    async componentDidMount() {
        await this.getData()
    }
    getData = async () => {
        const { data } = await axios.get('http://localhost:8080/users')
        this.setState({ data: data.data })
    }
    editUser = async (id) => {
        const { data } = await axios.get(`http://localhost:8080/users/${id}`)
        this.setState({ modalOpen: true, ...data.data }, () => {
            console.log('ok')
        })
    }

    changeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    formSubmit = async (e) => {
        e.preventDefault()
        await axios.put(`http://localhost:8080/users/${this.state.id}`, qs.stringify({ name: this.state.name, email: this.state.email }))
        this.setState({ modalOpen: false }, async () => {
            await this.getData()
        })
    }

    deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/users/${id}`)
        this.setState({
            modalOpen: false
        }, () => {
            this.getData()
        })
    }

    render() {
        return (
            <>
                <NavBar />
            </>
        )
    }
}

export default Product;