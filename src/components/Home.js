import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';

class Home extends Component {
    render() {
        return (
            <Container>
                <h1>Home</h1>
            </Container>
        );
    }
}
function mapStateToProps({ authedUser }) {
    return {
        authedUser
    }
}
export default connect(mapStateToProps)(Home);