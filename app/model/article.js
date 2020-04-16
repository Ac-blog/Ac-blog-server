'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const PostSchema = new Schema({
    release: {
      type: Boolean,
    },
    title: {
      type: String,
    },
  });
  return mongoose.model('Article', PostSchema);
};
