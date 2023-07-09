import React from 'react';
import { render, screen } from '@testing-library/react';
import Show from './Show';
import '@testing-library/jest-dom';


const data = {
  "name": "Stranger Things",
  "image": {
    "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/396/991288.jpg",
    "original": "https://static.tvmaze.com/uploads/images/original_untouched/396/991288.jpg"
  },
  "summary": "Some drama happens",
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
    },
    {
      "id": 2,
      "name": "Season 3",
      "episodes": [
      ]
    },
    {
      "id": 3,
      "name": "Season 4",
      "episodes": []
   
    },

    {
      "id": 4,
      "name": "Season 5",
      "episodes": []
    }
  ]
}



test('Show component renders when your test data is passed in through show prop and "none" is passed in through selectedSeason prop.', ()=>{

    render(<Show episode={{...data}} selectedSeason="none" />)
    const value = screen.queryByText(/some drama happens/ig)
   expect(value).toBeInTheDocument();

})