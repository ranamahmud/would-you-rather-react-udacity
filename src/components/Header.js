import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = (props) => {

    const { users, authedUser } = props;

    return (
        <Container>
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/add" className="nav-link">Add Question</Link>
                        <Link to="/leaderboard" className="nav-link">Leaderboard</Link>
                        <Nav.Link href="#" className="disabled">{authedUser && users[authedUser].name}</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

function mapStateToProps({ authedUser, users }) {
    return {
        authedUser,
        users
    }
}
export default connect(mapStateToProps)(Header);