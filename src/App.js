import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Components/Home/Home";
import MyTask from "./Components/MyTask/MyTask";
import MyTaskDetails from "./Components/MyTaskDetails/MyTaskDetails";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/mytask" component={MyTask} />
        <Route path="/mytaskdetails" component={MyTaskDetails} />
      </Switch>
    </div>
  );
}

export default App;
