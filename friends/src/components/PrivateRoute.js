import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => 
  (
    <Route
      {...rest}
      render={props => 

        // is user authorized
       localStorage.getItem("authToken") ? (

          <Component {...props} /> // return Component if user is authorized
        ) : (
        // redirect to /login if not
      
          <Redirect to="/login" />
        )
      }
  />
);

export default PrivateRoute;