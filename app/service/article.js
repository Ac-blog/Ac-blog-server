'use strict';

const Service = require('egg').Service;

class ArticleService extends Service {
  /**
   * 查询所有
   */
  async find() {
    const { ctx } = this;
    // 过滤条件字段
    const { title, article_channel, size, page } = ctx.query;
    // 过滤配置对象
    const article_filter = {
      $or: [
        {
          title: { $regex: title, $options: '$i' },
        },
        {
          articleType: { $regex: article_channel, $options: '$i' },
        },
      ],
    };
    // 文章条件查询结果
    const articleFindResult = await ctx.model.Article.find(article_filter).skip((parseInt(page) - 1) * parseInt(size)).limit(parseInt(size));
    // 所有文章数
    const articleTotalCount = await ctx.model.Article.find(article_filter).count();
    // 已发布文章数
    const publishedNumber = await ctx.model.Article.find({
      release: true,
    }).count();
    // 未发布文章数量
    const unpublishedNumber = await ctx.model.Article.find({
      release: false,
    }).count();

    const articles = articleFindResult;

    return {
      items: articles,
      pageBean: {
        pageNo: articleTotalCount / parseInt(size) > 1 ? parseInt(page) : 1,
        pageSize: parseInt(size),
        totalCount: articleTotalCount,
      },
      publishedNum: publishedNumber,
      unpublishedNum: unpublishedNumber,
    };
  }
}

module.exports = ArticleService;
