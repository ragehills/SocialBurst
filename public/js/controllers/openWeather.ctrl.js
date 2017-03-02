angular
	.module('social-burst')
	.controller('weathercontroller', weathercontroller)
	

function weathercontroller($http) {
	var self = this;
	
	$http.get("http://ip-api.com/json").success(function(data) {
		self.lat = data.lat;
		self.lon = data.lon;
	});
};










