import React, { Component } from "react";

import "./HomePageBody.css";

import BestArticleList from "../BestArticleList";
import CategoriesSideBar from "../CategoriesSideBar";


export default class HomePageBody extends Component {
  render() {
    return (
      <div className="home-page-body">
        <BestArticleList />
        <CategoriesSideBar />
      </div>
    )
  }
}