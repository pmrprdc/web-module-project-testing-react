import React from 'react';
import {fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event';import Display from './Display';
import '@testing-library/jest-dom';
import mockFetchShow from '../api/fetchShow'

jest.mock('../api/fetchShow')


const data = {
    "name": "Test Show",
    "summary": "Test Summary",
    "seasons": [
      {
        "id": 0,
        "name": "Season 1",
        "episodes": [] 
      },
      {
        "id": 1,
        "name": "Season 2",
        "episodes": []
      }
      
    ]
  }


test("renders without errors",()=>{
    render(<Display />)
})



test("when the fetch button is pressed, the show component will display.", async()=>{
   
    mockFetchShow.mockResolvedValueOnce(data)
    render(<Display />)
    const button = screen.getByRole('button');
    userEvent.click(button)
    const show = await screen.findByTestId('show-container')
    expect(show).toBeInTheDocument();


})


test("when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons", async()=>{
    mockFetchShow.mockResolvedValueOnce(data)
    render(<Display />)
    const button = screen.getByRole('button');
    userEvent.click(button)
    
    await waitFor(()=>{
        const seasonOptions = screen.findAllByTestId('season-option')
        expect(seasonOptions).toHaveLength(2)
    })
    


})








// _This component holds the state values of the application and handles api calls. In this component's tests, you work with mocking external modules and working with async / await / waitFor_
// - [x] Test that the Display component renders without any passed in props.
// - [ ] Rebuild or copy the show test data element as used in the previous set of tests.
// - [ ] Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
// - [ ] Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
// - [ ] Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.