import React from 'react';
import { render, getByText, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Error from './Error';
import { BrowserRouter } from 'react-router-dom'


describe ('Error Component', () => {

 


    it('Render Error Component without... errors?', () => {
        const { getByText } =  render(
            <BrowserRouter>
                 <Error />
            </BrowserRouter>
        )
    });

    it('Has a button to return to main page', () => {
        const { getByText, debug } =  render(
            <BrowserRouter>
                 <Error />
            </BrowserRouter>
        )
            const button = getByText("Back to Main Page")
            expect(button).toBeInTheDocument()
    });



})