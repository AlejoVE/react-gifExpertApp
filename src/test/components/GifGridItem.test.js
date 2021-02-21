import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Tests in <GifGridItem/> component', () => {
	const url = 'http://localhost:8080/mypagina.com';
	const title = 'My tittle';
	let wrapper = shallow(<GifGridItem url={url} title={title} />);

	test('should show <GifGridItem /> component correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('should show a title "My title"', () => {
		const pEl = wrapper.find('p').text();
		expect(pEl).toBe(title);
	});

	test('should have an image with the given url ', () => {
		const imgEl = wrapper.find('img');
		const srcProp = imgEl.prop('src');

		expect(srcProp).toBe(url);
		expect(imgEl.prop('alt')).toBe(title);
	});

	test('should have a div with the a className ', () => {
		const divEl = wrapper.find('div');
		const className = divEl.prop('className');

		expect(className.includes('animate__fadeIn')).toBe(true);
		// expect(className).toBe(
		// 	'card animate__animated animate__fadeIn animate__fast 800ms'
		// );
	});
});
