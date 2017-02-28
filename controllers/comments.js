var Blog = require('../models/blog.js');
var Comment = require('../models/Comments.js');

function indexComments(req, res) {
	Comment.find({} , function(err, comments) {
		if(err) return res.status(500).send(err);
		res.json(comments);
	});
}

function createComments(req, res) {
	Comment.create(req.body, function(err, comment) {
		if(err) req.flash('error' , "Sorry, something went wrong with posting your comment please try again!");
		Blog.findByIdAndUpdate(req.user.id, { $addToSet: { comments: comment } }, function(err, user) {
			if(err) req.flash('error' , "Sorry, something went wrong with posting your comment please try again!");
			res.json(comment);
		})
	});
}

module.exports = {
	index: indexComments,
	create: createComments,
}