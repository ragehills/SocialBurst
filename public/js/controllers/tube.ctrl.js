angular
	.module('social-burst')
	.controller('tubecontroller', tubecontroller)

function tubecontroller($http) {
	var self = this;
	$http.get("https://api.tfl.gov.uk/line/mode/tube/status").success(function(data) {
		self.data = data
	})	

}	