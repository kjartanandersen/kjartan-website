import { render, screen } from "@testing-library/react";
import React from "react";
import Education from "../CV/Education/Education";
import '@testing-library/jest-dom'



import { getAllEducation2 } from  '../helpers/cv-storage'

test('should render Education correctly', async () => { 
    render(<Education />);
    const linkElement = screen.getByText(/Education/i);
    expect(linkElement).toBeInTheDocument

 });



