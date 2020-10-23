import React, {Component} from "react";
import { FaClock, FaComment, FaEye } from "react-icons/all";

import "./BestArticleList.css";
import bestArticleElements from "./bestArticleElements";


export default class BestArticleList extends Component {
  render() {
    const articlesPreviewItems = bestArticleElements.map((item, index) => {
      return (
        <div className="best-article-preview" key={index}>
          <img src={item.smallImage} className="article-small-image" alt=""/>
          <div className="best-article-meta">
            <div className="best-article-title">
              {item.title}
            </div>
            <div className="best-article-description">
              {item.description}
            </div>
            <div className="best-article-info">
              <div className="best-article-date">
                <FaClock /> {item.created}
              </div>
              <div className="best-article-comment-views-count">
                <div className="best-article-comments-count">
                  <FaComment /> {item.commentsCount}
                </div>
                <div className="best-article-views-count">
                  <FaEye /> {item.viewsCount}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="last-articles-list">
        {articlesPreviewItems}
      </div>
    )
  }
}