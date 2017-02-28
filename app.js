var ejs = require('ejs');
var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var router = require('./config/routes');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/socialburst', function() {
  console.log('database connected.')
})

// use public folder to insert external files into the wesite page
app.use(express.static(path.join(__dirname, '/public')))

app.use(bodyParser.urlencoded({ extended: false }));

  // parse application/json
app.use(bodyParser.json());

app.set('view engine', 'ejs');

var routes = require('./config/routes');
app.use("/api", routes);

app.get('/', function(req, res){
  res.render('index.html.ejs')
});

app.listen(port, function() {
	console.log("The server is on and listening on port " + port);
});
 	
module.exports = app