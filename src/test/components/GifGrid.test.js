import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import '@testing-library/jest-dom'

//con esto fingiremos la llamada a useFetchGifs y controlaremos la informacion que eso va a responder
jest.mock('../../hooks/useFetchGifs');


describe('tests in <GifGrid/> component', () => {
	const category = 'Bikes'
	
	test('Should show <GifGrid/> correctly ', () => {

		useFetchGifs.mockReturnValue({
			data: [],
			loading: true
		});
		
		let wrapper = shallow(<GifGrid category={category} />);
		expect(wrapper).toMatchSnapshot();
	});
	
	test('should  show items when images are loaded with useFetchGifs', () => {
		const gifs = [{
			id: 'ABC',
			title: 'anything',
			url: 'https://localhost/myimage.jpg'
		}];
		
		useFetchGifs.mockReturnValue({
			data: gifs,
			loading: false
		});
		
		let wrapper = shallow(<GifGrid category={category} />);

		expect(wrapper.find('p').exists()).toBe(false);
		
		//esta es una prueba más precisa. Se usa para determinar si el componente tiene la cantidad de elemtnos
		//que se esperan
		expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
	})
	
});
