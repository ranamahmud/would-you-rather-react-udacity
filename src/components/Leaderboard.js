import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import UserBoard from './UserBoard';


// The Leaderboard is available at / leaderboard.
// Each entry on the leaderboard contains the following:
// the user’s name;
// the user’s picture;
// the number of questions the user asked; and
// the number of questions the user answered.
// Users are ordered in descending order based on the sum of the number of questions they’ve answered and the number of questions they’ve asked.
class Leaderboard extends Component {
    render() {
        const { users } = this.props;
        for (const id of Object.keys(users)) {
            const user = users[id];
            users[id].score = Object.keys(user.answers).length + user.questions.length;

        }
        const usersSorted = Object.values(users).sort((a, b) => b.score - a.score);

        return (
            <Container className="text-center">
                <h1>Leaderboard</h1>
                {
                    usersSorted.map(user => <UserBoard user={user} key={user.id} />)
                }
            </Container>
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
export default connect(mapStateToProps)(Leaderboard);
