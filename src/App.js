import './App.css';
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
function App() {
  return (
    <Router>
      <div>
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
  );
}

export default App;
