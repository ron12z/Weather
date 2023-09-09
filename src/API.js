const Weather = (() => {
	const key = "c5b22da0438d48c9ae2202908230709";
	const base = "http://api.weatherapi.com/v1";

	async function getForecast(location) {
		const forecastWeather = `${base}/forecast.json?key=${key}&q=${location}&days=7`;

		const result = await fetch(forecastWeather, { mode: "cors" })
			.then((response) => {
				return response.json();
			})

			.catch((error) => {
				console.error(error);
			});
		return result;
	}

	return { getForecast };
})();

const GIF = async (searchTerm) => {
	// https://developers.giphy.com/explorer/
	const key = "gaJlvjZzik3lhG0EqhrcvQAbTsWXOAii";
	const search = `https://api.giphy.com/v1/gifs/translate?api_key=${key}&s=${searchTerm}&weirdness=0`;

	const searchResult = await fetch(search, { mode: "cors" })
		.then((response) => {
			return response.json();
		})
		.catch((error) => {
			console.error(error);
		});

	return searchResult;
};

export default { Weather, GIF };
