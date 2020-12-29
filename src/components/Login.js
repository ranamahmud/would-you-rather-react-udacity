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
                <select>
                    {

                        users && Object.keys(users).map((item, index) => {
                            console.log({ item })
                            return (
                                <option value={users[item].name} key={index}>
                                    {users[item].name}
                                </option>
                            )
                        })
                    }
                </select>

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
