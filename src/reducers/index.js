import updateArticleList from "./articleList";
import updateCategoryList from "./categoryList";
import updateHeader from "./header";
import updateButton from "./buttons";


const reducer = (state, action) => {
  return {
    articleList: updateArticleList(state, action),
    categoryList: updateCategoryList(state, action),
    headerState: updateHeader(state, action),
    buttonState: updateButton(state, action)
  }
};

export default reducer;