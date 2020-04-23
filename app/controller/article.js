'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
  /**
   * 获取文章列表
   */
  async findArticles() {
    const { ctx, service } = this;
    const articles = await service.article.find();
    ctx.body = {
      code: 200,
      success: true,
      message: 'success',
      data: articles,
    };
  }

  /**
   * 新增文章
   */
  async addArticle() {
    const { ctx } = this;
    const requestBody = ctx.request.body;
    const createdResult = await ctx.model.Article.create({
      ...requestBody,
    });
    if (createdResult._id) {
      // 创建成功
      ctx.body = {
        code: 200,
        success: true,
        message: '文章创建成功',
        results: {
          article_id: createdResult._id,
        },
      };
    } else {
      ctx.body = {
        code: 500,
        success: false,
        message: createdResult,
      };
    }
  }

  /**
   * 编辑文章
   */
  editArticle() {
    const { ctx } = this;
    ctx.body = 'editArticle';
  }

  /**
   * 文章发布
   */
  articlePublish() {
    const { ctx } = this;
    ctx.body = 'articlePublish';
  }

  /**
   * 文章取消发布
   */
  articleUnpublish() {
    const { ctx } = this;
    ctx.body = 'articleUnpublish';
  }

  /**
   * 获取文章详情页
   */
  async getArticleDetailById() {
    const { ctx } = this;
    ctx.body = 'getArticleDetailById';
  }
}

module.exports = ArticleController;
