import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "../Header";
import LastThreeArticlesBar from "../LastThreeArticlesBar";

import "./App.css";
import HomePageBody from "../HomePageBody";


const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <section>
          <LastThreeArticlesBar />
          <HomePageBody />
        </section>
      </div>
    </Router>
  )
}

export default App;
