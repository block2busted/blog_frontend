import updateArticleList from "./articleList";

const reducer = (state, action) => {
  return {
    articleList: updateArticleList(state, action)
  }
};

export default reducer;