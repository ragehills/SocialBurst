var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var router = require('./config/routes');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var layouts = require('express-ejs-layouts');
var cookieParser = require('cookie-parser');
var flash = require('connect-flash');
var path = require('path');

mongoose.connect('mongodb://localhost/blogs', function() {
  console.log('database connected.')
})


app.use(flash());

app.use(function(req, res, next){
    res.locals.errors = req.flash('error');
    // console.log(res.locals.errors);
    next();
});

// use public folder to insert external files into the wesite page
app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs');

app.use(router);

app.listen(port, function() {
	console.log("The server is on and listening on port " + port);
});
 	
module.exports = app