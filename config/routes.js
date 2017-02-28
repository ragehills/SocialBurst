var express = require("express");
var router = express.Router();
var usersController = require('../controllers/users');
var blogsController = require('../controllers/blogs.js');

router.route('/users')
    .post(usersController.create);

router.route('/users/:id')
  	.delete(usersController.delete);
	
router.route('/blogs')
  .get(blogsController.index)
  .post(blogsController.create);

module.exports = router;