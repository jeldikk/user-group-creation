import React from 'react'

import {Navbar, Nav, Container} from 'react-bootstrap'

import {Link} from "react-router-dom"

const Header = () => {

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Link className="navbar-brand" to="/">User Group Management</Link>
                <Nav className="ml-auto">
                    <Link className="nav-link" to="/create"><span className="mx-1">&#10010;</span>New Group</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header
