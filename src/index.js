import API from "./API";

const loc = "makati";

function capitalize(str) {
	return str[0].toUpperCase() + str.slice(1);
}

async function displayGIF() {
	const img = document.querySelector("#currentWeatherGIF");

	const forecast = await API.Weather.getForecast(loc);
	const condition = `${await forecast.current.condition.text} Weather`;

	const GIF = await API.GIF(condition);
	const GIFURL = await GIF.data.images.original.url;

	img.src = GIFURL;
	img.alt = `${condition}`;
}

async function getWeatherInfo(location) {
	const data = await API.Weather.getForecast(location);
	const current = await data.current;
	const forecast = await data.forecast.forecastday;

	displayToday(current);
	displayForecast(forecast);
	displayTodayExtra(current, forecast[0]);
}

function displayToday(currentDayData) {
	const conditionText = currentDayData.condition.text;
	const conditionIcon = currentDayData.condition.icon; //url
	const temp_c = currentDayData.temp_c;
	const temp_f = currentDayData.temp_f;
	const last_updated = currentDayData.last_updated;
}

function displayTodayExtra(currentDayData, forecastToday) {
	const sunrise = forecastToday.astro.sunrise;
	const sunset = forecastToday.astro.sunset;
	const chanceOfRain = forecastToday.day.daily_chance_of_rain;
	const willRain = forecastToday.day.daily_will_it_rain;
	const humidity = forecastToday.day.avghumidity;
	const feelslike_c = currentDayData.feelslike_c;
	const feelslike_f = currentDayData.feelslike_f;
}

function displayForecast(forecastDayData) {
	const sample = forecastDayData[0];

	const currentTime = `${new Date()}`.split(" ")[4].split(":")[0];
	const currentTimeVal = currentTime > 9 ? currentTime : currentTime[1];

	const date = sample.date;
	const conditionText = sample.day.condition.text;
	const conditionIcon = sample.day.condition.icon;
	const maxTemp_c = sample.day.maxtemp_c;
	const maxTemp_f = sample.day.maxtemp_f;
	const minTemp_c = sample.day.mintemp_c;
	const minTemp_f = sample.day.mintemp_f;
	const chanceOfRain = sample.day.daily_chance_of_rain;
	const humidity = sample.day.avghumidity;
}

displayGIF();
getWeatherInfo(loc);
