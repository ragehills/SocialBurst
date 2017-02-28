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
				$state.go('page2')
				resetCredentials()
			})
			.catch(function (error) {
				self.error = error 

			})
	}

	self.signOut = function() {
		Auth.$signOut()
		$state.go('home')
	}

	Auth.$onAuthStateChanged(function (user) {
		self.user = user
	})

	function resetCredentials () {
		self.email = ''
		self.password = ''
	}
}