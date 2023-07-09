import React from 'react';
import { render, screen } from '@testing-library/react';
import Episode from './Episode';
import '@testing-library/jest-dom';



const fakeData = {
  "id": 553946,
  "url": "https://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
  "name": "Chapter One: The Vanishing of Will Byers",
  "season": 1,
  "number": 1,
  "type": "regular",
  "airdate": "2016-07-15",
  "airtime": "",
  "airstamp": "2016-07-15T12:00:00+00:00",
  "runtime": 49,
  "rating": {
      "average": 7.9
  },
  "image": "https://static.tvmaze.com/uploads/images/medium_landscape/342/855786.jpg",
  "summary": "A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.",
  "_links": {
      "self": {
          "href": "https://api.tvmaze.com/episodes/553946"
      },
      "show": {
          "href": "https://api.tvmaze.com/shows/2993"
      }
  }
}

test('renders without errors', () => {
  render(<Episode episode={{...fakeData}}  />)
  const value = screen.queryByText(/Chapter One: The Vanishing of Will Byers/gi)
  expect(value).toBeInTheDocument()
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


  