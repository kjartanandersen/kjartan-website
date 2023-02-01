import React from "react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import App from "../App";

describe('App', () => { 
  test('Loads home page', () => { 
    render(<MemoryRouter><App /></MemoryRouter>);
    const element = screen.getByTestId('app-name');
    
    expect(element).toBeInTheDocument();
    

    
   });
 });
