var Blog = require('../models/blog.js');
var Comment = require('../models/Comments.js');

function indexBlogs(req, res) {
	Blog.find({} , function(err, blogs) {
		if(err) return res.status(500).send(err);
		res.json(blogs);
	});
}

function showBlogs(req, res) {
	Recipe.findById(req.params.id , function(err, blog) {
		if(!blog) return res.status(404).send("Sorry Blog not found!");
		if(err) return res.status(500).send(err);
		res.json("blogs/show" , {
      		title: "Blog",
    		blog: blog
    	});
	});
}

function createBlogs(req, res) {
	Blog.create(req.body, function(err, blog) {
		if(err) req.flash('error' , "Sorry, something went wrong with posting your blog please try again!");
		User.findByIdAndUpdate(req.user.id, { $addToSet: { blogs: blog } }, function(err, user) {
			if(err) req.flash('error' , "Sorry, something went wrong with posting your blog please try again!");
			res.json(blog);
		})
	});
}
function editBlogs(req, res) {
	Blog.findById(req.params.id , function(err, blog) {
		if(!blog) return res.status(404).send("Sorry blog not found!");
		if(err) return res.status(500).send(err);
		res.render("blogs/edit" , {
      		title: "Blog",
    		blog: blog
    	});
	});
}

function updateBlogs(req, res) {
	Blog.findByIdAndUpdate(
		req.params.id,
		{ $set: req.body },
		{ runValidators: true },
		function(err, recipe) {
			if(err) return res.status(500).send(err);
			res.redirect("/");
		}
	);
}

function deleteRecipes(req, res) {
	Recipe.findByIdAndRemove(req.params.id , function(err) {
		res.redirect("/")
	});
}


module.exports = {
	index: indexBlogs,
	show: showBlogs,
	new: newBlogs,
	create: createBlogs,
	edit: editBlogs,
	update: updateBlogs,
	delete: deleteBlogs
}