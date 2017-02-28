var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
  body: String,
  author: String,
  upvotes: {type: Number, default: 0},
  blog: { type: mongoose.Schema.Types.ObjectId, ref: 'Blog' }
});

mongoose.model('Comment', CommentSchema);