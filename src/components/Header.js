import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Container>
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/add" className="nav-link">Add Question</Link>
                        <Link to="/leaderboard" className="nav-link">Leaderboard</Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Header;