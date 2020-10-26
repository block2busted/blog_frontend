const updateArticleList = (state, action) => {
  if (state === undefined) {
    return {
      articleList: [],
      loading: true,
      error: null
    }
  }
  switch (action.type) {
    case 'FETCH_ARTICLES_REQUEST':
      // console.log(action, 'FETCH_ARTICLES_REQUEST')
      return {
        articleList: [],
        loading: true,
        error: null
      }
    case 'FETCH_ARTICLES_SUCCESS':
      // console.log(action, 'FETCH_ARTICLES_SUCCESS')
      return {
        articleList: action.payload,
        loading: false,
        error: null
      }
    case 'FETCH_ARTICLES_FAILURE':
      // console.log(action, 'FETCH_ARTICLES_FAILURE')
      return {
        articleList: [],
        loading: false,
        error: action.payload
      }
    default:
      return state.articleList
  }
}

export default updateArticleList;
