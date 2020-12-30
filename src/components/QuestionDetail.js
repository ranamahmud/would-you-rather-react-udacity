import React, { Component } from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class QuestionDetail extends Component {
    render() {
        const { question, users } = this.props;
        const avatarURL = users[question.author].avatarURL;
        return (


            <Col md={4}>
                <Card style={{ width: '18rem' }}>
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

                        <Link to={{
                            pathname: "/questions/" + question.id,
                            state: {
                                question: question
                            }
                        }} >
                            <Button variant="primary">View Poll</Button>
                        </Link>

                    </Card.Body>
                </Card>
            </Col >
        );
    }
}

function mapStateToProps({ users }) {
    return {

        users
    }
}
export default connect(mapStateToProps)(QuestionDetail);