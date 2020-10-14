import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Start from "./components/Start";
import Game from "./components/Game";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Start} />
        <Route path="/game/:name" component={Game} />
      </Switch>
    </Router>
  );
}

export default App;
