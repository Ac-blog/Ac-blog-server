'use strict';

const Service = require('egg').Service;

class ArticleService extends Service {
  /**
   * 查询所有
  */
  async find() {
    const { ctx } = this;
    const articleFindResult = await ctx.model.Article.find();
    const articles = articleFindResult;

    return {
      pageNum: 1,
      pageSize: 10,
      items: articles,
    };
  }
}

module.exports = ArticleService;
