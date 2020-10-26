const articleListRequested = () => {
  return {
    type: 'FETCH_ARTICLES_REQUEST'
  };
};

const articleListLoaded = (payload) => {
  return {
    type: 'FETCH_ARTICLES_SUCCESS',
    payload
  };
};

const articleListError = (error) => {
  return {
    type: 'FETCH_ARTICLES_FAILURE',
    payload: error
  };
};

const fetchArticleList = (dispatch, blogAPIService) => () => {
  dispatch(articleListRequested());
  blogAPIService.getArticleList()
    .then((data) => dispatch(articleListLoaded(data)))
    .catch((error) => dispatch(articleListError(error)));
  // console.log('AF')
};

export {
  fetchArticleList
}