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
  addArticle() {
    const { ctx } = this;
    ctx.model.Article.create(
      {
        title: '文章13',
        author: 'Allen周嘉炜',
        readNumber: 100,
        like: 99,
        name: '王小虎',
        articleType: 2,
        body: '上海市普陀区金沙江路 1518 弄',
        updated: '2020-04-18 10:20:09',
        release: false,
        comments: [
          {
            body: '文章很好啊',
            date: '2020-04-19 10:09:09',
          },
        ],
      },
      res => {
        console.log(res);
      }
    );
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

module.exports = ArticleController;
