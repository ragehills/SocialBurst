var mongoose = require('mongoose');

var BlogSchema = mongoose.Schema({
	title: String,
	post: String,
	url: String,
	upvotes: {type: Number, default: 0},
	comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});
 
module.exports = mongoose.model('Blog', BlogSchema);