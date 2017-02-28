var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({

  uid : String,
  blog : [{ type: mongoose.Schema.Types.ObjectId, ref: "Blog" }]

});

module.exports = mongoose.model('User' , UserSchema);