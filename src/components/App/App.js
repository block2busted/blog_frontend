import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "../Header";
import LastThreeItemsSlider from "../LastThreeItemsSlider";

import "./App.css";


const App = () => {
  console.log('App run')
  return (
    <Router>
      <div>
        <Header />
        <section>
          <LastThreeItemsSlider />
          Body
        </section>
      </div>
    </Router>
  )
}

export default App;
