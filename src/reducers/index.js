const reducer = (state, action) => {
    if (state === undefined) {
        return {
            articles: [],
            loading: true,
            error: null,
        }
    }
    switch (action.type) {
        case 'FETCH_ARTICLES_REQUEST':
            return {
                articles: [],
                loading: true,
                error: null
            }
    }
}

export default reducer;
