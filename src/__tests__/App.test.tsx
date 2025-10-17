import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "../App";
import { UNDER_MAINTENANCE } from "../consts";


describe('App', () => { 

  if (UNDER_MAINTENANCE) 
  {
    test('Loads under maintenance page', () => 
    {
      render(<App />);
      expect(screen.getByText('Under Construction')).toBeInTheDocument();
    });
  }
  else
  {
    test('Loads home page', () => { 
    render(<App />);
    const element = screen.getByTestId('app-name');
    
    expect(element).toBeInTheDocument();
    

    
   });
  }

  
 });

 
