var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({

  first_name : {type: String, required:true},
  blog : [{ type: mongoose.Schema.Types.ObjectId, ref: "Blog" }]

});

module.exports = mongoose.model('User' , UserSchema);