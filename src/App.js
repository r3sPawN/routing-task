import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./components/TodoList.jsx";
import { TodoList } from "./components/TodoList.jsx";
import "./components/employees";
import { Employees } from "./components/employees";

function App() {
  return (
    <Router>
      <div className="nav-bar">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/tasks">Tasks</Link>
        </div>
        <div>
          <Link to="/employees">Employees</Link>
        </div>
      </div>

      <Switch>
        <Route path="/tasks">
          <TodoList />
        </Route>
        <Route path="/employees">
          <Employees />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
