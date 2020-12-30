import React, { Component } from 'react';
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
        const { question } = this.props.location.state;
        const { users } = this.props;
        const avatarURL = users[question.author].avatarURL;

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
                                {question.optionOne.text}
                            </Card.Text>
                            <Card.Text>
                                {question.optionTwo.text}
                            </Card.Text>
                            <Card.Text>
                                {question.author}
                            </Card.Text>

                            <Button variant="primary">View Poll</Button>

                        </Card.Body>
                    </Card>
                </Col >

            </Container>
        );
    }
}

function mapStateToProps({ users }) {
    return {

        users
    }
}
export default connect(mapStateToProps)(Question);
