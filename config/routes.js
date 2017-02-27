var express = require("express");
var router = express.Router();
var blogsController = require('../controllers/blogs.js');




router.route('/blogs')
  .get(blogsController.index)

module.exports = router;