import React, { Component } from 'react'
import { Card, Container } from 'react-bootstrap';

export default class UserBoard extends Component {
    render() {
        const { user } = this.props;

        return (
            <Container>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{user.name}</Card.Title>
                        <Card.Text>
                            Questions answered: {Object.keys(user.answers).length}
                        </Card.Text>
                        <Card.Text>
                            Questions created: {user.questions.length}
                        </Card.Text>
                        <Card.Text>
                            {user.score}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        )
    }
}
