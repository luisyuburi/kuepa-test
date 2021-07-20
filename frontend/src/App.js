import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import PrivateRoute from "./components/privateRouter";
import GuestRouter from "./components/guestRouter";

import Login from "./screens/login";
import Stream from "./screens/streaming";

import ProvideAuth from "./context/authContext";

export default function App() {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <PrivateRoute path="/stream" component={<Stream />} />
          <GuestRouter path="/register" component={<Users />} />
          <GuestRouter path="/" component={<Login />} />
        </Switch>
      </Router>
    </ProvideAuth>
  );
}

function Users() {
  return <h2>Users</h2>;
}
