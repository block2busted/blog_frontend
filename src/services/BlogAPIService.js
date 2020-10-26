export default class BlogAPIService {
  _apiUrl = 'http://127.0.0.1:8000'
  _apiBase = `${this._apiUrl}/api`

  async getResource(url) {
    const res = await fetch(`${this._apiBase}/${url}`)
    if (!res.ok) {
      throw new Error(`Couldn't fetch ${url}, received ${res.status}!`)
    }
    return await res.json()
  };

  getArticleList = async () => {
    const res = await this.getResource(`articles/`)
    return res.results.reverse().map(this._extractArticleData)
  };

  getCategoryList = async () => {
    const res = await this.getResource('categories/')
    return res.map(this._extractCategoryData)
  };

  _extractArticleData = (article) => {
    return {
      pk: article.pk,
      title: article.title,
      slug: article.slug,
      author: article.author,
      image: article.image,
      category: article.category,
      categoryImage: `${this._apiUrl}${article.category_image}`,
      content: article.content,
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