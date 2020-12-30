import React, { Component } from 'react';
import { Card, Col, Button } from 'react-bootstrap';

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
                            <p>{question.optionOne.text}</p>
                            <p>{question.optionTwo.text}</p>
                            <p>{question.author}</p>
                        </Card.Text>
                        <Button variant="primary">View Details</Button>
                    </Card.Body>
                </Card>
            </Col>
        );
    }
}

export default QuestionDetail;