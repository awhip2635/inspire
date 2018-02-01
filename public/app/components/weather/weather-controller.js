function WeatherController() {
	var wc = this;
	var weatherService = new WeatherService();

	function getWeather(){
		weatherService.getWeather(drawWeather)
	}
	
	function drawWeather(weather) {
		var fahrenheit = Math.floor(weather.main.temp * (9 / 5) - 459.67)
		
		
		var template = ""
		template += `
		
		<h4>${weather.name}, ID</h4><h4 class="fahr">${fahrenheit} °F</h4>
		`
		document.getElementById('weather').innerHTML = template;
	}
	getWeather()
}




