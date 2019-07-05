import React, { Component } from 'react'

import Navbar from "react-bootstrap/Navbar";
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";


class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">ToDo APP</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        {/* <Link to="/tasks">tasks</Link>
                        <Link to="/bout">about</Link> */}
                        <Nav.Link href="/tasks">Tasks</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/users">Users</Nav.Link>
                        <NavDropdown title="Management" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/tasks">tasks</NavDropdown.Item>
                            <NavDropdown.Item href="/about">about</NavDropdown.Item>

                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#/relatorios">Reports</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            @frotaadriano
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>spaceBelowNavStyle
            </Navbar>
        );
    }
}

export default NavBar; 