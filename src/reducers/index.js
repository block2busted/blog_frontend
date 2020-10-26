import updateArticleList from "./articleList";
import updateCategoryList from "./categoryList";


const reducer = (state, action) => {
  return {
    articleList: updateArticleList(state, action),
    categoryList: updateCategoryList(state, action)
  }
};

export default reducer;