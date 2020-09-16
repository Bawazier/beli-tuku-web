import React from 'react';
import { default as axios } from 'axios';
import {
    Jumbotron,
    Container,
    Row,
    Col,
    Card,
    CardText,
    CardBody,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';
import NavBar from '../Components/NavigationBar';

class Episode extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {},
            modalOpen: false,
            openedEpisode: {}
        }
    }
    getData = async (url) => {
        const data = await fetch(url);
        const result = await data.json();
        return result;
    }

    openModal = async (url) => {
        const { data } = await axios.get(url)
        this.setState({ modalOpen: true, openedEpisode: data });
    }

    async componentDidMount() {
        // const data = await this.getData('http://rickandmortyapi.com/api/episode')
        const { data } = await axios.get('http://rickandmortyapi.com/api/episode');
        this.setState({ data })
    }

    render() {
        const { data } = this.state;
        return (
            <React.Fragment>
                <NavBar />
                <Container>
                    <Jumbotron className="p-5 mt-5">
                        <h1>List of Rick and Morty Episode</h1>
                    </Jumbotron>
                    <Row>
                        {Object.keys(data).length && data.results.map(item => {
                            return (
                                <Col md={3}>
                                    <Card className="shadow mt-3">
                                        <CardBody>
                                            <CardText>{item.episode}: {item.name}</CardText>
                                            <Button onClick={() => this.openModal(`${item.url}`)}>Detail</Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
                <Modal isOpen={this.state.modalOpen}>
                    <ModalHeader>Detail</ModalHeader>
                    <ModalBody>
                        <Row>
                            <Col md={12}>Date: {this.state.openedEpisode.air_date}</Col>
                            <Col md={12}>Name: {this.state.openedEpisode.name}</Col>
                            <Col md={12}>Episode: {this.state.openedEpisode.episode}</Col>
                        </Row>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={() => this.setState({ modalOpen: false })}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </React.Fragment>
        )
    }
}

export default Episode;