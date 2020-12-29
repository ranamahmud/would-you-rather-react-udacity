import React, { Component } from 'react';
import { Container, Form, Row, Button, Col } from 'react-bootstrap';


// The form is available at / add.
// The application shows the text “Would You Rather” and has a form for creating two options.
// Upon submitting the form, a new poll is created and the user is taken to the home page.
// The new polling question appears in the correct category on the home page.
class AddQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        console.log(event.target.value);
        this.setState({ value: event.target.value });

    }

    handleSubmit(event) {
        const { from } = this.props.location.state || { pathname: "/" };
        const { dispatch } = this.props;
        const AUTHED_ID = this.state.value;
        if (AUTHED_ID !== '') {
            // dispatch(setAuthedUser(AUTHED_ID));
            this.props.history.push(from);
        }
        event.preventDefault();
    }
    render() {
        return (
            <Container className="text-center">
                <h1>Add Question</h1>
                <h2>Would You Rather</h2>

                <Row>
                    <Col>
                        <Form onSubmit={(e) => this.handleSubmit(e)}>
                            <Form.Group controlId="formOption1">
                                <Form.Label>Option 1</Form.Label>
                                <Form.Control type="text" placeholder="Enter option 1" onChange={this.handleChange} />
                            </Form.Group>

                            <Form.Group controlId="formOption2">
                                <Form.Label>Option 2</Form.Label>
                                <Form.Control type="text" placeholder="Enter option 2" onChange={this.handleChange} />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
  </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default AddQuestion;