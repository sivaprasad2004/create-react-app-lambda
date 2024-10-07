import React from "react";
import { Route, Redirect } from "react-router-dom";
import { auth } from "./firebase";  // Firebase Auth

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = auth.currentUser;

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
