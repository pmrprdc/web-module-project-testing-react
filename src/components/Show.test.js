import React from 'react';
import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import Show from './Show';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';


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



test('Show component renders when your test data is passed in through show prop and "none" is passed in through selectedSeason prop.', () => {

    render(<Show show={data} selectedSeason={"none"} />);
   

})



test('Renders loading container when show is null', () => {

    render(<Show show={null}  />);
    const loading = screen.queryByTestId('loading-container');
    expect(loading).toBeInTheDocument();

})


test('Renders same number of options as passed in', () => {
    
    render(<Show show={data} selectedSeason={"none"}  />);
    const seasonOptions = screen.queryAllByTestId('season-option');
    expect(seasonOptions).toHaveLength(2)

})


test('handleSelect is called when a season is selected', () => {
    const handleSelect = jest.fn(event => event.target.value); // handleSelect now handles an event
    render(<Show show={data} selectedSeason={"none"} handleSelect={handleSelect} />);
    const select = screen.getByLabelText(/select a season/i)
    fireEvent.change(select, { target: { value: '0' } });
    expect(handleSelect).toBeCalled()
   
});