var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app.js');
var should = chai.should();
var expect = require('chai').expect;
var Blog = require('../models/blog');

chai.use(chaiHttp);

it('should list ALL blogs on / GET', function(done) {
		var request = chai.request(app);
		request
		.get('/')
		.end(function(err, res){
			res.should.have.status(200);
			res.should.be.JSON;
			done();
		});
});
