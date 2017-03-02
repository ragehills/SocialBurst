angular
	.module('social-burst')
	.controller('twitterAuthenticationController', twitterAuthenticationController)

function twitterAuthenticationController(Auth, User, $state) {
	var provider = new firebase.auth.TwitterAuthProvider();

	
}	