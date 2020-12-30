import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

class Question extends Component {
    render() {
        const { question } = this.props.location.state;
        return (
            <Container>
                <h1>Question</h1>
                <p>{question.id}</p>
            </Container>
        );
    }
}

export default Question;