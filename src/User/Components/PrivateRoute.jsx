import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, path, ...rest }) => {
  const auth = useSelector((state) => state.auth);
  return (
    <Route
      path={path}
      {...rest}
      render={(props) => {
        if (auth.token.length) {
          return <Component {...props} />;
        }
        return (
          <Redirect
            to={{
              pathname: "/login",
              state: {
                alert: "Login first!",
                color: "danger",
                location: props.location.pathname,
              },
            }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;
