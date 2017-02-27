angular
	.module('social-burst')
	.controller('MainController', MainController)

function MainController($state) {
	var self = this;
	self.msg = "Hello world!"
	self.goHome = function () {
		console.log('home')
		$state.go('home')
	}

}