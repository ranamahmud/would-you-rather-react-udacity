import React, { Component, Fragment } from 'react';
import { Button, Card, Col, Container } from 'react-bootstrap';
import { connect } from 'react-redux';

// When a poll is clicked on the home page, the following is shown:
// the text “Would You Rather”;
// the picture of the user who posted the polling question; and
// the two options.
// For answered polls, each of the two options contains the following:
// the text of the option;
// the number of people who voted for that option;
//     the percentage of people who voted for that option.

class Question extends Component {
    render() {
        const { question, answered } = this.props.location.state;
        const { users } = this.props;
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
                                            Percentage of Votes: {percent1}%
                                        </Card.Text>
                                        <Card.Text>
                                            {question.optionTwo.text}

                                        </Card.Text>
                                        <Card.Text>
                                            Number of Votes: {vote2}
                                        </Card.Text>
                                        <Card.Text>
                                            Percentage of Votes: {percent2}%
                                        </Card.Text>
                                    </Fragment>

                                ) : (
                                        <Fragment>
                                            <Card.Text>
                                                {question.optionOne.text}
                                            </Card.Text>
                                            <Card.Text>
                                                {question.optionTwo.text}
                                            </Card.Text>
                                        </Fragment>

                                    )
                            }
                            <Card.Text>
                                {question.author}
                            </Card.Text>

                            <Button variant="primary">View Poll</Button>

                        </Card.Body>
                    </Card>
                </Col >

            </Container >
        );
    }
}

function mapStateToProps({ users }) {
    return {

        users
    }
}
export default connect(mapStateToProps)(Question);
