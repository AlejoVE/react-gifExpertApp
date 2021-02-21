const { getGifs } = require('../../helpers/getGifs');
import '@testing-library/jest-dom';

describe('Tests with getGifs fetch ', () => {
	test('should return 10 elements', async () => {
		const gifs = await getGifs('Marvel');

		expect(gifs.length).toBe(10);
	});

	test('should return 0 elements', async () => {
		const gifs = await getGifs('');

		expect(gifs.length).toBe(0);
	});
});
