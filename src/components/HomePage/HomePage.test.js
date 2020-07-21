import React from 'react';
import { render } from '@testing-library/react';
import HomePage from './HomePage';
import { BrowserRouter } from 'react-router-dom';


describe('HomePage Component', () => {
    
    it('should render the component without errors ', () => {
        const { getByText, debug } = render(
            <BrowserRouter>
                <HomePage />
            </BrowserRouter>
        )
        debug()
   
    const title = getByText('Search for Senators and Representatives')
    expect(title).toBeInTheDocument()
    
    const selectInput = getByText('Name')
    expect(selectInput).toBeInTheDocument()
    });


})