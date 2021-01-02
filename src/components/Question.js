import React, { Component, Fragment } from 'react';
import { Button, Card, Col, Container, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { handleAddAnswer } from '../actions/questions'
// When a poll is clicked on the home page, the following is shown:
// the text “Would You Rather”;
// the picture of the user who posted the polling question; and
// the two options.
// For answered polls, each of the two options contains the following:
// the text of the option;
// the number of people who voted for that option;
//     the percentage of people who voted for that option.

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: ''
        };

        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleOptionChange = changeEvent => {
        this.setState({
            answer: changeEvent.target.value
        });
    };

    handleSubmit = (event, authedUser, answer, qid) => {
        event.preventDefault();

        const { dispatch } = this.props;
        dispatch(handleAddAnswer({
            authedUser,
            qid,
            answer

        }))
        // return dispatch(saveQuestionAnswer(result));
        this.setState({
            answer: ''
        })
        this.props.history.push("/")
    };

    render() {
        const { question, answered } = this.props.location.state;
        const { users } = this.props;
        const { answer } = this.state;
        const { authedUser } = this.props;

        const avatarURL = users[question.author].avatarURL;
        const vote1 = question.optionOne.votes.length;
        const vote2 = question.optionTwo.votes.length;
        const percent1 = vote1 / (vote1 + vote2) * 100;
        const percent2 = vote2 / (vote1 + vote2) * 100;
        return (
            <Container>

                <Col className="d-flex justify-content-center">
                    <Card style={{ width: '18rem' }}
                        style={{ marginBottom: "15px" }}
                    >
                        <Card.Img variant="top" src={avatarURL} className="rounded-circle"
                            style={{
                                width: '50%',
                                // height: "50%"
                                marginLeft: "auto",
                                marginRight: "auto",
                                display: "block",
                                marginTop: "15px"
                            }}
                        />
                        <Card.Body>
                            <Card.Title>Would you rather</Card.Title>
                            <Card.Text>
                                Created by: {question.author}
                            </Card.Text>
                            {
                                answered === true ? (
                                    <Fragment>
                                        <Card.Text>
                                            {question.optionOne.text}
                                        </Card.Text>
                                        <Card.Text>
                                            Number of Votes: {vote1}
                                        </Card.Text>
                                        <Card.Text>
                                            Percentage of Votes: {Math.round(percent1, 2)}%
                                        </Card.Text>
                                        <Card.Text>
                                            {question.optionTwo.text}

                                        </Card.Text>
                                        <Card.Text>
                                            Number of Votes: {vote2}
                                        </Card.Text>
                                        <Card.Text>
                                            Percentage of Votes: {Math.round(percent2, 2)}%
                                        </Card.Text>
                                    </Fragment>

                                ) : (
                                        <Fragment>
                                            <Form onSubmit={(event) => this.handleSubmit(event, authedUser, answer, question.id)}>
                                                <div className="custom-control custom-radio">
                                                    <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" onChange={this.handleOptionChange} value="optionOne" />
                                                    <label className="custom-control-label" htmlFor="customRadio1">{question.optionOne.text}</label>
                                                </div>
                                                <div className="custom-control custom-radio">
                                                    <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" onChange={this.handleOptionChange} value="optionTwo" />
                                                    <label className="custom-control-label" htmlFor="customRadio2">{question.optionTwo.text}</label>
                                                </div>

                                                <Button variant="primary" type="submit">Submit</Button>


                                            </Form>
                                        </Fragment>

                                    )
                            }



                        </Card.Body>
                    </Card>
                </Col >

            </Container >
        );
    }
}

function mapStateToProps({ users, authedUser }) {
    return {

        users,
        authedUser

    }
}
export default connect(mapStateToProps)(Question);
