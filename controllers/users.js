var User = require('../models/user');

function createUser(req, res) {
    console.log(req.body)
    User.create(req.body, function (err, user) {
        if (err) console.log(err)
        if(err) return res.json({message: 'Could not create user', err : err});
        res.json(user)
    });
}

function indexUser(req, res) {
  User.findById(req.params.id).populate('blog').exec(function(err, user) {
    if (err) {
      console.log(err)
      return res.status(500).json(err)
    }
    res.json(user)
  })
}

function deleteUser(req, res) {
	User.findByIdAndRemove(req.params.id , function(err) {
		res.json(user)
	});
}
module.exports = {
  create: createUser,
  delete: deleteUser,

}

