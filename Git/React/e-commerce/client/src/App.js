import "./App.css";

import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Navbar from "./components/Navbar";

import ProtectedRoute from "./Pages/ProtectedRoute";

import Signin from "./Pages/Auth/Signin/index"
import Signup from "./Pages/Auth/Signup";
import Products from "./Pages/Products";
import ProductDetail from "./Pages/ProductDetail";
import Profile from "./Pages/Profile";
import Basket from "./Pages/Basket";
import Error404 from "./Pages/Error404";

function App() {
  return (
    <div>
    <Router>
      <div>
        <Navbar />

        <div className="content">
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/product/:product_id" component={ProductDetail} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/signup" component={Signup} />
          <Route path="/basket" component={Basket} />
          <ProtectedRoute path="/profile" component={Profile} />
          <Route path="*" component={Error404} />
        </Switch>
        </div>
      </div>
    </Router>
  </div>
  );
}

export default App;

