import React, { Component } from 'react';
import { Container, Form, Row, Button, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { saveQuestion } from '../utils/api';

// The form is available at / add.
// The application shows the text “Would You Rather” and has a form for creating two options.
// Upon submitting the form, a new poll is created and the user is taken to the home page.
// The new polling question appears in the correct category on the home page.
class AddQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = { question: {} };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        console.log(event.target.value);
        const question = {};
        question[event.target.id] = event.target.value;
        // console.log(event.target.id);
        this.setState({
            question: question
        });


    }

    handleSubmit(event, author) {
        event.preventDefault();

        console.log("button clicked");
        const { from } = this.props.location.state || { pathname: "/" };
        const { dispatch } = this.props;
        const question = this.state.question;
        if (question !== null) {
            console.log("inside");
            console.log({ question });
            dispatch(saveQuestion({ author, ...question }));
            // saveQuestion(question)
            // this.props.history.push(from);
        }

        this.setState({ question: {} })
    }
    render() {
        const { authedUser } = this.props;

        return (
            <Container className="text-center">
                <h1>Add Question</h1>
                <h2>Would You Rather</h2>

                <Row>
                    <Col>
                        <Form onSubmit={(e, authedUser) => this.handleSubmit(e, authedUser)}>
                            <Form.Group controlId="optionOneText">
                                <Form.Label>Option 1</Form.Label>
                                <Form.Control type="text" placeholder="Enter option 1" onChange={this.handleChange} />
                            </Form.Group>

                            <Form.Group controlId="optionTwoText">
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

// export default AddQuestion;

function mapStateToProps({ authedUser }) {
    return {
        authedUser,
    }
}
export default withRouter(connect(mapStateToProps)(AddQuestion));
