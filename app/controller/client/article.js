'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
  /**
   * 获取文章列表
   */
  async findArticles() {
    const { ctx, service } = this;
    const articles = await service.client.article.find();
    ctx.body = {
      code: 200,
      success: true,
      message: 'success',
      data: articles,
    };
  }

  /**
   * 获取文章详情页
   */
  async getArticleDetailById() {
    const { ctx, service } = this;
    const res = await service.client.article.getArticleDetailById();
    if (res.success) {
      ctx.body = {
        code: 200,
        data: {
          ...res,
        },
      };
    } else {
      ctx.body = {
        code: 500,
        data: {
          ...res,
        },
      };
    }
  }
}

module.exports = ArticleController;
