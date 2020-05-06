'use strict';

const Service = require('egg').Service;

class ArticleService extends Service {
  /**
   * 查询所有
   */
  async find() {
    const { ctx } = this;
    // 过滤条件字段
    const { page } = ctx.query;
    // 文章条件查询结果
    const articleFindResult = await ctx.model.Article.find().skip((parseInt(page) - 1) * 10).limit(10)
      .sort({ updated: -1 });
    // 所有文章数
    const articleTotalCount = await ctx.model.Article.find().count();

    const articles = articleFindResult;

    return {
      items: articles,
      pageBean: {
        pageNo: articleTotalCount / 10 > 1 ? parseInt(page) : 1,
        pageSize: 10,
        totalCount: articleTotalCount,
      },
    };
  }

  /**
   * 获取文章详情
  */
  async getArticleDetailById() {
    const { ctx } = this;
    const articleDetailRes = await ctx.model.Article.findOne(
      { _id: ctx.params.id }
    );
    if (articleDetailRes) {
      return {
        success: true,
        results: articleDetailRes,
      };
    }
    return {
      success: false,
    };
  }
}

module.exports = ArticleService;
