import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "../Header";

import "./App.css";
import HomePage from "../pages/HomePage";
import ArticleListPage from "../pages/ArticleListPage";


const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <section>
          <Switch>
            <Route
              path="/"
              component={HomePage}
              exact
            />
            <Route
              path="/articles/"
              component={ArticleListPage}
            />
            <Route
              render={() => {
                return <h3>Page not found!</h3>
              }}
            />
          </Switch>
        </section>
      </div>
    </Router>
  )
}

export default App;
