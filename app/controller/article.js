'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  /**
   * 获取文章列表
  */
  async findArticles() {
    const { ctx, service } = this;

    const articles = service.article.find();

    ctx.body = {
      code: 200,
      message: 'success',
      data: articles,
    };
  }

  /**
   * 新增文章
  */
  addArticle() {
    const { ctx } = this;
    ctx.body = 'addArticle';
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

module.exports = HomeController;
