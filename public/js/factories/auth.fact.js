angular
  .module('social-burst')
  .factory('Auth', AuthFactory)
  .run(function () {
	  // Initialize Firebase
	  var config = {
	    apiKey: "AIzaSyAtyBabY0WWLFSlNPLkPxXrt9fDuKQGqk0",
	    authDomain: "socialburst-ac486.firebaseapp.com",
	    databaseURL: "https://socialburst-ac486.firebaseio.com",
	    storageBucket: "socialburst-ac486.appspot.com",
	    messagingSenderId: "340991391586"
	  };
	  firebase.initializeApp(config);
  })

function AuthFactory($firebaseAuth) {
	return $firebaseAuth()
}