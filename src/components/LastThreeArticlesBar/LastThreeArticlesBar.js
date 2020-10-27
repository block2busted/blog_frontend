import React, { Component } from "react";
import ErrorIndicator from "../ErrorIndicator";
import Spinner from "../Spinner";
import { fetchArticleList } from "../../actions"
import { connect } from "react-redux";
import { withBlogService } from "../hoc"
import { compose } from "../../utils";

import "./LastThreeArticlesBar.css";


class LastThreeArticlesBar extends Component {
  componentDidMount() {
    this.props.fetchArticleList();
  }

  render() {
    const { articleList, loading, error } = this.props;

    if (error) {
      return <ErrorIndicator />
    }

    if (loading) {
      return <Spinner />
    }

    return (
      <div className="last-articles-bar">
        <div className="main-article">
          <div className="main-article-preview">
            <div className="article-details-container">
              <img className="article-background-image" src={articleList[0].categoryImage} alt="article-background"/>
              <div className="article-meta">
                <a href="" className="article-title-link">
                  <h1>
                    {articleList[0].title}
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
              <img className="article-background-image" src={articleList[1].categoryImage} alt="article-background"/>
              <div className="article-meta">
                <a href="" className="article-title-link">
                  <h4>
                    {articleList[1].title}
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
              <img className="article-background-image" src={articleList[2].categoryImage} alt="article-background"/>
              <div className="article-meta">
                <a href="" className="article-title-link">
                  <h4>
                    {articleList[2].title}
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
)(LastThreeArticlesBar);