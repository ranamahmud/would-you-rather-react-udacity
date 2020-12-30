import React, { Component } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Router, Switch } from 'react-router-dom';
import Header from './Header';
import PrivateRoute from './PrivateRoute';


// The answered and unanswered polls are both available at the root.
// The user can alternate between viewing answered and unanswered polls.
// The unanswered questions are shown by default.
// The name of the logged in user is visible on the page.
// The user can navigate to the leaderboard.
// The user can navigate to the form that allows the user to create a new poll.
class Home extends Component {

    render() {
        const { authedUser, users, questions } = this.props;

        const userQuestions = Object.values(questions).filter(question =>
            question.optionOne.votes.indexOf(authedUser) > -1 ||
            question.optionTwo.votes.indexOf(authedUser) > -1
        )
        return (
            <Container>
                <h1>Home</h1>
                <Row>
                    <Button>Answered</Button>
                    <Button>Unanswered</Button>
                </Row>
                <Row>

                </Row>

                <p>{userQuestions.length}</p>
            </Container >
        );
    }
}
function mapStateToProps({ authedUser, users, questions }) {
    return {
        authedUser,
        users,
        questions
    }
}
export default connect(mapStateToProps)(Home);