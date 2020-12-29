import React, { Component } from 'react';
import { Container, Form, Row, Button, Col } from 'react-bootstrap';


// The form is available at / add.
// The application shows the text “Would You Rather” and has a form for creating two options.
// Upon submitting the form, a new poll is created and the user is taken to the home page.
// The new polling question appears in the correct category on the home page.
class AddQuestion extends Component {
    render() {
        return (
            <Container className="text-center">
                <h1>Add Question</h1>
                <h2>Would You Rather</h2>

                <Row>
                    <Col>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Option 1</Form.Label>
                                <Form.Control type="text" placeholder="Enter option 1" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Option 2</Form.Label>
                                <Form.Control type="text" placeholder="Enter option 2" />
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