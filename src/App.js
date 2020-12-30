import './App.css';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Question from './components/Question';
import AddQuestion from './components/AddQuestion';
import Leaderboard from './components/Leaderboard';
import { handleInitialData } from './actions/shared'
import Header from './components/Header';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

class App extends Component {
  componentDidMount() {
    const AUTHED_ID = null;
    this.props.dispatch(handleInitialData(AUTHED_ID))

  }
  render() {
    const { users } = this.props;
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute path="questions/:question_id" component={Question} />

            <PrivateRoute path="/add" component={AddQuestion} />
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/leaderboard" component={Leaderboard} />
          </Switch>
        </div>
      </Router>
    )

  }
}


// export default App;


function mapStateToProps({ authedUser, users, questions }) {
  return {
    loading: authedUser === null,
    users,
    questions
  }
}

export default connect(mapStateToProps)(App)
// export default connect()(App)