import React, { Component } from 'react'
import { Card, Col, Container } from 'react-bootstrap';

export default class UserBoard extends Component {
    render() {
        const { user } = this.props;

        return (
            <Container>
                <Col className="d-flex justify-content-center">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={user.avatarURL} className="rounded-circle"
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
                            <Card.Title>{user.name}</Card.Title>
                            <Card.Text>
                                Questions answered: {Object.keys(user.answers).length}
                            </Card.Text>
                            <Card.Text>
                                Questions created: {user.questions.length}
                            </Card.Text>
                            <Card.Text>
                                Score:   {user.score}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Container>
        )
    }
}

