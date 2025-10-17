import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "../App";

describe('App', () => { 
  test('Loads home page', () => { 
    render(<App />);
    const element = screen.getByTestId('app-name');
    
    expect(element).toBeInTheDocument();
    

    
   });
 });
