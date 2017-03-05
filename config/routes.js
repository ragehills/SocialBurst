var express = require("express");
var router = express.Router();
var usersController = require('../controllers/users');
var blogsController = require('../controllers/blogs');
var commentsController = require('../controllers/comments');

// ---restuful routes----
// routes for users

router.route('/users')
    .post(usersController.create);

router.route('/users/:uid')
	.delete(usersController.delete);

// routes for blogs
	
router.route('/blogs')
	.get(blogsController.index)
	.post(blogsController.create);

router.route('/blogs/:id')
	.get(blogsController.show)
	.put(blogsController.update)
	.delete(blogsController.delete)
	// .patch(blogsController.like);



// custom routes 
// showing a blog specific to a user
router.route('/my-blogs/:uid')
	.get(blogsController.getUsersBlogs);

module.exports = router;