import React, {Component} from "react";

import "./LastThreeItemsSlider.css";

import img1 from "./image1.jpg";
import img2 from "./image2.jpg";
import img3 from "./image3.jpg";


export default class LastThreeItemsSlider extends Component {
  render() {
    return (
      <div className="last-articles-bar">
        <div className="main-article">
          <div className="main-article-preview">
            <div className="article-details-container">
              <img className="article-background-image" src={img1} alt="article-background"/>
              <div className="article-meta">
                <a href="" className="article-title-link">
                  <h1>
                    Django Rest very strong framework.
                  </h1>
                </a>
                <div className="article-description">
                  lorLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="minor-articles">
          <div className="minor-article-preview">
            <div className="article-details-container">
              <img className="article-background-image" src={img2} alt="article-background"/>
              <div className="article-meta">
                <a href="" className="article-title-link">
                  <h4>
                    React js top library for frontend.
                  </h4>
                </a>
                <div className="article-description">
                  lorLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </div>
              </div>
            </div>
          </div>
          <div className="minor-article-preview">
            <div className="article-details-container">
              <img className="article-background-image" src={img3} alt="article-background"/>
              <div className="article-meta">
                <a href="" className="article-title-link">
                  <h4>
                    Python regulars...
                  </h4>
                </a>
                <div className="article-description">
                  lorLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}