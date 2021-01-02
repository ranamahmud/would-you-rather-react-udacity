import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
const PrivateRoute = ({ component: Children, authedUser, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        authedUser !== null ? (
          <Children {...props} />
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
      }
    />
  );
};

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default withRouter(connect(mapStateToProps)(PrivateRoute));