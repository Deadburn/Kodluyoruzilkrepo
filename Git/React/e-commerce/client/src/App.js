import "./App.css";

import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Navbar from "./components/Navbar";
import Signin from "./Pages/Auth/Signin/index"
import Signup from "./Pages/Auth/Signup";
import Products from "./Pages/Products";

function App() {
  return (
    <div>
    <Router>
      <div>
        <Navbar />

        <div className="content">
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
        </Switch>
        </div>
      </div>
    </Router>
  </div>
  );
}

export default App;

