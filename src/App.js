import React from "react";
import "./App.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { Switch, Link, Route } from "react-router-dom";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
// import Middle from "./components/common/Middle";
import Homepage from "./components/pages/Homepage";

function App() {
  return (
    <div className="main-wrapper">
      <Header />

      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/about" component={About} />
        <Route path="/services" exact component={Services} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
