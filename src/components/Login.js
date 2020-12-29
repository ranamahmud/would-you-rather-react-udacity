import React, { Component } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { setAuthedUser } from '../actions/authedUser'

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
        const AUTHED_ID = this.state.value;
        console.log({ AUTHED_ID })
        if (AUTHED_ID !== '') {
            this.props.setAuthedUser(AUTHED_ID)
        }
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
                                        <option value={users[item].id} key={users[item].id}>
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

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        // dispatching plain actions
        setAuthedUser: () => dispatch(setAuthedUser(ownProps.AUTHED_ID))
    }
}

function mapStateToProps({ users }) {
    return {
        users,
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
