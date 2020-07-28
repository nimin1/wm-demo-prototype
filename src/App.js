import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Components/Home/Home";
import MyTask from "./Components/MyTask/MyTask";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/mytask" component={MyTask} />
      </Switch>
    </div>
  );
}

export default App;
