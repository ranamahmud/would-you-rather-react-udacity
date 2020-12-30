import React, { Component } from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class QuestionDetail extends Component {
    render() {
        const { question } = this.props;
        return (


            <Col md={4}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
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

export default QuestionDetail;