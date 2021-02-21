import React from 'react';
import { shallow } from "enzyme";
import GiftExpertApp from '../GiftExpertApp';
import '@testing-library/jest-dom';

describe('tests in <GiftExpertApp /> component', () => {

    test('should show <GiftExpertApp /> component correctly ', () => {
        let wrapper = shallow(<GiftExpertApp />)
        
        expect(wrapper).toMatchSnapshot();
    })
    
    test('should  show a list of categories', () => {
        
        const categories = ['Marvel', 'DC'];
        
        let wrapper = shallow(<GiftExpertApp  defaultCategories={categories}/>)

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);

    })
    
    
})
