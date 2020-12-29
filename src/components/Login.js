import React, { Component } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {

        this.setState({ value: event.target.value });
        console.log('A name was submitted: ' + this.state.value);

    }

    handleSubmit(event) {
        console.log('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        const { users } = this.props;
        return (
            <Container>

                <Form onSubmit={this.handleSubmit}>


                    <Form.Group controlId="exampleForm.ControlSelect1" >
                        <Form.Label>Login</Form.Label>
                        <Form.Control as="select" value={this.state.value} onChange={this.handleChange}>
                            <option value="" ></option>

                            {

                                users && Object.keys(users).map((item, index) => {

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
