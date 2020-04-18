'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const PostSchema = new Schema({
    /** 标题 */
    title: {
      type: String,
    },
    /** 作者 */
    author: {
      type: String,
      default: '',
    },
    /** 分类 */
    articleType: {
      type: Number,
      default: 0,
    },
    /** 阅读数 */
    readNumber: {
      type: Number,
      default: 0,
    },
    /** 点赞 */
    like: {
      type: Number,
      default: 0,
    },
    /** 文章内容 */
    body: {
      type: String,
      default: '',
    },
    /** 更新时间 */
    updated: {
      type: Date,
      default: Date.now,
    },
    /** 是否已发布 */
    release: {
      type: Boolean,
      default: false,
    },
    /** 评论 */
    comments: [
      {
        body: String,
        date: Date,
      },
    ],
  });
  return mongoose.model('Article', PostSchema);
};
