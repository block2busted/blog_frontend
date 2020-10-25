export default class BlogAPIService {
  _apiBase = `http://127.0.0.1/api/`

  async getResource (url) {
    const res = await fetch(`${this._apiBase}${url}`)
    console.log(res, 'getResource')
    if (!res.ok) {
      throw new Error(`Couldn't fetch ${url}, receiver ${res.status}!`)
    }
    return await res.json()
  };

  getArticleList = async () => {
    const res = await this.getResource('articles/')
    console.log(res, 'getArticleList')
    return res.results.map(this._extractArticleData)
  };

  getCategoryList = async () => {
    const res = await this.getResource('categories')
    return  res.map(this._extractCategoryData)
  };

  _extractArticleData = (article) => {
    return {
      pk: article.pk,
      title: article.title,
      slug: article.slug,
      author: article.author,
      image: article.image,
      category: article.category,
      created: article.created,
      viewsCount: article.views_count,
      commentsCount: article.comments_count
    }
  };

  _extractCategoryData = (category) => {
    return {
      pk: category.pk,
      title: category.title,
      description: category.description,
      image: category.image
    }
  };
}