import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";

interface AuthProps {
  component: any;
  path: string;
  loggedIn: boolean;
  exact: boolean;
}
const Auth = ({ component: Component, path, loggedIn, exact }: AuthProps) => (
  <Route
    path={path}
    exact={exact}
    render={(props) =>
      !loggedIn ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

const Protected = ({
  component: Component,
  path,
  loggedIn,
  exact,
}: AuthProps) => (
  <Route
    path={path}
    exact={exact}
    render={(props) =>
      loggedIn ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

const mapStateToProps = (state) => ({ loggedIn: Boolean(state.session.id) });
// @ts-ignore
export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

// @ts-ignore
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
