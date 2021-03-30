import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddIrpf from "./components/irpf.component";


class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
         
          <div className="navbar-nav mr-auto">
         
            <li className="nav-item">
              <Link to={"/irpf"} className="nav-link">
                IRPF
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path="/irpf" component={AddIrpf} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;