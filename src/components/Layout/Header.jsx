import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>
                    <Link className="navbar-brand" to="/">F-Tech</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link active" aria-current="page" to="/productos">Productos</Link>
                        <Link className="nav-link" to="/fabricantes-componentes">Fabricantes & Componentes</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
