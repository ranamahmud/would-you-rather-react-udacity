import './App.css';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import Home from './components/Home';
import Question from './components/Question';
import AddQuestion from './components/AddQuestion';
import Leaderboard from './components/Leaderboard';
import { handleInitialData } from './actions/shared'
import Header from './components/Header';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <div>
          <Header />
          {/* <AuthButton />

        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul> */}

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="questions/:question_id">
              <Question />
            </Route>
            <Route path="/add">
              <AddQuestion />
            </Route>
            <Route path="/leaderboard">
              <Leaderboard />
            </Route>
            {/* <Route path="/public">
            <PublicPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute path="/protected">
            <ProtectedPage />
          </PrivateRoute> */}
          </Switch>
        </div>
      </Router>
    )

  }
}


// export default App;


function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)