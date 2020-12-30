import React, { Fragment } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { setAuthedUser } from '../actions/authedUser'

const Header = (props) => {

    const { users, authedUser } = props;
    const logout = () => {
        const AUTHED_ID = null;
        props.dispatch(setAuthedUser(AUTHED_ID));
        props.history.push("/login");

    }
    return (
        <Container>
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/add" className="nav-link">Add Question</Link>
                        <Link to="/leaderboard" className="nav-link">Leaderboard</Link>

                        {authedUser &&
                            <Fragment>
                                <Nav.Link className="nav-link disabled">{users[authedUser].name}</Nav.Link>
                                <Nav.Link className="nav-link"><button onClick={logout}>Logout</button></Nav.Link>
                            </Fragment>
                        }
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </Container >
    );
};

function mapStateToProps({ authedUser, users }) {
    return {
        authedUser,
        users
    }
}
export default withRouter(connect(mapStateToProps)(Header));