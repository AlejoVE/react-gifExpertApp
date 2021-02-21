import React from 'react';
import { shallow } from "enzyme";
import '@testing-library/jest-dom';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from "@testing-library/react-hooks";

describe('test in hook useFechGifs', () => {
    
    test('should return the initial state', async () => {

         const {result, waitForNextUpdate } = renderHook(() => useFetchGifs('Marvel'));
         const { data, loading } = result.current;
         
         await waitForNextUpdate();

         expect(data).toEqual([]);
         expect(loading).toBe(true);
        
    })

    test('should  return an array of images and loading = false',  async() => {
        
        //waitForNextUpdate es una promesa que me indicará cuando sucede un cambio en el s
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('Marvel'));
        await waitForNextUpdate();

        const { data, loading } = result.current;
        
        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    })
    
    
})
