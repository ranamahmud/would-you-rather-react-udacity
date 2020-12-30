import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import Header from './Header';


// The answered and unanswered polls are both available at the root.
// The user can alternate between viewing answered and unanswered polls.
// The unanswered questions are shown by default.
// The name of the logged in user is visible on the page.
// The user can navigate to the leaderboard.
// The user can navigate to the form that allows the user to create a new poll.
class Home extends Component {

    render() {
        const { users } = this.props;
        return (
            <Container>
                <h1>Home</h1>
            </Container>
        );
    }
}
function mapStateToProps({ authedUser, users }) {
    return {
        authedUser,
        users
    }
}
export default connect(mapStateToProps)(Home);