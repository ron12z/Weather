import API from "./API";

const loc = "makati";

function capitalize(str) {
	return str[0].toUpperCase() + str.slice(1);
}

async function displayGIF() {
	const img = document.querySelector("#currentWeather");

	const forecast = await API.Weather.getForecast(loc);
	const condition = `${await forecast.current.condition.text} Weather`;

	const GIF = await API.GIF(condition);
	const GIFURL = await GIF.data.images.original.url;

	img.src = GIFURL;
}

async function getWeatherInfo(location) {
	const data = await API.Weather.getForecast(location);
	const current = await data.current;
	const forecast = await data.forecast.forecastday;
	displayForecast(forecast);
}

function displayToday(currentDayData) {
	const conditionText = currentDayData.condition.text;
	const conditionIcon = currentDayData.condition.icon; //url
	const feelslike_c = currentDayData.feelslike_c;
	const feelslike_f = currentDayData.feelslike_f;
	const temp_c = currentDayData.temp_c;
	const temp_f = currentDayData.temp_f;
	const last_updated = currentDayData.last_updated;
}

function displayForecast(forecastDayData) {
	const sample = forecastDayData[0];

	console.log(sample);

	const date = sample.date;
	const conditionText = sample.day.condition.text;
	const conditionIcon = sample.day.condition.icon;
	const sunrise = sample.astro.sunrise;
	const sunset = sample.astro.sunset;
	const maxTemp_c = sample.day.maxtemp_c;
	const maxTemp_f = sample.day.maxtemp_f;
	const minTemp_c = sample.day.mintemp_c;
	const minTemp_f = sample.day.mintemp_f;
	const rainChance = sample.day.daily_chance_of_rain;
	const willRain = sample.day.daily_will_it_rain;
}

displayGIF();
getWeatherInfo(loc);
