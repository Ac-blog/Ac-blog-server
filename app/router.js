'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  // 获取文章列表
  router.get('/admin/v1/articles', controller.article.findArticles);
  // 新增文章
  router.post('/admin/v1/article', controller.article.addArticle);
  // 编辑文章
  router.post('/admin/v1/article/:id/edit', controller.article.editArticle);
  // 文章发布
  router.post('/admin/v1/article/publish', controller.article.articlePublish);
  // 文章取消发布
  router.post('/admin/v1/article/unpublish', controller.article.articleUnpublish);
  // 获取文章详情
  router.get('/admin/v1/article/:id', controller.article.getArticleDetailById);


  // varok client
  // 获取文章列表
  router.get('/client/v1/articles', controller.client.article.findArticles);
  // 获取文章详情
  router.get('/client/v1/article/:id', controller.client.article.getArticleDetailById);
};
