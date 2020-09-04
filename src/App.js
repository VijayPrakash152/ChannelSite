import React, { useEffect, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import Navbar from "./Components/layout/Navbar";
import About from "./Components/About";
import Footer from "./Components/layout/Footer";
const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  );
};

export default App;
