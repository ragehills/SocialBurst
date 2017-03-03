angular
	.module('social-burst')
	.controller('tubecontroller', tubecontroller)

function tubecontroller($http) {
	var self = this;
	$http.get("https://api.tfl.gov.uk/line/mode/tube/status").success(function(data) {
		self.bakerloo = data[0].name;
		self.central = data[1].name;
		self.circle = data[2].name;
		self.district = data[3].name;
		self.districtStatus = data[3].lineStatuses[0].statusSeverityDescription;
		self.districtStatus2 = data[3].lineStatuses[1].statusSeverityDescription;
		self.hammersmitCity = data[4].name;
		self.jubilee = data[5].name;
		self.metro = data[6].name;
		self.northern = data[7].name;
		self.piccadilly = data[8].name;
		self.victoria = data[9].name;
		self.waterlooCity = data[10].name;
		console.log(data[3].lineStatuses[1].statusSeverity)
	})	

}	