angular
  .module('social-burst')
  .factory('Auth', AuthFactory)
  .run(function () {
	  // Initialize Firebase
	  
  })

function AuthFactory($firebaseAuth) {
	return $firebaseAuth()
}