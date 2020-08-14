import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Users from "./components/users.component";
import './App.css';
import CreateUser from './components/create-user.component';

import Login from './components/login'
import SignUp from './components/signup'
function App() {
  return (<Router>
    <div className="App" >
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container">
            <a className="navbar-brand">LoginPortal</a>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to={"/create-user"}>Create User</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/users"}>Users List</Link>
                </li>

              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>

            <Route exact path='/' component={CreateUser} />
            <Route path="/create-user" component={CreateUser} />
            <Route path="/users" component={Users} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </div>
    </div>

  </Router >
  );
}

export default App;
