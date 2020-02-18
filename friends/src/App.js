import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import FriendList from "./components/FriendList";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <div className="App">
      <div>
        {/* Routing is Working */}
        <Switch>
          <PrivateRoute path="/protected" component={FriendList} />
          <Route path="/" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
