var mongoose = require('mongoose');

var BlogSchema = mongoose.Schema({
	title: {
	    type: String,
	    required: true
	},
	content: {
	    type: String,
		required: true
	}
});

module.exports = mongoose.model('Blog', BlogSchema);