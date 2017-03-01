var express = require("express");
var router = express.Router();
var usersController = require('../controllers/users');
var blogsController = require('../controllers/blogs');
var commentsController = require('../controllers/comments');

router.route('/users')
    .post(usersController.create);

router.route('/users/:uid')
	.delete(usersController.delete);
	
router.route('/blogs')
	.get(blogsController.index)
	.post(blogsController.create);

router.route('/blogs/:id')
	.get(blogsController.show)
	.put(blogsController.update)
	.delete(blogsController.delete)
	// .patch(blogsController.like);

router.route('/my-blogs/:uid')
	.get(blogsController.index);

module.exports = router;