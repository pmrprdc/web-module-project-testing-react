import React from 'react';
import { render, screen } from '@testing-library/react';
import Episode from './Episode';
import '@testing-library/jest-dom';



const fakeData = {
    "id": 1576472,
    "url": "https://www.tvmaze.com/episodes/1576472/stranger-things-3x04-chapter-four-the-sauna-test",
    "name": "Chapter Four: The Sauna Test",
    "season": 3,
    "number": 4,
    "type": "regular",
    "airdate": "2019-07-04",
    "airtime": "",
    "airstamp": "2019-07-04T12:00:00+00:00",
    "runtime": 53,
    "rating": {
      "average": 7.9
    },
    "image": "https://static.tvmaze.com/uploads/images/medium_landscape/399/998477.jpg",
    "summary": "Mike, Lucas, and Will recruit El and Max to help them learn who the Mind Flayer's host is. Robin, Steve, and Dustin recruit someone to sneak into Lynx, and Nancy and Jonathan are fired.",
    "_links": {
      "self": {
        "href": "https://api.tvmaze.com/episodes/1576472"
      },
      "show": {
        "href": "https://api.tvmaze.com/shows/2993"
      }
    }
  }

test('renders without errors', () => {
  render(<Episode episode={fakeData}  />)
});




test('summary value passed in to the Episode component displays as expected', () => {
    render(<Episode episode={{...fakeData, summary: "CRAZY TINGS"}}  />)
    const value = screen.queryByText(/crazy tings/ig)
    expect(value).toBeInTheDocument();
    expect(value).toHaveTextContent("CRAZY TINGS")
    expect(value.innerHTML).toBe("CRAZY TINGS")
  });


  //- [ ] The episode component displays a default value (- [ ] The episode component displays a default value ('https://i.ibb.co/2FsfXqM/stranger-things.png') when a image url is not provided. Create a new piece of test data with the image property set to `null`. Test that the alt tag of the image displayed is set to './stranger_things.png'.) when a image url is not provided. Create a new piece of test data with the image property set to `null`. Test that the alt tag of the image displayed is set to './stranger_things.png'.


  test('episode component displays default value when not given an image url', ()=>{

        render(<Episode episode={{...fakeData, image: null}} />)
        const value = screen.queryByRole("img")
       expect(value.src).toContain("https://i.ibb.co/2FsfXqM/stranger-things.png")

  })