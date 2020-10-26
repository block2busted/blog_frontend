const categoryListRequested = () => {
  return {
    type: 'FETCH_CATEGORIES_REQUESTED'
  };
};

const categoryListLoaded = (payload) => {
  return {
    type: 'FETCH_CATEGORIES_SUCCESS',
    payload
  };
};

const categoryListError = (error) => {
  return {
    type: 'FETCH_CATEGORIES_FAILURE',
    payload: error
  };
};

const fetchCategoryList = (dispatch, blogAPIService) => () => {
  dispatch(categoryListRequested());
  blogAPIService.getCategoryList()
    .then((data) => dispatch(categoryListLoaded(data)))
    .catch((error) => dispatch(categoryListError(error)));
};

export {
  fetchCategoryList
}