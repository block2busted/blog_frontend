import React, { Component } from "react";

import "./HomePageBody.css";

import BestArticleList from "../../BestArticleList";
import CategoriesSideBar from "../../CategoriesSideBar";
import LastThreeArticlesBar from "../../LastThreeArticlesBar";


export default class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <LastThreeArticlesBar />
        <div className="home-page-body">
          <BestArticleList itemsCount={11}/>
          <CategoriesSideBar />
        </div>
      </React.Fragment>
    )
  }
}