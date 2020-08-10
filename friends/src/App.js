import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import FriendsList from './components/FriendsList';
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import FriendsForm from "./components/FriendsForm";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
          <li>
            <Link to ="/friendsform">Form</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList} />
          <PrivateRoute exact path="/friendsform" component={FriendsForm} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
