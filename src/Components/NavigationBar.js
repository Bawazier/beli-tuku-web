import React from 'react';
import {Link} from 'react-router-dom';
import {
    Container,
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';

class NavigationBar extends React.Component {
    render() {
        return (
            <Container>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                    <Collapse navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link className="nav-link" to="/">Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link  className="nav-link" to="/episode">Episode</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </Container>
        )
    }
}

export default NavigationBar;