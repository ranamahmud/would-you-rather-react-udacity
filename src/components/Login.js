import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

class Login extends Component {
    render() {
        const { users } = this.props;
        console.log(users);
        return (
            <Container>
                <h1>Login</h1>
                {
                    users.length > 0 && users.map(user => {
                        return (
                            <p>{user.name}</p>
                        )
                    })
                }
            </Container>
        );
    }
}



function mapStateToProps({ users }) {
    return {
        users,
    }
}

export default withRouter(connect(mapStateToProps)(Login));
