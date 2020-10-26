const updateCategoryList = (state, action) => {
  if (state === undefined) {
    return {
      categoryList: [],
      loading: true,
      error: null
    }
  }

  switch (action.type) {
    case 'FETCH_CATEGORIES_REQUESTED':
      return {
        categoryList: [],
        loading: true,
        error: null
      }
    case 'FETCH_CATEGORIES_SUCCESS':
      return {
        categoryList: action.payload,
        loading: false,
        error: null
      }
    case 'FETCH_CATEGORIES_FAILURE':
      return {
        categoryList: [],
        loading: false,
        error: action.payload
      }
    default:
      return state.categoryList
  }
};

export default updateCategoryList;
