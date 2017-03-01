var Blog = require('../models/blog.js');
var Comment = require('../models/Comments.js');
var User = require('../models/user.js');

function indexBlogs(req, res) {
	Blog.find({}, function (err, blog) {
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
    User.findOne({ uid: req.body.uid }, function (err, user) {
        if (err) return res.status(500).json(err)

        var newBlog = new Blog(req.body.blog)
    	// console.log(user)
        user.blog.push(newBlog._id)

        newBlog.save(function (err) { if (err) console.log(err) });
        user.save(function (err) { if (err) console.log(err) });
        res.json(req.body.blog)

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


function getUsersBlogs (req, res) {
	User.findOne({ uid: req.params.uid }).populate('blog').exec(function (err, user) {
		if (err) {
			console.log(err)
			return res.status(500).json(err)
		}

		res.json(user.blog)
	})
} 

module.exports = {
	index: indexBlogs,
	show: showBlogs,
	new: newBlog,
	create: createBlogs,
	edit: editBlogs,
	update: updateBlogs,
	delete: deleteBlogs,
	getUsersBlogs: getUsersBlogs
}