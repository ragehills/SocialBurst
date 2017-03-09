angular
	.module('social-burst')
	.controller('weathercontroller', weathercontroller)
	

function weathercontroller($http) {
	var self = this;
	
	$http.get("http://ip-api.com/json").success(function(data) {
		self.lat = data.lat;
		self.lon = data.lon;

		var apiKey = "cae6975d69d5f695a3e3f536ac37a9bc"
		var openWeatherURL = "http://api.openweathermap.org/data/2.5/weather?lat=" + self.lat + "&lon=" + self.lon + "&appid=" +apiKey;
		
		$http.get(openWeatherURL).success(function(data) {
			self.description = data.weather[0].description;
			self.speed = (2.237*data.wind.speed).toFixed(1) + " mph";
			self.name = data.name;
			self.temp = data.main.temp;
			self.fTemp = (self.temp*(9/5)-459.67).toFixed(1) + " (°F)";
			self.cTemp = (self.temp-273).toFixed(1) + " (°C)";
			self.icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
			

			switch(self.description){
				case "clear sky" : {
					self.skyClass = 'clear-sky'
				break
				}
				case "light rain" : {
					self.skyClass = 'light-rain'
				break
				}
				default:
					self.skyClass = 'default'
				break	
			}
		});
	});
};
