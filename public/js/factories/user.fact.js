angular
	.module('social-burst')
	.factory('User', userFactory)

function userFactory(API, $http) {
	return {
		create: function (newUser) {
			return $http.post(API + '/users', newUser)
		},
		get: function (uid) {
			return $http.get(API + '/users/' + uid)
		},
		delete: function (id) {
			return $http.delete(API + '/users/' + id)
		}
	}
}