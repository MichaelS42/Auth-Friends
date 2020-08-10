import React from "react";
import { Route, Redirect } from "react-router-dom";


const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        // is user authorized
        if (localStorage.getItem("authToken")) {
          return <Component />; // return Component if user is authorized
        }
        // redirect to /login if not
        console.log("redirecting to login");
        return <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;