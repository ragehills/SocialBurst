var Blog = require('../models/blog.js');

function indexBlogs(req, res) {
	Blog.find({} , function(err, blogs) {
		if(err) return res.status(500).send(err);
		res.json(blogs);
	});
}

module.exports = {
	index: indexBlogs,
}