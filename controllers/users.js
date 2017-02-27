var User = require('../models/user');

function showUser(req, res) {
	User.findById(req.params.id).populate('blogs').exec(function(err, user) {
		if(!user) return res.status(404).send("Sorry Blog not found!");
		if(err) return res.status(500).send(err);
		res.json("users/show" , {
      		title: "User",
    		  user: user
    	});
	});
}
module.exports = {
  show: showUser

}