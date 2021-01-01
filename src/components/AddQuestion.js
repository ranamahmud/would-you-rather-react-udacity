import React, { Component } from 'react';
import { Container, Form, Row, Button, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { handleAddQuestion } from '../actions/questions';
import { saveQuestion } from '../utils/api';

// The form is available at / add.
// The application shows the text “Would You Rather” and has a form for creating two options.
// Upon submitting the form, a new poll is created and the user is taken to the home page.
// The new polling question appears in the correct category on the home page.
class AddQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            optionOneText: '',
            optionTwoText: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        // console.log(event.target.id);
        this.setState({
            [event.target.id]: event.target.value
        });
        console.log(this.state);


    }

    handleSubmit(event) {
        event.preventDefault();
        const { authedUser } = this.props;
        const author = authedUser;
        console.log({ author })
        console.log("button clicked");
        const { from } = this.props.location.state || { pathname: "/" };
        const { dispatch } = this.props;
        const optionOneText = this.state.optionOneText;
        const optionTwoText = this.state.optionTwoText;
        if (optionOneText !== '' && optionTwoText !== ''
            && author !== undefined
        ) {
            console.log("inside");
            console.log({ optionOneText, optionTwoText, author })
            // dispatch(saveQuestion({ optionOneText, optionTwoText, author }));
            dispatch(handleAddQuestion({ optionOneText, optionTwoText, author }));
            // saveQuestion(question)
            // this.props.history.push(from);
        }

        this.setState({
            optionOneText: '',
            optionTwoText: ''
        })
    }
    render() {
        return (
            <Container className="text-center">
                <h1>Add Question</h1>
                <h2>Would You Rather</h2>

                <Row>
                    <Col>
                        <Form onSubmit={(e) => this.handleSubmit(e)}>
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
