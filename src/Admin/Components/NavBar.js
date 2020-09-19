import React from 'react';
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import logo from '../Assets/Images/logo-w-137-h-44.svg'

const NavBar = (props) => {
    return (
        <Container className="border-bottom">
            <Navbar color="light" className="text-center" light expand="md">
                <NavbarBrand href="/"><img src={logo} alt="Shoppi.id"/></NavbarBrand>
                <NavbarToggler />
                <Collapse navbar>
                    <Nav className="ml-auto text-center" navbar>
                        <NavItem>
                            <NavLink href="/admin/product/" className="font-weight-bold text-uppercase">Manage Product</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/admin/user/" className="font-weight-bold text-uppercase">Manage User</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/admin/category/" className="font-weight-bold text-uppercase">Manage Category</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/admin/cart/" className="font-weight-bold text-uppercase">Manage Cart</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </Container>
    )
}

export default NavBar;