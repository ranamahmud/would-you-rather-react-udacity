import React, { Component } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

class Login extends Component {
    render() {
        const { users } = this.props;
        console.log(users);
        return (
            <Container>

                <Form>


                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Login</Form.Label>
                        <Form.Control as="select">
                            {

                                users && Object.keys(users).map((item, index) => {
                                    console.log({ item })
                                    return (
                                        <option value={users[item].name} key={users[item].id}>
                                            {users[item].name}
                                        </option>
                                    )
                                })
                            }
                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
  </Button>
                </Form>
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
