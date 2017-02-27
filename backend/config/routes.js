var express = require("express");
var router = express.Router();
var blogsController = require('../controllers/blogs');

router.route('/')
  .get(blogsController.index)

module.exports = router;