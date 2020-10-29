import React, {Component} from "react";
import ErrorIndicator from "../ErrorIndicator";
import Spinner from "../Spinner";
import { fetchArticleList } from "../../actions"
import { connect } from "react-redux";
import { withBlogService } from "../hoc"
import { compose } from "../../utils";

import { FaClock, FaComment, FaEye } from "react-icons/all";

import "./BestArticleList.css";


class BestArticleList extends Component {
  render() {
    const { articleList, loading, error, itemsCount } = this.props;

    if (error) {
      return <ErrorIndicator />
    }

    if (loading) {
      return <Spinner />
    }

    const articlesPreviewItems = articleList.slice(0, itemsCount)
      .sort((a, b) => {
        return b.viewsCount - a.viewsCount
      })
      .map((item, index) => {
      return (
        <div className="best-article-preview" key={index}>
          <img src={item.categoryImage} className="article-small-image" alt=""/>
          <div className="best-article-meta">
            <div className="best-article-title">
              {item.title}
            </div>
            <div className="best-article-description">
              {item.content}
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

const mapStateToProps = ({ articleList: { articleList, loading, error } }) => {
  return {
    articleList: articleList,
    loading: loading,
    error: error
  }
};

const mapDispatchToProps = (dispatch, { blogAPIService } ) => {
  return {
    fetchArticleList: fetchArticleList(dispatch, blogAPIService)
  }
};

export default compose(
  withBlogService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BestArticleList);