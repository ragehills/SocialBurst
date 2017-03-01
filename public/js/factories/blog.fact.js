angular
	.module('social-burst')
	.factory('Blog', blogFactory)

function blogFactory(API, $http) {
	return {
		getAll: function () {
			return $http.get(API + '/blogs')
		},
		get: function (id) {
			return $http.get(API + '/blogs/' + uid)
		},
		create: function (newBlog) {
			return $http.post(API + '/blogs', newBlog)
		},
		delete: function (id) {
			return $http.delete(API + '/blogs/' + uid)
		}
	}
}