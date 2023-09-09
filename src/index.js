import API from "./API";

const loc = "london";

function capitalize(str) {
	return str[0].toUpperCase() + str.slice(1);
}

function displayGIF() {
	const img = document.querySelector("#currentWeather");

	API.Weather.getForecast(loc).then((response) => {
		const searchTerm = response.current.condition.text;
		API.GIF(searchTerm).then((response) => {
			img.src = response.data.images.original.url;
		});
	});
}

displayGIF();
