import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';
import '@testing-library/jest-dom';

describe('Tests in component  <AddCategory />', () => {
	//simula una función
	const setCategories = jest.fn();
	let wrapper = shallow(<AddCategory setCategories={setCategories} />);
	const value = 'Hola mundo';

	beforeEach(() => {
		//Se llama para que si teníamos alguna simulación de algo, todo se limpie.
		jest.clearAllMocks;
		wrapper = shallow(<AddCategory setCategories={setCategories} />);
	});

	// test('should throw an error if I dont pass  the setCategories property', () => {
	// 	let wrapper = shallow(<AddCategory />);

	// 	expect(wrapper).toThrowErrorMatchingSnapshot();
	// });

	test('should show component <AddCategory/> correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('should  change input box', () => {
		const input = wrapper.find('input');

		// {} es lo que tendrá el valor de e en handleInputChange en el componente <AddCategory />
		// como lo que estamos buscando es e.target.value, pasamos esos valores.
		input.simulate('change', { target: { value } });
	});

	test('should not post the info on submit', () => {
		wrapper.find('form').simulate('submit', { preventDefault() {} });

		expect(setCategories).not.toHaveBeenCalled();
	});

	test('should  call setCategories and clean up inputBox', () => {
		wrapper.find('input').simulate('change', { target: { value } });
		wrapper.find('form').simulate('submit', { preventDefault() {} });

		// const inputValue = wrapper.find('input').text();

		expect(setCategories).toHaveBeenCalled();

		//Para testear cuantas veces fue llamada una funcion
		// expect(setCategories).toHaveBeenCalledTimes(2)

		//Para testear que una función haya sido llamada con otra función como argumento
		// expect(setCategories).toHaveBeenCalledWith( expect.any(Function))

		expect(wrapper.find('input').prop('value')).toBe('');
	});
	
});
