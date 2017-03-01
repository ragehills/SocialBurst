var Blog = require('../models/blog.js');
var Comment = require('../models/Comments.js');

function indexBlogs(req, res) {
	Blog.findOne({uid: req.params.uid }).populate('blog').exec(function (err, blog) {
        if (err) {
            console.log(err)
            return res.status(500).json(err)
        }
        res.json(blog)
    })
}

function showBlogs(req, res) {
	Blog.findById(req.params.id , function(err, blog) {
		if(!blog) return res.status(404).send("Sorry Blog not found!");
		if(err) return res.status(500).send(err);
		res.json(blog , {
      		title: "Blog",
    		blog: blog
    	});
	});
}

function createBlogs(req, res) {
	console.log(req.body)
    User.findOne({ uid: req.body.uid }, function (err, blog ) {
        if (err) return res.status(500).json(err)

        var newBlog = new Blog(req.body.blog)
    	// console.log(user)
        user.blog.push(newBlog._id)

        newBlog.save(function (err) { if (err) console.log(err) });
        user.save(function (err) { if (err) console.log(err) });
        res.redirect("/")

    })
}

function newBlog(req, res) {
    res.send('new');
}

function editBlogs(req, res) {
	Blog.findById(req.params.id , function(err, blog) {
		if(!blog) return res.status(404).send("Sorry blog not found!");
		if(err) return res.status(500).send(err);
		res.json(blog , {
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
		function(err, blog) {
			if(err) return res.status(500).send(err);
			res.redirect("/");
		}
	);
}

function deleteBlogs(req, res) {
	Blog.findByIdAndRemove(req.params.id , function(err) {
		res.redirect("/")
	});
}


module.exports = {
	index: indexBlogs,
	show: showBlogs,
	new: newBlog,
	create: createBlogs,
	edit: editBlogs,
	update: updateBlogs,
	delete: deleteBlogs
}