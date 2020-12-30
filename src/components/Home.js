import React, { Component } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Router, Switch } from 'react-router-dom';
import Header from './Header';
import PrivateRoute from './PrivateRoute';
import QuestionDetail from './QuestionDetail';


//* The answered and unanswered polls are both available at the root.
//* The user can alternate between viewing answered and unanswered polls.
//* The unanswered questions are shown by default.
//* The name of the logged in user is visible on the page.
//* The user can navigate to the leaderboard.
//* The user can navigate to the form that allows the user to create a new poll.
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { answered: false };

        this.handleSwitch = this.handleSwitch.bind(this);
    }
    handleSwitch = event => {
        this.setState({ answered: !this.state.answered })
    }
    render() {
        const { answered } = this.state;
        const { authedUser, questions } = this.props;
        let answeredQuestions = Object.values(questions).filter(question =>
            question.optionOne.votes.indexOf(authedUser) > -1 ||
            question.optionTwo.votes.indexOf(authedUser) > -1
        )
        let unansweredQuestions = Object.values(questions).filter(question =>
            !(question.optionOne.votes.indexOf(authedUser) > -1 ||
                question.optionTwo.votes.indexOf(authedUser) > -1)
        )
        answeredQuestions = answeredQuestions.sort((a, b) => b.timestamp - a.timestamp)

        unansweredQuestions = unansweredQuestions.sort((a, b) => b.timestamp - a.timestamp)
        return (
            <Container>
                <Row>
                    <Button onClick={this.handleSwitch}>Answered</Button>
                    <Button onClick={this.handleSwitch}>Unanswered</Button>
                </Row>
                <Row>
                    <Col>
                        <h1>{answered === true ? "Answered" : "Not Answered"}</h1>
                    </Col>
                </Row>
                <Row>

                    {
                        answered === true ? (
                            answeredQuestions.map(question => <QuestionDetail question={question} key={question.id} answered={answered} />)
                        ) : (
                                unansweredQuestions.map(question => <QuestionDetail question={question} />)

                            )

                    }
                </Row>

            </Container >
        );
    }
}
function mapStateToProps({ authedUser, questions }) {
    return {
        authedUser,
        questions
    }
}
export default connect(mapStateToProps)(Home);