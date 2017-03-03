angular
	.module('social-burst')
	.controller('authenticationController', authenticationController)

function authenticationController(Auth, User, $state) {
	var self = this

	self.createUser = function () {
		Auth.$createUserWithEmailAndPassword(self.email, self.password)
			.then(function (user) {
				User.create({
					uid: user.uid,
				}).then(function(user, error) {
					resetCredentials()
				}).catch(function (err) {
					console.log(err)
				})

			}).catch(function (error) {
				self.error = error 
			})
	}

	self.signIn = function() {
		Auth.$signInWithEmailAndPassword(self.email, self.password)
			.then(function () {
				$state.go('home')
				resetCredentials()
			})
			.catch(function (error) {
				self.error = error 

			})
		// Auth.$signInWithPopup('twitter')
		// 	.then(function () {
		// 		$state.go('home')
		// 		resetCredentials()
		// 	})
		// 	.catch(function (error) {
		// 		self.error = error 

		// 	})
	}

	self.signOut = function() {
		Auth.$signOut()
		$state.go('login')
	}

	Auth.$onAuthStateChanged(function (user) {
		self.user = user
		console.log(user)
	})

	function resetCredentials () {
		self.email = ''
		self.password = ''
	}
}