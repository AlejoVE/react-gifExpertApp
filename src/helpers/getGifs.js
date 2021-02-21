export const getGifs = async (category) => {
	// prettier-ignore
	const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=xUtStorPxQwSsemT6W3St9EER3NJpOe0`;

	const res = await fetch(url);
	const { data } = await res.json();

	const gifs = data.map((elem) => {
		return {
			id: elem.id,
			title: elem.title,
			url: elem.images.downsized_medium.url,
		};
	});

	return gifs;
};
